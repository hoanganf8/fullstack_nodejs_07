# Thảo luận nhóm về đường dẫn --> Áp dụng cho toàn kiến thức trong khóa học (Front-End, Back-End, Server,...)

## Đường dẫn tương đối là gì? Đường dẫn tuyệt đối là gì?

### Đường dẫn tương đối
- Phụ thuộc vào vị trí chạy trang web (Vị trí folder)
- Suy ra --> Trả về kết quả khác nhau

http://127.0.0.1:58561/html/ex01.html
http://127.0.0.1:58561/html/home/ex01.html

### Đường dẫn tuyệt đối
- Không phụ thuộc vào vị trí chạy trang web (Vị trí folder)
- Suy ra --> Trả về kết quả giống nhau
http://127.0.0.1:58561/html/ex02.html
http://127.0.0.1:58561/html/ex02.html

## Phân biệt các loại đường dẫn sau

1. /duong-dan --> Tuyệt đối
2. ../../duong-dan --> Tương đối
3. duong-dan --> Tương đối
4. ./duong-dan --> Tương đối
5. //domain.com/duong-dan --> Tuyệt đối
6. https://domain.com/duong-dan --> Tuyệt đối