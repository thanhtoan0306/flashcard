# Flashcard Hán Việt - Next.js

Ứng dụng học flashcard tiếng Trung với tính năng phát âm sử dụng Web Speech API, được xây dựng với Next.js và React.

## Tính năng

- 📚 Hiển thị flashcard với Hán tự, Pinyin, và nghĩa tiếng Việt
- 🔊 Phát âm tự động sử dụng Web Speech API
- 🎯 Nhiều chủ đề học tập (bệnh viện, nhà bếp, cơ thể, v.v.)
- 🔍 Phân tích từ gốc và từ ghép liên quan
- 🎨 Giao diện đẹp với Tailwind CSS
- 📱 Responsive design

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

## Cấu trúc dự án

```
nextjs/
├── app/
│   ├── components/       # React components
│   │   ├── Controls.tsx      # Điều khiển navigation và topic selector
│   │   ├── Flashcard.tsx     # Component hiển thị flashcard
│   │   └── RelatedWords.tsx  # Component hiển thị từ liên quan
│   ├── hooks/            # Custom React hooks
│   │   ├── useFlashcards.ts  # Hook quản lý flashcards và topics
│   │   └── useSpeech.ts      # Hook cho Web Speech API
│   ├── globals.css       # Global styles với Tailwind
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Trang chính
│   └── types.ts          # TypeScript type definitions
├── public/               # Static files (JSON data)
│   ├── default.json
│   ├── hospital.json
│   └── ...
└── package.json
```

## Công nghệ sử dụng

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Web Speech API** - Text-to-speech cho tiếng Trung

## Lưu ý

- Web Speech API yêu cầu trình duyệt hỗ trợ và có thể cần kết nối internet
- Một số trình duyệt có thể cần cấu hình để sử dụng giọng tiếng Trung
