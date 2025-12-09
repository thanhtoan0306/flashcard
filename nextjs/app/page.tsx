import { FlashcardProvider } from './context/FlashcardContext';
import Controls from './components/Controls';
import Flashcard from './components/Flashcard';

export default function Home() {
  return (
    <FlashcardProvider>
      <main className="bg-slate-100 flex flex-col items-center justify-center min-h-screen p-4">
        <Controls />
        <Flashcard />
      </main>
    </FlashcardProvider>
  );
}
