/*
Câu lệnh rẽ nhánh: Thực thi đoạn chương trình theo điều kiện nhất định
Điều kiện: Dùng biểu thức logic (Boolean)

Trong lập trình có 2 câu lệnh rẽ nhánh: 

1. if else

1.1. Câu lệnh if thiếu
if (dieukien) {
    Code
}

1.2. Câu lệnh if đủ
if (dieukien) {
    Code đúng
} else {
    Code sai
}

1.3. Câu lệnh if nhiều nhánh
if (dieukien1) {
    Code nhánh 1
} else if (dieukien2) {
    Code nhánh 2
} else if (dieukien3) {
    Code nhánh 3
} else {
    Code nhánh 4
}

1.4. Câu lệnh if lồng nhau
if (dieukien1) {
    if (dieukien2) {
        Code đúng dieukien2
    } else {
        Code sai dieukien2
    }
} else {
    Code sai dieukien1
}

2. switch case
*/

// var number = 15;
// if (number < 0) {
//   console.log("Số siêu nhỏ");
// } else if (number >= 0 && number < 5) {
//   console.log("Số nhỏ");
// } else if (number >= 5 && number < 10) {
//   console.log("Số trung bình");
// } else if (number >= 10 && number < 15) {
//   console.log("Số lớn");
// } else {
//   console.log("Số siêu lớn");
// }

//Bài tập: Tính lương thực nhận của 1 nhân viên sau khi đã trừ thuế
/*
Quy ước
- Lương <= 5tr --> Thuế 0%
- Lương >5tr và < 15tr --> Thuế 3%
- >=15tr --> Thuế 5%
*/
var salary = 7000000;
var income, tax;
if (salary <= 5000000) {
  tax = 0;
} else if (salary >= 15000000) {
  tax = 5;
} else {
  tax = 3;
}
income = salary - (salary * tax) / 100;
console.log(income);

var saleRate = 5;
var salePrice = 1000000; //Giảm 5%
//Tìm giá gốc

/*
salePrice = regularPrice - regularPrice * saleRate / 100

regularPrice = salePrice + salePrice * saleRate / 100
*/

// var regularPrice = salePrice + (salePrice * saleRate) / 100;
// console.log(regularPrice);

var seconds = 350;
//Tìm xem có bao nhiêu phút, bao nhiêu giây
//Gợi ý: Math.floor() --> Làm tròn xuống và chỉ lấy phần nguyên
var mins = Math.floor(seconds / 60);
seconds -= mins * 60;
console.log(mins, seconds);
