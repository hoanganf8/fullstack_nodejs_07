# Package

## Vấn đề

- Nặng, khó di chuyển
- Gỡ bỏ và cập nhật ==> Gặp khó khăn

## Giải pháp

- Công cụ quản lý thư viện (package, dependencies)
- Thông qua store (Chợ)
- Với js: npm, yarn,...

## Khởi tạo dự án với npm

npm init -y

## Các chế độ cài đặt thư viện

Simple Dependencies ==> Thư viện chạy dự án (Chạy ở production)

npm i tenthuvien hoặc npm install tenthuvien

Develop Dependencies ==> Thư viện chạy ở môi trường phát triển (Dev)

npm i tenthuvien --save-dev hoặc npm install tenthuvien --save-dev

## Cài đặt các dependencies

npm install hoặc npm i

Chỉ cài đặt dependencies production

npm install --product hoặc npm i --product

## Xóa thư viện đã cài đặt

npm uninstall tenthuvien

## Phiên bản

- Cài đặt thư viện theo phiên bản

npm i tenthuvien@tenphienban

- Cập nhật phiên bản của thư viện

npm update tenthuvien

- Cập nhật tất cả thư viện

npm update

## Nơi cài đặt package

- Local
- Global: -g
