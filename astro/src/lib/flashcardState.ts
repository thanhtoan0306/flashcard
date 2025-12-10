import type { Flashcard, Topic } from './dataService';

export class FlashcardState {
  private flashcards: Flashcard[] = [];
  private currentIndex = 0;
  private topics: Topic[] = [];
  private currentTopicIndex = 0;
  private listeners: Set<() => void> = new Set();

  getFlashcards(): Flashcard[] {
    return this.flashcards;
  }

  getCurrentCard(): Flashcard | null {
    return this.flashcards[this.currentIndex] || null;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  getTotalCards(): number {
    return this.flashcards.length;
  }

  getTopics(): Topic[] {
    return this.topics;
  }

  getCurrentTopicIndex(): number {
    return this.currentTopicIndex;
  }

  setFlashcards(flashcards: Flashcard[]): void {
    this.flashcards = flashcards;
    this.currentIndex = 0;
    this.notify();
  }

  setTopics(topics: Topic[]): void {
    this.topics = topics;
    this.notify();
  }

  setCurrentTopicIndex(index: number): void {
    this.currentTopicIndex = index;
    this.currentIndex = 0;
    this.notify();
  }

  setCurrentIndex(index: number): void {
    if (index >= 0 && index < this.flashcards.length) {
      this.currentIndex = index;
      this.notify();
    }
  }

  next(): void {
    this.setCurrentIndex((this.currentIndex + 1) % this.flashcards.length);
  }

  prev(): void {
    this.setCurrentIndex((this.currentIndex - 1 + this.flashcards.length) % this.flashcards.length);
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    this.listeners.forEach(listener => listener());
  }
}

export const flashcardState = new FlashcardState();
