# Cài đặt trình biên dịch

- Cài đặt NodeJS
- Cài đặt sass

npm i sass -g

# Chạy lệnh biên dịch

1. Biên dịch 1 file

sass duong-dan-nguon duong-dan-dich

Watch Mode: Khi thay đổi file nguồn, tự động chạy lại lệnh biên dịch

Thêm: --watch

sass duong-dan-nguon duong-dan-dich --watch

2. Biên dịch folder

sass folder-scss:folder-css

Lưu ý: Có thể thêm watch mode

3. Nén file css (Minify)

sass duong-dan-file-scss duong-dan-file-css --style compressed
