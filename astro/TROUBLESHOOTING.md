# Troubleshooting Tailwind CSS

## Nếu Tailwind không hoạt động:

1. **Restart dev server:**
   ```bash
   # Dừng server (Ctrl+C) và chạy lại
   npm run dev
   ```

2. **Xóa cache và rebuild:**
   ```bash
   rm -rf .astro node_modules/.vite
   npm run dev
   ```

3. **Kiểm tra file cấu hình:**
   - `tailwind.config.mjs` - đã được tạo
   - `astro.config.mjs` - đã có `tailwind()` integration

4. **Kiểm tra trong browser:**
   - Mở DevTools (F12)
   - Vào tab Network
   - Tìm file CSS và kiểm tra xem có Tailwind classes không

5. **Kiểm tra console:**
   - Xem có lỗi nào liên quan đến Tailwind không

## Cấu hình hiện tại:

- ✅ `@astrojs/tailwind` đã được cài đặt
- ✅ `tailwindcss` đã được cài đặt  
- ✅ `tailwind.config.mjs` đã được tạo
- ✅ `astro.config.mjs` đã có integration

## Nếu vẫn không hoạt động:

Thử thêm vào `src/layouts/Layout.astro`:
```astro
---
import '../styles/global.css';
---
```

Và tạo file `src/styles/global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
