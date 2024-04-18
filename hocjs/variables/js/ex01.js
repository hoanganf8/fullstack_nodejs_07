//Comment JS 1 dòng
/*
Comment nhiều dòng
Comment nhiều dòng
Comment nhiều dòng
*/

//Khai báo biến (Đặt tên theo quy tắc camelCase)
var user;
var customer;
var userId, username, email, userEmail;
var course = "Fullstack Offline",
  age = 32;

//Lưu ý: Nếu 1 biến được khai báo nhưng không gán giá trị --> Giá trị mặc định sẽ là undefined
console.log(user);
console.log(course);

//Hiển thị nội dung lên trình duyệt
// document.write("<h2>Hello anh em F8</h2>");

//Dùng DOM (Học sau)
// document.body.innerHTML = "Học JS không khó";

//Lưu ý: Nội dung hiển thị lên trình duyệt có thể là thẻ html
// document.write(course);

// var welcome = "<h2>Khóa học " + course + " tại F8</h2>";
// welcome = welcome + "<h3>Hoàng An</h3>";

//Năm 2015, js có bổ sung cú pháp mới để thay thế dấu nháy đơn và nháy kép
// Backtick: ``
var welcome = `<h2>Khóa học ${course} tại F8</h2>
<h3>Hoàng An</h3>`;

document.write(welcome);

//Lưu ý: Biến trong JS có 2 cách khai báo khác: let, const --> Học sau
