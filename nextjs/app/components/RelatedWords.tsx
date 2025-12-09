'use client';

import { CharData } from '../types';
import { useSpeech } from '../hooks/useSpeech';

interface RelatedWordsProps {
  charData?: CharData;
  charIndex: number;
}

export default function RelatedWords({ charData, charIndex }: RelatedWordsProps) {
  const { speakChinese } = useSpeech();

  if (!charData) {
    return (
      <p className="text-slate-500 italic text-center text-base">
        Dữ liệu phân tích từ gốc chưa được cung cấp cho thẻ này.
      </p>
    );
  }

  return (
    <div className="mb-4">
      <p className="text-sm font-bold text-slate-600 mb-2 flex items-center">
        {charIndex}. Từ gốc:{' '}
        <span className="chinese-font text-lg text-blue-800 mr-2">{charData.hanzi}</span>
        <span className="mr-2">({charData.pinyin}, {charData.hanviet})</span>
        <button
          onClick={() => speakChinese(charData.hanzi)}
          className="speak-btn ml-2 text-indigo-600 hover:text-indigo-800 p-1 rounded-full hover:bg-indigo-100 transition duration-150"
          aria-label={`Phát âm Hán tự ${charData.hanzi}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
          </svg>
        </button>
      </p>

      <div className="flex flex-wrap gap-2 text-sm">
        {charData.words && charData.words.length > 0 ? (
          charData.words.map((word, idx) => (
            <button
              key={idx}
              onClick={() => speakChinese(word.hanzi)}
              className="speak-btn bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium whitespace-nowrap text-sm md:text-base hover:bg-indigo-200 transition duration-150"
            >
              <span className="chinese-font font-bold mr-1">{word.hanzi}</span>
              <span className="mr-1">({word.pinyin}, {word.hanviet})</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-volume-1 inline ml-1"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a2.16 2.16 0 0 1 0 3.08" />
              </svg>
            </button>
          ))
        ) : (
          <span className="text-slate-500 italic text-sm">
            Không có dữ liệu từ ghép mở rộng cho từ này.
          </span>
        )}
      </div>
    </div>
  );
}
