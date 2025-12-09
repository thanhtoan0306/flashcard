'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useFlashcards } from '../hooks/useFlashcards';

type FlashcardContextType = ReturnType<typeof useFlashcards>;

const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

export function FlashcardProvider({ children }: { children: ReactNode }) {
  const value = useFlashcards();
  return <FlashcardContext.Provider value={value}>{children}</FlashcardContext.Provider>;
}

export function useFlashcardContext() {
  const context = useContext(FlashcardContext);
  if (context === undefined) {
    throw new Error('useFlashcardContext must be used within a FlashcardProvider');
  }
  return context;
}
