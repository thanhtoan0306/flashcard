# Flashcard Hán Việt - Astro Version

Ứng dụng flashcard học tiếng Trung với tính năng phát âm sử dụng Web Speech API, được xây dựng với Astro.

## Tính năng

- 📚 Học từ vựng tiếng Trung với nhiều chủ đề
- 🔊 Phát âm tự động sử dụng Web Speech API
- 📖 Hiển thị Hán tự, Pinyin, Hán Việt và nghĩa tiếng Việt
- 🔍 Phân tích từ gốc và từ ghép liên quan
- 🎯 Điều hướng dễ dàng với nút và thanh trượt
- 📱 Responsive design, tối ưu cho mobile

## VS Code Extensions (Recommended)

For the best development experience with syntax highlighting and IntelliSense, install these VS Code extensions:

1. **Astro** (`astro-build.astro-vscode`) - Official Astro extension with syntax highlighting, IntelliSense, and more
2. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Autocomplete and syntax highlighting for Tailwind classes
3. **Prettier** (`esbenp.prettier-vscode`) - Code formatter
4. **ESLint** (`dbaeumer.vscode-eslint`) - Linting support

VS Code will automatically suggest these extensions when you open the project, or you can install them manually from the Extensions marketplace.

## Cài đặt

```bash
npm install
```

## Chạy ứng dụng

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:4321`

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Cấu trúc dự án

```
astro/
├── public/          # JSON data files
├── src/
│   ├── layouts/     # Layout components
│   └── pages/       # Page components
├── astro.config.mjs # Astro configuration
└── package.json
```

## Chủ đề có sẵn

- Default
- Hospital
- Kitchen
- Body
- Smartphone
- Planets
- Dinosaurs
- Study Supplies
- Vegetables
- Dishes
- Drinking
- Radicals
