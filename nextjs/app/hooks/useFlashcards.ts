'use client';

import { useState, useEffect, useCallback } from 'react';
import { Flashcard, Topic } from '../types';

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

export function useFlashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTopics = useCallback(async () => {
    try {
      const scannedTopics = await scanAndCreateTopics();
      setTopics(scannedTopics);
      return scannedTopics;
    } catch (err) {
      console.error('Error scanning topics:', err);
      setError('Không thể tải danh sách chủ đề');
      return [];
    }
  }, []);

  const loadFlashcards = useCallback(
    async (topicIndex: number) => {
      try {
        setLoading(true);
        setError(null);

        let topicsList = topics;
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
        setFlashcards(data);
        setCurrentTopicIndex(topicIndex);
        setCurrentIndex(0);
        setLoading(false);
      } catch (err) {
        console.error('Error loading flashcards:', err);
        setError('Không thể tải dữ liệu flashcard. Vui lòng kiểm tra kết nối mạng và thử lại.');
        setLoading(false);
      }
    },
    [topics, loadTopics]
  );

  useEffect(() => {
    const initialize = async () => {
      const topicsList = await loadTopics();
      if (topicsList.length > 0) {
        await loadFlashcards(0);
      } else {
        setError('Không tìm thấy file JSON nào trong thư mục. Vui lòng kiểm tra lại.');
        setLoading(false);
      }
    };

    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchTopic = useCallback(
    async (topicIndex: number) => {
      setCurrentIndex(0);
      await loadFlashcards(topicIndex);
    },
    [loadFlashcards]
  );

  const navigate = useCallback(
    (direction: 'next' | 'prev') => {
      if (flashcards.length === 0) return;

      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % flashcards.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
      }
    },
    [flashcards.length]
  );

  const goToCard = useCallback((index: number) => {
    if (index >= 0 && index < flashcards.length) {
      setCurrentIndex(index);
    }
  }, [flashcards.length]);

  return {
    flashcards,
    topics,
    currentTopicIndex,
    currentIndex,
    currentCard: flashcards[currentIndex],
    totalCards: flashcards.length,
    loading,
    error,
    switchTopic,
    navigate,
    goToCard,
  };
}
