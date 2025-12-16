# 📚 Flashcard Hán Việt

Ứng dụng web học từ vựng tiếng Trung với flashcard tương tác, hỗ trợ phát âm tự động và phân tích từ gốc chi tiết.

## 🌟 Tính năng nổi bật

- 🎴 **Flashcard đa chủ đề** - 12+ chủ đề từ vựng phong phú
- 🔊 **Phát âm tự động** - Web Speech API với giọng đọc tiếng Trung chuẩn
- 🔍 **Phân tích từ gốc** - Hiển thị chi tiết từng ký tự và các từ ghép liên quan
- 🎯 **Điều hướng linh hoạt** - Nút điều hướng, thanh trượt, dropdown chọn chủ đề
- 📱 **Responsive design** - Tối ưu cho mọi thiết bị
- 🎨 **UI hiện đại** - Giao diện đẹp mắt với Tailwind CSS

## 📦 Cài đặt

### Cách 1: Mở trực tiếp (đơn giản nhất)
```bash
# Clone repository
git clone <repository-url>
cd flashcard

# Mở file index.html trong trình duyệt
```

### Cách 2: Sử dụng local server (khuyến nghị)
```bash
# Sử dụng Python
python3 -m http.server 8000

# Hoặc sử dụng Node.js
npx http-server

# Truy cập: http://localhost:8000
```

**Lưu ý**: Cần chạy local server để tránh lỗi CORS khi load file JSON.

## 🚀 Sử dụng

1. **Chọn chủ đề** - Dropdown ở trên cùng
2. **Xem flashcard** - Mỗi thẻ hiển thị Hán tự, Pinyin, Hán Việt, nghĩa tiếng Việt
3. **Phát âm** - Click biểu tượng 🔊 để nghe
4. **Điều hướng** - Dùng nút hoặc thanh trượt để chuyển thẻ
5. **Phân tích từ** - Xem chi tiết từng ký tự và từ ghép liên quan

## 📚 Chủ đề có sẵn

| File | Chủ đề |
|------|--------|
| `default.json` | Từ vựng mặc định |
| `dinosaurs.json` | Khủng long |
| `hospital.json` | Bệnh viện |
| `kitchen.json` | Nhà bếp |
| `body.json` | Cơ thể |
| `smartphone.json` | Điện thoại thông minh |
| `planets.json` | Hành tinh |
| `study_supplies.json` | Đồ dùng học tập |
| `vegetables.json` | Rau củ |
| `dishes.json` | Món ăn |
| `drinking.json` | Đồ uống |
| `radicals.json` | Bộ thủ |

## 📁 Cấu trúc dự án

```
flashcard/
├── index.html              # File HTML chính
├── README.md               # Tài liệu
├── *.json                  # Dữ liệu flashcard theo chủ đề
```

## 📝 Định dạng dữ liệu JSON

Mỗi file JSON là mảng các flashcard:

```json
[
  {
    "hanzi": "恐龙",
    "pinyin": "kǒng lóng",
    "hanviet": "Khủng long",
    "vietnamese": "Khủng long",
    "char1": {
      "hanzi": "恐",
      "pinyin": "kǒng",
      "hanviet": "Khủng",
      "words": [
        {
          "hanzi": "恐龙",
          "pinyin": "kǒng lóng",
          "hanviet": "Khủng long",
          "vietnamese": "Khủng long"
        }
      ]
    },
    "char2": {
      "hanzi": "龙",
      "pinyin": "lóng",
      "hanviet": "Long",
      "words": [...]
    }
  }
]
```

### Trường dữ liệu

- **Bắt buộc**: `hanzi`, `pinyin`, `hanviet`, `vietnamese`
- **Tùy chọn**: `char1`, `char2`, `char3`, ... (phân tích từng ký tự)

## ➕ Thêm chủ đề mới

1. Tạo file JSON mới (ví dụ: `animals.json`)
2. Định dạng theo cấu trúc trên
3. Thêm vào mảng `jsonFiles` trong `index.html` (dòng 127-140)
4. Ứng dụng tự động phát hiện và thêm vào dropdown

## 🛠️ Công nghệ

- **HTML5** - Cấu trúc
- **Tailwind CSS** - Styling
- **JavaScript ES6+** - Logic
- **Web Speech API** - Phát âm
- **Google Fonts** - Noto Sans SC, Quicksand

## 🌐 Yêu cầu trình duyệt

- ✅ Chrome/Edge (khuyến nghị)
- ✅ Firefox
- ✅ Safari

**Lưu ý**: Web Speech API cần kết nối internet.

## 🎨 Tùy chỉnh

### Màu sắc
Chỉnh sửa class Tailwind trong `index.html`:
- Màu chính: `bg-blue-600`, `text-blue-600`
- Màu phụ: `bg-indigo-100`, `text-indigo-800`

### Font chữ
Cập nhật link Google Fonts trong `<head>`.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón:
- ✨ Thêm chủ đề mới
- 🐛 Báo lỗi
- 💡 Đề xuất tính năng
- 🎨 Cải thiện UI/UX

## 📄 License

Mã nguồn mở, miễn phí sử dụng.

---

**Chúc bạn học tập hiệu quả! 🎓**
