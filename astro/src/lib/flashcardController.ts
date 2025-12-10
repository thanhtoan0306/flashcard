import { flashcardState } from './flashcardState';
import { speechService } from './speechService';
import { scanAndCreateTopics, loadFlashcards } from './dataService';
import type { Flashcard } from './dataService';

export class FlashcardController {
  private unsubscribe: (() => void) | null = null;

  async initialize(): Promise<void> {
    try {
      console.log('Bắt đầu khởi tạo ứng dụng...');
      const topics = await scanAndCreateTopics();
      console.log('Đã tìm thấy topics:', topics);
      flashcardState.setTopics(topics);

      if (topics.length > 0) {
        console.log('Đang tải topic đầu tiên...');
        await this.loadTopic(0);
        console.log('Đã tải xong flashcards');
      } else {
        console.error('Không tìm thấy file JSON nào');
        this.showError('Không tìm thấy file JSON nào');
      }
    } catch (error) {
      console.error('Lỗi khởi tạo ứng dụng:', error);
      this.showError(`Lỗi khởi tạo ứng dụng: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async loadTopic(topicIndex: number): Promise<void> {
    try {
      const topics = flashcardState.getTopics();
      console.log(`Đang tải topic ${topicIndex}:`, topics[topicIndex]);
      const flashcards = await loadFlashcards(topicIndex, topics);
      console.log(`Đã tải ${flashcards.length} flashcards`);
      flashcardState.setCurrentTopicIndex(topicIndex);
      flashcardState.setFlashcards(flashcards);
    } catch (error) {
      console.error('Error loading flashcards:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      this.showError(`Không thể tải dữ liệu flashcard: ${errorMessage}`);
    }
  }

  setupEventListeners(): void {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const cardSlider = document.getElementById('card-slider') as HTMLInputElement;
    const topicSelect = document.getElementById('topic-select') as HTMLSelectElement;

    nextBtn?.addEventListener('click', () => {
      speechService.stop();
      flashcardState.next();
    });

    prevBtn?.addEventListener('click', () => {
      speechService.stop();
      flashcardState.prev();
    });

    cardSlider?.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      const index = parseInt(target.value) - 1;
      speechService.stop();
      flashcardState.setCurrentIndex(index);
    });

    topicSelect?.addEventListener('change', async (event) => {
      const target = event.target as HTMLSelectElement;
      const selectedIndex = parseInt(target.value);
      console.log(`🔄 Đang chuyển sang topic ${selectedIndex}...`);
      speechService.stop();
      try {
        await this.loadTopic(selectedIndex);
        console.log(`✅ Đã chuyển sang topic ${selectedIndex}`);
      } catch (error) {
        console.error(`❌ Lỗi khi chuyển topic:`, error);
        // Reset dropdown to previous value on error
        const currentTopicIndex = flashcardState.getCurrentTopicIndex();
        target.value = currentTopicIndex.toString();
      }
    });

    // Setup speak buttons
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const speakButton = target.closest('[data-speak-text]') as HTMLElement;
      if (speakButton) {
        const text = speakButton.getAttribute('data-speak-text');
        if (text) {
          this.handleSpeak(text, speakButton);
        }
      }
    });
  }

  private handleSpeak(text: string, button: HTMLElement): void {
    button.disabled = true;
    button.classList.add('opacity-50', 'cursor-not-allowed');

    speechService.speak(
      text,
      () => {
        // onStart
      },
      () => {
        // onEnd
        button.disabled = false;
        button.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    );
  }

  setupStateListener(updateCallback: () => void): void {
    this.unsubscribe = flashcardState.subscribe(updateCallback);
  }

  updateUI(): void {
    console.log('🔄 Đang cập nhật UI...');
    const card = flashcardState.getCurrentCard();
    const currentIndex = flashcardState.getCurrentIndex();
    const totalCards = flashcardState.getTotalCards();
    const topics = flashcardState.getTopics();
    const currentTopicIndex = flashcardState.getCurrentTopicIndex();

    console.log('📊 State:', { currentIndex, totalCards, hasCard: !!card, topicsCount: topics.length });

    // Update counter
    const cardCounter = document.getElementById('card-counter');
    if (cardCounter) {
      cardCounter.textContent = `Thẻ số: ${currentIndex + 1} / ${totalCards}`;
      console.log('✅ Đã cập nhật counter');
    } else {
      console.warn('⚠️ Không tìm thấy card-counter element');
    }

    // Update slider
    const cardSlider = document.getElementById('card-slider') as HTMLInputElement;
    if (cardSlider) {
      cardSlider.max = totalCards.toString();
      cardSlider.value = (currentIndex + 1).toString();
    }

    // Update topic indicator
    const topicIndicator = document.getElementById('topic-indicator');
    if (topicIndicator && topics[currentTopicIndex]) {
      topicIndicator.textContent = `📚 ${topics[currentTopicIndex].name}`;
    }

    // Update topic select - populate options if needed, then set value
    const topicSelect = document.getElementById('topic-select') as HTMLSelectElement;
    if (topicSelect) {
      // Check if we need to populate or update options
      const needsUpdate = topicSelect.options.length === 0 || 
                         topicSelect.options.length !== topics.length ||
                         (topics.length > 0 && topicSelect.options[0].textContent === 'Đang tải chủ đề...');
      
      if (needsUpdate && topics.length > 0) {
        console.log('📝 Đang populate/update dropdown options...');
        // Clear existing options
        topicSelect.innerHTML = '';
        
        // Add all topic options
        topics.forEach((topic, index) => {
          const option = document.createElement('option');
          option.value = index.toString();
          option.textContent = topic.name;
          topicSelect.appendChild(option);
        });
        console.log(`✅ Đã thêm ${topics.length} options vào dropdown`);
      }
      
      // Update selected value
      if (topics.length > 0 && currentTopicIndex >= 0 && currentTopicIndex < topics.length) {
        topicSelect.value = currentTopicIndex.toString();
        console.log(`✅ Đã set dropdown value thành ${currentTopicIndex} (${topics[currentTopicIndex]?.name})`);
      }
    } else {
      console.warn('⚠️ Không tìm thấy topic-select element');
    }

    // Update card content
    const flashcardContainer = document.getElementById('flashcard');
    if (card && flashcardContainer) {
      console.log('📝 Đang cập nhật card content...');
      // Check if card content exists, if not, render it
      const hanziEl = document.getElementById('card-hanzi-pinyin');
      
      if (!hanziEl) {
        console.log('🆕 Card chưa được render, đang render full card...');
        // Card content not rendered yet, need to render full card
        this.renderFullCard(card, flashcardContainer);
        console.log('✅ Đã render full card');
      } else {
        console.log('🔄 Card đã tồn tại, đang cập nhật values...');
        // Card content exists, just update values
        const pinyinEl = document.getElementById('card-pinyin-only');
        const hanvietEl = document.getElementById('card-hanviet');
        const vietnameseEl = document.getElementById('card-vietnamese');

        if (hanziEl) hanziEl.textContent = card.hanzi;
        if (pinyinEl) pinyinEl.textContent = `[${card.pinyin}]`;
        if (hanvietEl) hanvietEl.textContent = card.hanviet;
        if (vietnameseEl) vietnameseEl.textContent = card.vietnamese;

        // Update main speak button
        const mainSpeakButton = document.getElementById('speak-main-btn');
        if (mainSpeakButton) {
          mainSpeakButton.setAttribute('data-speak-text', card.hanzi);
        }

        // Update character analysis
        this.updateCharacterAnalysis('char1-related-container', card.char1, 1);
        this.updateCharacterAnalysis('char2-related-container', card.char2, 2);
        console.log('✅ Đã cập nhật card content');
      }
    } else if (!card && flashcardContainer) {
      console.log('⏳ Không có card, hiển thị loading state...');
      // Show loading state
      flashcardContainer.innerHTML = `
        <div class="text-center p-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p class="text-slate-600 text-lg font-medium">Đang tải dữ liệu...</p>
        </div>
      `;
    }
  }

  private renderFullCard(card: Flashcard, container: HTMLElement): void {
    container.innerHTML = `
      <!-- Phần Hán tự và Pinyin -->
      <div class="text-center mb-6 border-b pb-4 border-slate-200">
        <div class="flex justify-center items-center">
          <p id="card-hanzi-pinyin" class="chinese-font text-5xl md:text-7xl font-bold text-slate-900 leading-tight">${card.hanzi}</p>
          <button id="speak-main-btn" class="speak-btn ml-2 text-blue-600 hover:text-blue-800 transition duration-150 p-2 rounded-full hover:bg-blue-50" data-speak-text="${card.hanzi}" aria-label="Phát âm từ này">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          </button>
        </div>
        <p id="card-pinyin-only" class="text-2xl text-blue-600 mt-1 font-medium">[${card.pinyin}]</p>
      </div>

      <!-- Phần Nghĩa và Hán Việt -->
      <div class="space-y-3 text-lg md:text-xl text-left text-slate-800 mb-6">
        <p><strong>Âm Hán Việt:</strong> <span id="card-hanviet" class="font-semibold text-slate-700">${card.hanviet}</span></p>
        <p><strong>Nghĩa Việt:</strong> <span id="card-vietnamese" class="font-extrabold text-red-600">${card.vietnamese}</span></p>
      </div>

      <!-- Phần Phân tích Từ ghép -->
      <div class="mt-6 pt-4 border-t border-slate-200">
        <p class="text-base font-bold text-slate-700 mb-3 border-b pb-2">Phân tích từ gốc:</p>
        <div id="char1-related-container" class="mb-4"></div>
        <div id="char2-related-container"></div>
      </div>
    `;

    // Update character analysis after rendering
    this.updateCharacterAnalysis('char1-related-container', card.char1, 1);
    this.updateCharacterAnalysis('char2-related-container', card.char2, 2);
  }

  private updateCharacterAnalysis(
    containerId: string,
    charData: Flashcard['char1'],
    charIndex: number
  ): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!charData) {
      container.innerHTML = `<p class="text-slate-500 italic text-center text-base">Dữ liệu phân tích từ gốc chưa được cung cấp cho thẻ này.</p>`;
      return;
    }

    const wordsHtml = charData.words && charData.words.length > 0
      ? charData.words
          .map(
            word =>
              `<button class="speak-btn bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium whitespace-nowrap text-sm md:text-base hover:bg-indigo-200 transition duration-150" data-speak-text="${word.hanzi}">
                <span class="chinese-font font-bold mr-1">${word.hanzi}</span>
                <span>(${word.pinyin}, ${word.hanviet})</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 inline">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M15.54 8.46a2.16 2.16 0 0 1 0 3.08"/>
                </svg>
              </button>`
          )
          .join('')
      : '<p class="text-slate-500 italic text-sm">Không có dữ liệu từ ghép mở rộng cho từ này.</p>';

    container.innerHTML = `
      <div class="mb-4">
        <p class="text-sm font-bold text-slate-600 mb-2 flex items-center">
          ${charIndex}. Từ gốc: 
          <span class="chinese-font text-lg text-blue-800 mr-2">${charData.hanzi}</span>
          <span>(${charData.pinyin}, ${charData.hanviet})</span>
          <button class="speak-btn ml-2 text-indigo-600 hover:text-indigo-800 p-1 rounded-full hover:bg-indigo-100 transition duration-150" data-speak-text="${charData.hanzi}" aria-label="Phát âm Hán tự ${charData.hanzi}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
        </p>
        <div class="flex flex-wrap gap-2 text-sm">
          ${wordsHtml}
        </div>
      </div>
    `;
  }

  private showError(message: string): void {
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
      flashcard.innerHTML = `
        <div class="text-center p-12">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-red-600 mb-3">Lỗi</h2>
          <p class="text-red-500 text-lg">${message}</p>
          <button 
            onclick="location.reload()" 
            class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Tải lại trang
          </button>
        </div>
      `;
    }
  }

  cleanup(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    speechService.stop();
  }
}

export const flashcardController = new FlashcardController();
