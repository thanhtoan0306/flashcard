# Flashcard Hán Việt - PHP

Ứng dụng học flashcard tiếng Trung với tính năng phát âm sử dụng Web Speech API, được xây dựng với PHP backend và Alpine.js frontend.

## Tính năng

- 📚 Hiển thị flashcard với Hán tự, Pinyin, và nghĩa tiếng Việt
- 🔊 Phát âm tự động sử dụng Web Speech API
- 🎯 Nhiều chủ đề học tập (bệnh viện, nhà bếp, cơ thể, v.v.)
- 🔍 Phân tích từ gốc và từ ghép liên quan
- 🎨 Giao diện đẹp với Tailwind CSS
- 📱 Responsive design
- 🖥️ Server-side rendering với PHP
- 🔄 URL routing với query parameters

## Yêu cầu

- PHP 7.4+ hoặc PHP 8.x
- Web server (Apache, Nginx, hoặc PHP built-in server)
- Không cần database

## Cài đặt

1. Copy tất cả files vào thư mục web server của bạn

2. Đảm bảo thư mục `data/` chứa tất cả file JSON

3. Chạy web server:

### Option 1: PHP Built-in Server (Development)
```bash
cd php
php -S localhost:8000
```

### Option 2: Apache
- Đặt files trong `htdocs` hoặc cấu hình virtual host
- Đảm bảo mod_rewrite được bật (nếu cần)

### Option 3: Nginx
- Cấu hình nginx để chạy PHP-FPM
- Point document root đến thư mục php

4. Mở trình duyệt tại `http://localhost:8000`

## Cấu trúc dự án

```
php/
├── index.php          # File chính - render HTML với PHP
├── config.php         # Cấu hình
├── functions.php      # Helper functions
├── api.php            # API endpoint (optional)
├── .htaccess          # Apache configuration
├── data/              # JSON data files
│   ├── default.json
│   ├── hospital.json
│   └── ...
└── README.md
```

## API Endpoints

### GET /api.php?action=topics
Trả về danh sách các topics có sẵn.

**Response:**
```json
[
  {
    "name": "Default",
    "file": "default.json"
  },
  ...
]
```

### GET /api.php?action=flashcards&file=default.json
Trả về flashcards từ file JSON cụ thể.

**Response:**
```json
[
  {
    "hanzi": "文化",
    "pinyin": "wén huà",
    "hanviet": "Văn hóa",
    "vietnamese": "Văn hóa",
    ...
  },
  ...
]
```

## URL Parameters

- `?topic=0` - Chọn topic theo index (0-based)
- `?card=5` - Chọn card theo index (0-based)
- `?topic=1&card=10` - Kết hợp cả hai

## Ưu điểm của phiên bản PHP

### So với Alpine.js thuần
- ✅ **Server-side rendering** - Data được load từ server
- ✅ **SEO friendly** - HTML được render sẵn
- ✅ **URL routing** - Có thể bookmark và share links
- ✅ **Security** - Xử lý data trên server
- ✅ **Performance** - Giảm tải cho client

### So với Next.js/SvelteKit
- ✅ **Đơn giản hơn** - Không cần build step
- ✅ **Nhẹ hơn** - Chỉ cần PHP, không cần Node.js
- ✅ **Dễ deploy** - Chỉ cần web server với PHP
- ✅ **Tương thích tốt** - Hoạt động với mọi hosting PHP

### So với Vanilla HTML
- ✅ **Dynamic content** - Load data từ server
- ✅ **URL routing** - Query parameters
- ✅ **API endpoint** - Có thể tách frontend/backend
- ✅ **Security** - Xử lý file operations trên server

## Bảo mật

- File JSON được đặt trong thư mục `data/` (không truy cập trực tiếp)
- Input validation cho query parameters
- HTML escaping để tránh XSS
- CORS headers trong API (nếu cần)

## Tùy chỉnh

### Thêm topic mới
1. Thêm file JSON vào thư mục `data/`
2. Thêm tên file vào mảng `JSON_FILES` trong `config.php`

### Thay đổi cấu trúc
- Sửa `JSON_DIR` trong `config.php` để đổi thư mục data
- Sửa functions trong `functions.php` để thay đổi logic

## Troubleshooting

### Lỗi "File not found"
- Kiểm tra đường dẫn `data/` có đúng không
- Kiểm tra quyền truy cập file (chmod 644)

### Lỗi JSON parsing
- Kiểm tra file JSON có hợp lệ không
- Kiểm tra encoding (phải là UTF-8)

### Lỗi 500 Internal Server Error
- Bật error reporting trong `.htaccess` (development only)
- Kiểm tra PHP error log

## Production Deployment

1. Tắt error reporting:
```php
// Trong config.php hoặc đầu mỗi file
error_reporting(0);
ini_set('display_errors', 0);
```

2. Tối ưu hóa:
- Enable OPcache
- Minify CSS/JS (nếu tách ra)
- Enable gzip compression

3. Security:
- Disable directory listing
- Set proper file permissions
- Use HTTPS

## So sánh với các phiên bản khác

| Tính năng | PHP | Alpine.js | Next.js | SvelteKit |
|-----------|-----|-----------|---------|-----------|
| SSR | ✅ | ❌ | ✅ | ✅ |
| Build step | ❌ | ❌ | ✅ | ✅ |
| URL routing | ✅ | ❌ | ✅ | ✅ |
| API endpoint | ✅ | ❌ | ✅ | ✅ |
| SEO friendly | ✅ | ❌ | ✅ | ✅ |
| Server requirement | PHP | None | Node.js | Node.js |
| Deploy complexity | Low | Very Low | Medium | Medium |

## Lưu ý

- Web Speech API vẫn chạy trên client (browser)
- PHP chỉ xử lý việc load và serve data
- Có thể kết hợp với database nếu cần lưu trữ user data
- Có thể thêm authentication nếu cần bảo vệ content
