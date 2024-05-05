var email = "hoangan.web@gmail.com";
//Viết chương trình xử lý trả về username của email
/*
Bước 1: Tìm index của ký tự @ ==> Dùng hàm indexOf()
Bước 2: Cắt từ đầu đến index vừa tìm được
*/
var index = email.indexOf("@");
var username = email.slice(0, index);
console.log(username);

//Bài 2: Viết hàm kiểm tra 1 chuỗi xem có phải chữ HOA hay không?
function isUpper(str) {
  return str === str.toUpperCase();
}
console.log(isUpper("TẠ HOÀNG An"));
