'use client';

import { useFlashcardContext } from '../context/FlashcardContext';
import { useSpeech } from '../hooks/useSpeech';
import RelatedWords from './RelatedWords';

export default function Flashcard() {
  const { currentCard, currentIndex, totalCards, loading, error } = useFlashcardContext();
  const { speakChinese, stopSpeaking } = useSpeech();

  if (loading) {
    return (
      <div className="card-display bg-white p-6 md:p-8 rounded-xl shadow-xl w-full max-w-lg mb-8">
        <div className="text-center text-slate-600 p-8">
          <p>Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card-display bg-white p-6 md:p-8 rounded-xl shadow-xl w-full max-w-lg mb-8">
        <div className="text-center text-red-600 p-8">
          <h2 className="text-xl font-bold mb-4">Lỗi tải dữ liệu</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!currentCard) {
    return null;
  }

  return (
    <div className="card-display bg-white p-6 md:p-8 rounded-xl shadow-xl w-full max-w-lg mb-8 transition-all duration-300">
      {/* Phần Hán tự và Pinyin */}
      <div className="text-center mb-6 border-b pb-4 border-slate-200">
        <div className="flex justify-center items-center">
          <p className="chinese-font text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            {currentCard.hanzi}
          </p>
          <button
            onClick={() => speakChinese(currentCard.hanzi)}
            className="speak-btn ml-2 text-blue-600 hover:text-blue-800 transition duration-150 p-2 rounded-full hover:bg-blue-50"
            aria-label="Phát âm từ này"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-volume-2"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          </button>
        </div>
        <p className="text-2xl text-blue-600 mt-1 font-medium">
          [{currentCard.pinyin}]
        </p>
      </div>

      {/* Phần Nghĩa và Hán Việt */}
      <div className="space-y-3 text-lg md:text-xl text-left text-slate-800 mb-6">
        <p>
          <strong>Âm Hán Việt:</strong>{' '}
          <span className="font-semibold text-slate-700">{currentCard.hanviet}</span>
        </p>
        <p>
          <strong>Nghĩa Việt:</strong>{' '}
          <span className="font-extrabold text-red-600">{currentCard.vietnamese}</span>
        </p>
      </div>

      {/* Phần Phân tích Từ ghép */}
      <div className="mt-6 pt-4 border-t border-slate-200">
        <p className="text-base font-bold text-slate-700 mb-3 border-b pb-2">
          Phân tích từ gốc:
        </p>

        <RelatedWords charData={currentCard.char1} charIndex={1} />
        <RelatedWords charData={currentCard.char2} charIndex={2} />
      </div>
    </div>
  );
}
