'use client';

import { useFlashcardContext } from '../context/FlashcardContext';
import { useSpeech } from '../hooks/useSpeech';

export default function Controls() {
  const {
    topics,
    currentTopicIndex,
    currentIndex,
    totalCards,
    switchTopic,
    navigate,
    goToCard,
  } = useFlashcardContext();
  const { stopSpeaking } = useSpeech();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value) - 1;
    stopSpeaking();
    goToCard(newIndex);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(e.target.value);
    stopSpeaking();
    switchTopic(selectedIndex);
  };

  const handlePrev = () => {
    stopSpeaking();
    navigate('prev');
  };

  const handleNext = () => {
    stopSpeaking();
    navigate('next');
  };

  return (
    <div className="w-full max-w-lg mx-auto mb-6 flex flex-col items-center">
      {/* Bộ đếm và Slider */}
      <div className="w-full mb-4">
        <div className="text-center text-green-600 mb-2 font-bold text-lg">
          {topics.length > 0 && (
            <>📚 {topics[currentTopicIndex]?.name}</>
          )}
        </div>
        <div className="text-center text-slate-600 mb-3 font-medium text-lg">
          Thẻ số: {currentIndex + 1} / {totalCards}
        </div>
        <input
          type="range"
          id="card-slider"
          min="1"
          max={totalCards || 1}
          value={currentIndex + 1}
          onChange={handleSliderChange}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Nút điều khiển */}
      <div className="flex items-center space-x-4 w-full justify-center">
        <button
          onClick={handlePrev}
          className="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-500 transition-transform transform hover:scale-105 text-base md:text-lg"
        >
          &larr; Trước
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 text-base md:text-lg"
        >
          Tiếp theo &rarr;
        </button>
      </div>

      {/* Dropdown chọn chủ đề */}
      <div className="mt-4">
        <label htmlFor="topic-select" className="block text-sm font-medium text-gray-700 mb-2">
          Chọn chủ đề:
        </label>
        <select
          id="topic-select"
          value={currentTopicIndex}
          onChange={handleTopicChange}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-base font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-w-48"
        >
          {topics.map((topic, index) => (
            <option key={index} value={index}>
              {topic.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
