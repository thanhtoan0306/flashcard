import { writable, derived, get } from 'svelte/store';
import type { Flashcard, Topic } from '../types';

const JSON_FILES = [
  'default.json',
  'hospital.json',
  'kitchen.json',
  'body.json',
  'smartphone.json',
  'planets.json',
  'dinosaurs.json',
  'study_supplies.json',
  'vegetables.json',
  'dishes.json',
  'drinking.json',
  'radicals.json',
];

async function checkJsonFileExists(filename: string): Promise<boolean> {
  try {
    const response = await fetch(`/${filename}`, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function scanAndCreateTopics(): Promise<Topic[]> {
  const topics: Topic[] = [];

  for (const filename of JSON_FILES) {
    const exists = await checkJsonFileExists(filename);
    if (exists) {
      const displayName = filename
        .replace('.json', '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());
      topics.push({
        name: displayName,
        file: filename,
      });
    }
  }

  return topics;
}

// Stores
export const flashcards = writable<Flashcard[]>([]);
export const topics = writable<Topic[]>([]);
export const currentTopicIndex = writable<number>(0);
export const currentIndex = writable<number>(0);
export const loading = writable<boolean>(true);
export const error = writable<string | null>(null);

// Derived stores
export const currentCard = derived(
  [flashcards, currentIndex],
  ([$flashcards, $currentIndex]) => $flashcards[$currentIndex]
);

export const totalCards = derived(flashcards, ($flashcards) => $flashcards.length);

// Actions
export async function loadTopics() {
  try {
    const scannedTopics = await scanAndCreateTopics();
    topics.set(scannedTopics);
    return scannedTopics;
  } catch (err) {
    console.error('Error scanning topics:', err);
    error.set('Không thể tải danh sách chủ đề');
    return [];
  }
}

export async function loadFlashcards(topicIndex: number) {
  try {
    loading.set(true);
    error.set(null);

    // Get current topics value
    let topicsList: Topic[] = get(topics);

    if (topicsList.length === 0) {
      topicsList = await loadTopics();
    }

    if (topicsList.length === 0) {
      throw new Error('Không tìm thấy file JSON nào');
    }

    const topic = topicsList[topicIndex];
    const response = await fetch(`/${topic.file}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Flashcard[] = await response.json();
    flashcards.set(data);
    currentTopicIndex.set(topicIndex);
    currentIndex.set(0);
    loading.set(false);
  } catch (err) {
    console.error('Error loading flashcards:', err);
    error.set('Không thể tải dữ liệu flashcard. Vui lòng kiểm tra kết nối mạng và thử lại.');
    loading.set(false);
  }
}

export async function switchTopic(topicIndex: number) {
  currentIndex.set(0);
  await loadFlashcards(topicIndex);
}

export function navigate(direction: 'next' | 'prev') {
  const cards = get(flashcards);

  if (cards.length === 0) return;

  currentIndex.update((index) => {
    if (direction === 'next') {
      return (index + 1) % cards.length;
    } else {
      return (index - 1 + cards.length) % cards.length;
    }
  });
}

export function goToCard(index: number) {
  const cards = get(flashcards);

  if (index >= 0 && index < cards.length) {
    currentIndex.set(index);
  }
}

// Initialize
export async function initializeFlashcards() {
  const topicsList = await loadTopics();
  if (topicsList.length > 0) {
    await loadFlashcards(0);
  } else {
    error.set('Không tìm thấy file JSON nào trong thư mục. Vui lòng kiểm tra lại.');
    loading.set(false);
  }
}
