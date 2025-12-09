# Flashcard Hán Việt - HTMX + Python (Flask)

Ứng dụng học flashcard tiếng Trung với tính năng phát âm sử dụng Web Speech API, được xây dựng với **Python Flask** backend và **HTMX** frontend.

## Tính năng

- 📚 Hiển thị flashcard với Hán tự, Pinyin, và nghĩa tiếng Việt
- 🔊 Phát âm tự động sử dụng Web Speech API
- 🎯 Nhiều chủ đề học tập (bệnh viện, nhà bếp, cơ thể, v.v.)
- 🔍 Phân tích từ gốc và từ ghép liên quan
- 🎨 Giao diện đẹp với Tailwind CSS
- 📱 Responsive design
- ⚡ **HTMX** - Không cần JavaScript cho navigation
- 🐍 **Python Flask** - Đơn giản, dễ phát triển

## Yêu cầu

- Python 3.8 hoặc cao hơn
- pip (Python package manager)
- Không cần database

## Cài đặt

1. Đảm bảo Python đã được cài đặt:
```bash
python3 --version
```

2. Tạo virtual environment (khuyến nghị):
```bash
python3 -m venv venv
source venv/bin/activate  # Trên Windows: venv\Scripts\activate
```

3. Cài đặt dependencies:
```bash
pip install -r requirements.txt
```

4. Đảm bảo thư mục `data/` chứa tất cả file JSON

5. Chạy server:
```bash
python app.py
# hoặc
flask run --host=0.0.0.0 --port=8080
```

6. Mở trình duyệt tại `http://localhost:8080`

## Cấu trúc dự án

```
pythonSSR/
├── app.py                # Flask application
├── requirements.txt       # Python dependencies
├── .gitignore            # Git ignore file
├── templates/            # Jinja2 HTML templates
│   ├── index.html         # Main page template
│   ├── card.html          # Card fragment template
│   └── controls.html      # Controls fragment template
├── data/                 # JSON data files
│   ├── default.json
│   ├── hospital.json
│   └── ...
└── README.md
```

## Ưu điểm của Python Flask

### So với PHP
- ✅ **Modern syntax** - Code dễ đọc hơn
- ✅ **Better error handling** - Exception handling tốt hơn
- ✅ **Package management** - pip và requirements.txt
- ✅ **Development server** - Built-in debug mode
- ✅ **Template engine** - Jinja2 mạnh mẽ

### So với Golang
- ✅ **Easier to learn** - Syntax đơn giản hơn
- ✅ **Rapid development** - Phát triển nhanh hơn
- ✅ **Rich ecosystem** - Nhiều packages có sẵn
- ✅ **Dynamic typing** - Linh hoạt hơn
- ✅ **Better for prototyping** - Tốt cho prototype

### So với Node.js
- ✅ **Synchronous code** - Dễ đọc hơn (không cần async/await)
- ✅ **Better for data processing** - Xử lý data tốt
- ✅ **Scientific libraries** - Nhiều thư viện khoa học
- ✅ **Easier debugging** - Debug dễ hơn

## HTMX + Flask = Perfect Match

- **HTMX** xử lý frontend interactions (không cần JavaScript)
- **Flask** xử lý backend logic (đơn giản, nhẹ)
- **Jinja2 Templates** render server-side (SEO friendly)
- **No build step** cho frontend (HTMX từ CDN)

## API Endpoints

- `GET /` - Main page
- `GET /card?topic=0&card=0` - Get card HTML fragment
- `GET /controls?topic=0&card=0` - Get controls HTML fragment

## Development

### Debug Mode
Flask có built-in debug mode:
```python
app.run(debug=True)  # Auto-reload khi code thay đổi
```

### Hot Reload
Flask tự động reload khi file thay đổi trong debug mode.

## Production Deployment

### Option 1: Gunicorn (Recommended)
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8080 app:app
```

### Option 2: Waitress (Windows-friendly)
```bash
pip install waitress
waitress-serve --host=0.0.0.0 --port=8080 app:app
```

### Option 3: uWSGI
```bash
pip install uwsgi
uwsgi --http :8080 --wsgi-file app.py --callable app
```

### Option 4: Docker
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8080
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8080", "app:app"]
```

## Tùy chỉnh

### Thay đổi port
Sửa trong `app.py`:
```python
app.run(debug=True, host='0.0.0.0', port=8080)
```

### Thêm topic mới
1. Thêm file JSON vào thư mục `data/`
2. Thêm tên file vào mảng `JSON_FILES` trong `app.py`

### Thay đổi template
Sửa files trong thư mục `templates/` (Jinja2 syntax)

## Jinja2 Template Syntax

```jinja2
{# Comments #}
{{ variable }}
{% if condition %}...{% endif %}
{% for item in list %}...{% endfor %}
{{ variable|filter }}
```

## So sánh với các phiên bản khác

| Tính năng | Python Flask | Golang | PHP | Node.js |
|-----------|--------------|--------|-----|---------|
| Performance | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Development Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Learning Curve | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Ecosystem | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Type Safety | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

## Troubleshooting

### Lỗi "ModuleNotFoundError"
```bash
pip install -r requirements.txt
```

### Lỗi "Template not found"
- Kiểm tra thư mục `templates/` có tồn tại không
- Kiểm tra tên template trong `render_template()`

### Lỗi "File not found"
- Kiểm tra thư mục `data/` có đúng không
- Kiểm tra đường dẫn trong `app.py`

### Port đã được sử dụng
```bash
# Tìm process đang dùng port 8080
lsof -i :8080  # macOS/Linux
netstat -ano | findstr :8080  # Windows

# Hoặc đổi port trong app.py
```

## Lưu ý

- Flask development server không nên dùng cho production
- Sử dụng Gunicorn hoặc Waitress cho production
- Enable debug mode chỉ trong development
- Sử dụng environment variables cho config

## Tài liệu tham khảo

- [Flask Documentation](https://flask.palletsprojects.com/)
- [HTMX Documentation](https://htmx.org/)
- [Jinja2 Templates](https://jinja.palletsprojects.com/)

## Kết luận

Python Flask + HTMX là một combination tuyệt vời:
- **Flask** cho backend đơn giản, dễ phát triển
- **HTMX** cho frontend không cần JavaScript framework
- **Jinja2** cho server-side rendering
- **Python** cho rapid development

Perfect cho các ứng dụng web cần phát triển nhanh và đơn giản!
