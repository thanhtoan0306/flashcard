# Refactoring Summary

## Cấu trúc mới

Ứng dụng đã được tách thành các component và module logic riêng biệt, giảm thiểu DOM manipulation.

### Components (`src/components/`)

1. **SpeakButton.astro** - Component tái sử dụng cho nút phát âm
2. **NavigationControls.astro** - Thanh điều hướng (prev/next, slider, counter)
3. **TopicSelector.astro** - Dropdown chọn chủ đề
4. **Flashcard.astro** - Component hiển thị flashcard chính
5. **CharacterAnalysis.astro** - Component phân tích từ gốc (chưa được sử dụng trực tiếp, được render qua controller)

### Logic Modules (`src/lib/`)

1. **dataService.ts** - Xử lý tải dữ liệu từ JSON files
   - `scanAndCreateTopics()` - Quét và tạo danh sách topics
   - `loadFlashcards()` - Tải flashcards từ file JSON
   - Type definitions cho Flashcard, Topic, CharacterData, Word

2. **speechService.ts** - Quản lý Web Speech API
   - `speak()` - Phát âm text
   - `stop()` - Dừng phát âm
   - Tự động tìm và sử dụng giọng tiếng Trung

3. **flashcardState.ts** - State management
   - `FlashcardState` class - Quản lý state tập trung
   - Subscribe pattern để cập nhật UI khi state thay đổi
   - Methods: next(), prev(), setCurrentIndex(), etc.

4. **flashcardController.ts** - Controller chính
   - `FlashcardController` class - Điều phối toàn bộ ứng dụng
   - `initialize()` - Khởi tạo app
   - `setupEventListeners()` - Setup event listeners
   - `updateUI()` - Cập nhật UI khi state thay đổi (DOM manipulation tối thiểu)
   - `handleSpeak()` - Xử lý phát âm

### Pages (`src/pages/`)

- **index.astro** - Trang chính, sử dụng các components và import controller

## Lợi ích

1. **Tách biệt concerns**: Logic tách khỏi UI
2. **Tái sử dụng**: Components có thể dùng lại
3. **Dễ bảo trì**: Code được tổ chức rõ ràng
4. **Giảm DOM manipulation**: Chỉ cập nhật các phần cần thiết
5. **Type safety**: Sử dụng TypeScript cho type checking
6. **State management**: Quản lý state tập trung với subscribe pattern

## DOM Manipulation

DOM manipulation đã được giảm thiểu:
- Chỉ cập nhật text content của các elements cần thiết
- Sử dụng data attributes (`data-speak-text`) cho event delegation
- Character analysis được render qua `innerHTML` (chỉ phần này cần DOM manipulation do tính động)

## Cách sử dụng

1. Components được render server-side với Astro
2. Controller được khởi tạo client-side
3. State changes trigger UI updates qua subscribe pattern
4. Event listeners sử dụng event delegation cho speak buttons
