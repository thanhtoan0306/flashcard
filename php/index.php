<?php
require_once 'functions.php';

// Get current topic from query parameter or default to first
$topicIndex = isset($_GET['topic']) ? (int)$_GET['topic'] : 0;
$topics = scanAndCreateTopics();

// Validate topic index
if ($topicIndex < 0 || $topicIndex >= count($topics)) {
    $topicIndex = 0;
}

$currentTopic = $topics[$topicIndex] ?? null;
$flashcards = [];

if ($currentTopic) {
    $flashcards = loadFlashcards($currentTopic['file']);
    if ($flashcards === null) {
        $flashcards = [];
    }
}

$currentCardIndex = isset($_GET['card']) ? (int)$_GET['card'] : 0;
if ($currentCardIndex < 0 || $currentCardIndex >= count($flashcards)) {
    $currentCardIndex = 0;
}

$currentCard = $flashcards[$currentCardIndex] ?? null;
?>
<!DOCTYPE html>
<html lang="vi" x-data="flashcardApp()" x-init="init()">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcard Hán Việt - Tính năng Phát âm (Web Speech) - PHP</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Quicksand', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        .chinese-font {
            font-family: 'Noto Sans SC', sans-serif;
        }
        /* Styling cho Slider */
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #2563eb;
            cursor: pointer;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 1px #2563eb;
        }
        input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #2563eb;
            cursor: pointer;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 1px #2563eb;
        }
        .card-display {
            display: block;
            min-height: 25rem; 
        }
        .speak-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body class="bg-slate-100 flex flex-col items-center justify-center min-h-screen p-4">

    <!-- Thanh điều hướng và Slider -->
    <div class="w-full max-w-lg mx-auto mb-6 flex flex-col items-center">
        <!-- Bộ đếm và Slider -->
        <div class="w-full mb-4">
            <?php if (count($topics) > 0): ?>
            <div class="text-center text-green-600 mb-2 font-bold text-lg">
                📚 <?= e($currentTopic['name']) ?>
            </div>
            <?php endif; ?>
            <div class="text-center text-slate-600 mb-3 font-medium text-lg">
                Thẻ số: <span x-text="currentIndex + 1"></span> / <span x-text="totalCards"></span>
            </div>
            <input 
                type="range" 
                :min="1"
                :max="totalCards"
                :value="currentIndex + 1"
                @input="handleSliderChange($event)"
                class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            >
        </div>
        <!-- Nút điều khiển -->
        <div class="flex items-center space-x-4 w-full justify-center">
            <button 
                @click="navigate('prev')"
                class="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-500 transition-transform transform hover:scale-105 text-base md:text-lg"
            >
                &larr; Trước
            </button>
            <button 
                @click="navigate('next')"
                class="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 text-base md:text-lg"
            >
                Tiếp theo &rarr;
            </button>
        </div>
        
        <!-- Dropdown chọn chủ đề -->
        <div class="mt-4">
            <label for="topic-select" class="block text-sm font-medium text-gray-700 mb-2">Chọn chủ đề:</label>
            <select 
                id="topic-select"
                x-model="currentTopicIndex"
                @change="switchTopic($event.target.value)"
                class="bg-white border border-gray-300 rounded-lg px-4 py-2 text-base font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-w-48"
            >
                <?php foreach ($topics as $index => $topic): ?>
                    <option value="<?= $index ?>" <?= $index === $topicIndex ? 'selected' : '' ?>>
                        <?= e($topic['name']) ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </div>
    </div>
    
    <!-- Container cho Flashcard -->
    <div class="card-display bg-white p-6 md:p-8 rounded-xl shadow-xl w-full max-w-lg mb-8 transition-all duration-300">
        <!-- Flashcard Content -->
        <template x-if="currentCard">
            <div>
                <!-- Phần Hán tự và Pinyin -->
                <div class="text-center mb-6 border-b pb-4 border-slate-200">
                    <div class="flex justify-center items-center">
                        <p class="chinese-font text-5xl md:text-7xl font-bold text-slate-900 leading-tight" x-text="currentCard.hanzi"></p>
                        <button 
                            @click="speakChinese(currentCard.hanzi)"
                            class="speak-btn ml-2 text-blue-600 hover:text-blue-800 transition duration-150 p-2 rounded-full hover:bg-blue-50"
                            aria-label="Phát âm từ này"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                            </svg>
                        </button>
                    </div>
                    <p class="text-2xl text-blue-600 mt-1 font-medium" x-text="`[${currentCard.pinyin}]`"></p>
                </div>

                <!-- Phần Nghĩa và Hán Việt -->
                <div class="space-y-3 text-lg md:text-xl text-left text-slate-800 mb-6">
                    <p>
                        <strong>Âm Hán Việt:</strong> 
                        <span class="font-semibold text-slate-700" x-text="currentCard.hanviet"></span>
                    </p>
                    <p>
                        <strong>Nghĩa Việt:</strong> 
                        <span class="font-extrabold text-red-600" x-text="currentCard.vietnamese"></span>
                    </p>
                </div>

                <!-- Phần Phân tích Từ ghép -->
                <div class="mt-6 pt-4 border-t border-slate-200">
                    <p class="text-base font-bold text-slate-700 mb-3 border-b pb-2">Phân tích từ gốc:</p>
                    
                    <!-- Từ ghép Set 1 -->
                    <template x-if="currentCard.char1">
                        <div class="mb-4">
                            <p class="text-sm font-bold text-slate-600 mb-2 flex items-center">
                                1. Từ gốc: 
                                <span class="chinese-font text-lg text-blue-800 mr-2" x-text="currentCard.char1.hanzi"></span>
                                <span class="mr-2" x-text="`(${currentCard.char1.pinyin}, ${currentCard.char1.hanviet})`"></span>
                                <button 
                                    @click="speakChinese(currentCard.char1.hanzi)"
                                    class="speak-btn ml-2 text-indigo-600 hover:text-indigo-800 p-1 rounded-full hover:bg-indigo-100 transition duration-150"
                                    :aria-label="`Phát âm Hán tự ${currentCard.char1.hanzi}`"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                    </svg>
                                </button>
                            </p>
                            <div class="flex flex-wrap gap-2 text-sm">
                                <template x-if="currentCard.char1.words && currentCard.char1.words.length > 0">
                                    <template x-for="word in currentCard.char1.words" :key="word.hanzi">
                                        <button
                                            @click="speakChinese(word.hanzi)"
                                            class="speak-btn bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium whitespace-nowrap text-sm md:text-base hover:bg-indigo-200 transition duration-150"
                                        >
                                            <span class="chinese-font font-bold mr-1" x-text="word.hanzi"></span>
                                            <span class="mr-1" x-text="`(${word.pinyin}, ${word.hanviet})`"></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-1 inline ml-1">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                                <path d="M15.54 8.46a2.16 2.16 0 0 1 0 3.08"/>
                                            </svg>
                                        </button>
                                    </template>
                                </template>
                                <template x-if="!currentCard.char1.words || currentCard.char1.words.length === 0">
                                    <span class="text-slate-500 italic text-sm">Không có dữ liệu từ ghép mở rộng cho từ này.</span>
                                </template>
                            </div>
                        </div>
                    </template>
                    <template x-if="!currentCard.char1">
                        <p class="text-slate-500 italic text-center text-base mb-4">Dữ liệu phân tích từ gốc chưa được cung cấp cho thẻ này.</p>
                    </template>

                    <!-- Từ ghép Set 2 -->
                    <template x-if="currentCard.char2">
                        <div class="mb-4">
                            <p class="text-sm font-bold text-slate-600 mb-2 flex items-center">
                                2. Từ gốc: 
                                <span class="chinese-font text-lg text-blue-800 mr-2" x-text="currentCard.char2.hanzi"></span>
                                <span class="mr-2" x-text="`(${currentCard.char2.pinyin}, ${currentCard.char2.hanviet})`"></span>
                                <button 
                                    @click="speakChinese(currentCard.char2.hanzi)"
                                    class="speak-btn ml-2 text-indigo-600 hover:text-indigo-800 p-1 rounded-full hover:bg-indigo-100 transition duration-150"
                                    :aria-label="`Phát âm Hán tự ${currentCard.char2.hanzi}`"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                    </svg>
                                </button>
                            </p>
                            <div class="flex flex-wrap gap-2 text-sm">
                                <template x-if="currentCard.char2.words && currentCard.char2.words.length > 0">
                                    <template x-for="word in currentCard.char2.words" :key="word.hanzi">
                                        <button
                                            @click="speakChinese(word.hanzi)"
                                            class="speak-btn bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium whitespace-nowrap text-sm md:text-base hover:bg-indigo-200 transition duration-150"
                                        >
                                            <span class="chinese-font font-bold mr-1" x-text="word.hanzi"></span>
                                            <span class="mr-1" x-text="`(${word.pinyin}, ${word.hanviet})`"></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-1 inline ml-1">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                                <path d="M15.54 8.46a2.16 2.16 0 0 1 0 3.08"/>
                                            </svg>
                                        </button>
                                    </template>
                                </template>
                                <template x-if="!currentCard.char2.words || currentCard.char2.words.length === 0">
                                    <span class="text-slate-500 italic text-sm">Không có dữ liệu từ ghép mở rộng cho từ này.</span>
                                </template>
                            </div>
                        </div>
                    </template>
                    <template x-if="!currentCard.char2">
                        <p class="text-slate-500 italic text-center text-base">Dữ liệu phân tích từ gốc chưa được cung cấp cho thẻ này.</p>
                    </template>
                </div>
            </div>
        </template>
    </div>

    <script>
        // Pass PHP data to JavaScript
        const phpData = {
            flashcards: <?= json_encode($flashcards, JSON_UNESCAPED_UNICODE) ?>,
            topics: <?= json_encode($topics, JSON_UNESCAPED_UNICODE) ?>,
            currentTopicIndex: <?= $topicIndex ?>,
            currentIndex: <?= $currentCardIndex ?>
        };

        function flashcardApp() {
            return {
                // Data from PHP
                flashcards: phpData.flashcards,
                topics: phpData.topics,
                currentTopicIndex: phpData.currentTopicIndex,
                currentIndex: phpData.currentIndex,
                chineseVoice: null,
                isSpeaking: false,

                // Computed
                get totalCards() {
                    return this.flashcards.length;
                },

                get currentCard() {
                    return this.flashcards[this.currentIndex] || null;
                },

                // Methods
                loadChineseVoice() {
                    if (!window.speechSynthesis) return;
                    
                    const voices = window.speechSynthesis.getVoices();
                    const voice = voices.find(
                        v => v.lang.startsWith('zh-') ||
                             v.lang.includes('cmn-') ||
                             v.name.toLowerCase().includes('chinese') ||
                             v.name.toLowerCase().includes('mandarin')
                    );

                    if (voice) {
                        this.chineseVoice = voice;
                    } else {
                        console.warn('Không tìm thấy giọng tiếng Trung cụ thể. Sử dụng giọng mặc định.');
                    }
                },

                speakChinese(textToSpeak) {
                    if (!window.speechSynthesis) {
                        console.error('Trình duyệt không hỗ trợ Web Speech API.');
                        return;
                    }

                    // Dừng phát âm cũ nếu đang có
                    if (this.isSpeaking) {
                        window.speechSynthesis.cancel();
                        this.isSpeaking = false;
                    }

                    const utterance = new SpeechSynthesisUtterance(textToSpeak.replace(/ /g, ''));

                    if (this.chineseVoice) {
                        utterance.voice = this.chineseVoice;
                    } else {
                        utterance.lang = 'zh-CN';
                    }

                    utterance.rate = 0.8;

                    utterance.onstart = () => {
                        this.isSpeaking = true;
                    };

                    utterance.onend = () => {
                        this.isSpeaking = false;
                    };

                    utterance.onerror = (event) => {
                        this.isSpeaking = false;
                        console.error('Lỗi phát âm Web Speech:', event.error);
                    };

                    window.speechSynthesis.speak(utterance);
                },

                stopSpeaking() {
                    if (window.speechSynthesis) {
                        window.speechSynthesis.cancel();
                        this.isSpeaking = false;
                    }
                },

                navigate(direction) {
                    if (this.flashcards.length === 0) return;
                    this.stopSpeaking();
                    
                    if (direction === 'next') {
                        this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
                    } else if (direction === 'prev') {
                        this.currentIndex = (this.currentIndex - 1 + this.flashcards.length) % this.flashcards.length;
                    }
                    
                    // Update URL without reload
                    this.updateURL();
                },

                handleSliderChange(event) {
                    const newIndex = parseInt(event.target.value) - 1;
                    this.stopSpeaking();
                    if (newIndex >= 0 && newIndex < this.flashcards.length) {
                        this.currentIndex = newIndex;
                        this.updateURL();
                    }
                },

                switchTopic(selectedIndex) {
                    const index = parseInt(selectedIndex);
                    this.currentTopicIndex = index;
                    this.currentIndex = 0;
                    this.stopSpeaking();
                    
                    // Reload page with new topic
                    window.location.href = `?topic=${index}&card=0`;
                },

                updateURL() {
                    const url = new URL(window.location);
                    url.searchParams.set('topic', this.currentTopicIndex);
                    url.searchParams.set('card', this.currentIndex);
                    window.history.pushState({}, '', url);
                },

                init() {
                    // Load Chinese voice
                    this.loadChineseVoice();
                    if (window.speechSynthesis && 'onvoiceschanged' in window.speechSynthesis) {
                        window.speechSynthesis.onvoiceschanged = () => this.loadChineseVoice();
                    }
                }
            }
        }
    </script>
</body>
</html>
