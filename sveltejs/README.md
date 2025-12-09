# Flashcard Hán Việt - SvelteKit

Ứng dụng học flashcard tiếng Trung với tính năng phát âm sử dụng Web Speech API, được xây dựng với SvelteKit và TypeScript.

## Tính năng

- 📚 Hiển thị flashcard với Hán tự, Pinyin, và nghĩa tiếng Việt
- 🔊 Phát âm tự động sử dụng Web Speech API
- 🎯 Nhiều chủ đề học tập (bệnh viện, nhà bếp, cơ thể, v.v.)
- 🔍 Phân tích từ gốc và từ ghép liên quan
- 🎨 Giao diện đẹp với Tailwind CSS
- 📱 Responsive design
- ⚡ Svelte reactivity - hiệu năng cao

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Mở trình duyệt tại [http://localhost:5173](http://localhost:5173)

## Build cho production

```bash
npm run build
npm run preview
```

## Cấu trúc dự án

```
sveltejs/
├── src/
│   ├── lib/
│   │   ├── components/       # Svelte components
│   │   │   ├── Controls.svelte      # Điều khiển navigation và topic selector
│   │   │   ├── Flashcard.svelte     # Component hiển thị flashcard
│   │   │   └── RelatedWords.svelte  # Component hiển thị từ liên quan
│   │   ├── stores/            # Svelte stores
│   │   │   ├── flashcardStore.ts    # Store quản lý flashcards và topics
│   │   │   └── speechStore.ts       # Store cho Web Speech API
│   │   └── types.ts          # TypeScript type definitions
│   ├── routes/               # SvelteKit routes
│   │   ├── +layout.svelte    # Layout chính
│   │   └── +page.svelte      # Trang chính
│   ├── app.css               # Global styles với Tailwind
│   └── app.html              # HTML template
├── static/                   # Static files (JSON data)
│   ├── default.json
│   ├── hospital.json
│   └── ...
└── package.json
```

## Công nghệ sử dụng

- **SvelteKit** - Full-stack framework cho Svelte
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Svelte Stores** - State management
- **Web Speech API** - Text-to-speech cho tiếng Trung

## Lưu ý

- Web Speech API yêu cầu trình duyệt hỗ trợ và có thể cần kết nối internet
- Một số trình duyệt có thể cần cấu hình để sử dụng giọng tiếng Trung
- SvelteKit sử dụng Vite làm build tool, rất nhanh và hiệu quả

## So sánh với Next.js

- **Svelte**: Compile-time reactivity, không cần virtual DOM
- **SvelteKit**: Tương tự Next.js nhưng với Svelte
- **Stores**: State management đơn giản hơn Context API
- **Bundle size**: Thường nhỏ hơn nhờ compile-time optimization
