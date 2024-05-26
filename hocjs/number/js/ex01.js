//Number là kiểu dữ liệu nguyên thủy
//Hàm tạo của number là Number
console.dir(Number);

var a = 10;
if (typeof a === "number") {
  console.log("Đây là số");
}

//Ép kiểu dữ liệu về Number
// var b = "10.5a10";
// b = Number(b);
// b = +b;
// b = parseInt(b); //Ép về số nguyên
// b = parseFloat(b); //Ép về số thực
// console.log(typeof b, b);

// //Kiểm tra 1 số là số nguyên
// var a = "a";
// if (Number.isInteger(a)) {
//   console.log("Là số nguyên");
// } else {
//   console.log("Không phải số nguyên");
// }

// Số NaN (Not a Number)
var a = 10;
var b = "F8";
var c = a * b;
if (Number.isNaN(c)) {
  console.log("Lỗi tính toán");
}

//Số Infinity: Vượt quá khả năng lưu trữ
var a = 10000;
var b = 10000;
var c = a ** b;
var d = 50000 ** 1000;
// console.log(c);
// console.log(d);
// console.log(c === d);

// if (c === Infinity || c === -Infinity) {
//   console.log("Vượt quá khả năng lưu trữ");
// }

//toFixed(): Lấy số chữ số phần thập phân và làm tròn
// var price = 12345.6789;
// console.log(price.toFixed(0));
// console.log(price.toPrecision(4));

var price = 9123456789000000;
console.log(price.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
