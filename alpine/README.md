# Flashcard Hán Việt - Alpine.js

Ứng dụng học flashcard tiếng Trung với tính năng phát âm sử dụng Web Speech API, được xây dựng với Alpine.js - một framework JavaScript nhẹ và không cần build step.

## Tính năng

- 📚 Hiển thị flashcard với Hán tự, Pinyin, và nghĩa tiếng Việt
- 🔊 Phát âm tự động sử dụng Web Speech API
- 🎯 Nhiều chủ đề học tập (bệnh viện, nhà bếp, cơ thể, v.v.)
- 🔍 Phân tích từ gốc và từ ghép liên quan
- 🎨 Giao diện đẹp với Tailwind CSS
- 📱 Responsive design
- ⚡ Không cần build - chỉ cần mở file HTML

## Cách sử dụng

1. Đảm bảo tất cả file JSON nằm trong cùng thư mục với `index.html`
2. Mở file `index.html` trong trình duyệt
3. Hoặc sử dụng local server (khuyến nghị):

```bash
# Sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js http-server
npx http-server

# Hoặc sử dụng PHP
php -S localhost:8000
```

4. Mở trình duyệt tại `http://localhost:8000`

## Cấu trúc dự án

```
alpine/
├── index.html          # File HTML chính với Alpine.js
├── default.json        # Dữ liệu flashcard
├── hospital.json
├── kitchen.json
└── ... (các file JSON khác)
```

## Công nghệ sử dụng

- **Alpine.js** - Framework JavaScript nhẹ, không cần build
- **Tailwind CSS** - Styling (CDN)
- **Web Speech API** - Text-to-speech cho tiếng Trung

## Ưu điểm của Alpine.js

- ✅ **Không cần build step** - Chỉ cần mở file HTML
- ✅ **Nhẹ** - Chỉ ~15KB gzipped
- ✅ **Đơn giản** - Syntax giống Vue.js nhưng nhẹ hơn nhiều
- ✅ **Reactive** - Tự động cập nhật UI khi data thay đổi
- ✅ **Không cần npm/node** - Chỉ cần CDN

## So sánh với các phiên bản khác

### vs Next.js
- **Alpine.js**: Không cần build, nhẹ, đơn giản
- **Next.js**: Cần build, SSR, phức tạp hơn nhưng mạnh mẽ hơn

### vs SvelteKit
- **Alpine.js**: Không cần build, chỉ HTML + JS
- **SvelteKit**: Cần build, framework đầy đủ tính năng

### vs Vanilla JS (HTML gốc)
- **Alpine.js**: Reactive, dễ quản lý state
- **Vanilla JS**: Nhiều code hơn, khó maintain

## Lưu ý

- Web Speech API yêu cầu trình duyệt hỗ trợ và có thể cần kết nối internet
- Một số trình duyệt có thể cần cấu hình để sử dụng giọng tiếng Trung
- Nên chạy qua local server thay vì mở trực tiếp file HTML (do CORS)

## Cách hoạt động

Alpine.js sử dụng các directives như:
- `x-data` - Định nghĩa component data
- `x-show` - Hiển thị/ẩn element
- `x-text` - Bind text content
- `x-model` - Two-way binding
- `@click` - Event handlers
- `x-for` - Loop qua array
- `x-if` - Conditional rendering

Tất cả logic được viết trong một function `flashcardApp()` và được khởi tạo với `x-data` và `x-init`.
