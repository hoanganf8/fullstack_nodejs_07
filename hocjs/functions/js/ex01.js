/*
Hàm là gì?
- Cú pháp trong lập trình giúp tách các đoạn chương trình con trong chương trình lớp để tái sử dụng
- Thể hiện là 1 chức năng (Động từ)
- Đặt tên hàm theo quy tắc camelCase và sử dụng động từ
Ví dụ: sum, getTotal, setMessage, getMessage, showUsers, makeMenu, buildMenuTree,....

Cú pháp: 
- Định nghĩa hàm
function tenham() {
    Nội dung hàm
}

function tenham(thamso1, thamso2, thamso3,...) {
    Nội dung hàm
}
==> Tham số: parameters
- Gọi hàm
tenham()
tenham(doiso1, doiso2, doiso3,...)
==> Đối số: arguments

Hàm có từ khóa return --> Hàm có giá trị trả về
Khi từ khóa return được gọi --> Các đoạn code bên dưới return không hoạt động

Biến toàn cục: Sử dụng ở phạm vi ngoài hàm
Biến cục bộ: Sử dụng ở phạm vi trong hàm

Trên thực tế: Trong 1 hàm có thể gọi 1 hàm khác

Hàm ẩn danh (Hàm không tên, anonymous function)
function() {
    Nội dung hàm
}
Lưu ý: Hàm ẩn danh sẽ không gọi và định nghĩa được (Trừ phi gán vào 1 biến hoặc đưa vào tham số của hàm khác)
*/

// function showMessage(msg, type = "success") {
//   console.log("Học JS không khó");
//   console.log(msg);
//   console.log(type);
//   return 1;
//   console.log("Hello anh em");
// }

// var a = showMessage("F8", "error"); //Lời gọi hàm chủ động
// console.log(a);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "Không tính được";
// }

// console.log(division(10, 2));
// console.log(division(10, 0));

// var a = 0;

// function getNumber() {
//   return a;
// }

// function setNumber(value) {
//   a = value;
// }

// setNumber(10);
// console.log(getNumber());

// function sum(a, b) {
//   var total = a + b;
//   return total;
// }

// console.log(sum(10, 20));
// console.log(total);

// function sum(a, b) {
//   return a + b;
// }
// function showResult() {
//   var total = sum(10, 20);
//   console.log(total);
// }
// showResult();

//Declaration function
function showNumber() {
  console.log("number");
}
showNumber();

//Expression Function
// var showMessage = function () {
//   console.log("Học lập trình không khó");
// };

// showMessage();

// var getTotal = function sum(a, b) {
//   return a + b;
// };
// console.log(getTotal(10, 20));
// console.log(sum(10, 20));

// function sum(a, b) {
//   return a + b;
// }
// var getTotal = sum;
// console.log(getTotal(10, 20));
// console.log(sum(10, 20));

//Callback Function
function display(callback) {
  console.log("Display");
  /*
  a = function() {
    console.log("Hello anh em F8")
  }
  a()
  */
  //   console.log(a);
  typeof callback === "function" && callback();
  //callback = handleLog
  //   console.log(typeof callback);
}

// display(function () {
//   console.log("Hello anh em F8");
// });

// display("a");

function handleLog() {
  console.log("Hello anh em F8");
}
// display(handleLog);

//setTimeout() --> Delay quá trình thực thi câu lệnh
/*
setTimeout(callback, time, args)
*/

// setTimeout(
//   function (a, b, c) {
//     console.log("Hello anh em F8", a, b, c);
//   },
//   1000,
//   "a",
//   "b",
//   "c"
// );

// function max(a, b) {
//   console.log(arguments); //Array Like Object
//   console.log(a, b);
// }

// max(5, 10, 15, 20, 25, 30);

//Rest Parameter

function max2(a, b, ...rest) {
  console.log(a, b);
  console.log(rest);
}
max2(5, 10, 15, 20, 25, 30);
