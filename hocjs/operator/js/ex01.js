//Biểu thức = Toán tử và toán hạng

//s = a + b * c

//s, a, b, c --> Toán hạng
// =, +, * --> Toán tử

//1. Toán tử số học
/*
+, -, *, /
% --> Chia lấy dư
** --> Lũy thừa
++ --> Tăng lên 1 đơn vị
-- --> Giảm đi 1 đơn vị
*/

var a = 1;
var b;
// a++;
// a--;
// ++a;
// var b = a++;
var b = ++a;
// console.log(a);
// console.log(b);

var count = 1;
var total = count++ + ++count + count++;
// console.log(total);

/*
1. count = 2, total = 1
2. count = 3, total = 1 + 3 = 4
3. count = 4, total = 4 + 3 = 7
*/

//2. Toán tử gán (=)
var a = 10;
// a = a + 10;
// a += 10;
// a -= 10;
// a *= 10;
// a /= 10;
// a %= 10;
a **= 10;
// console.log(a);

//3. Toán tử so sánh
/*
>, <, >=, <=, ==, ===, !=, !==

==> Luôn trả kiểu dữ liệu logic (boolean): true, false

Lưu ý: 
== So sánh bằng nhưng chỉ so sánh giá trị
=== So sánh bằng cả giá trị và kiểu dữ liệu
!= So sánh khác nhưng chỉ so sánh giá trị
!== So sánh khác cả kiểu dữ liệu và giá trị
*/

//4. Toán tử lý luận (kết hợp)
/*
&& --> Kết hợp and
|| --> Kết hợp or
! --> Kết hợp not

Thứ tự ưu tiên: Ngoặc tròn --> and --> or --> not
*/

var a = 10;
// var check = !(a >= 5 && a <= 15);
var check = a < 0 || (a >= 5 && a <= 15);
console.log(check);

var b = 5;
// if (10 === b) {

// }

//5. Toán tử 3 ngôi
//Cú pháp: dieukien ? giatridung : giatrisai
// var a = 10;
// var b = a >= 10 ? "F8" : "Hoàng An";
// console.log(b);

// var a = 10;
// var total = 5 + 10 + (a >= 10 ? 10 : 5) + 2;
// console.log(total);

//6. Toán tử nullish (??)
//Cú pháp: bien ?? giatri
//Cách hoạt động: Nếu bien !== undefined và bien !== null lấy bien, ngược lại lấy giatri

var x = 10;
// var result = x ?? "F8";
// var result = x !== null && x !== undefined ? x : "F8";
var result = x === null || x === undefined ? "F8" : x;
console.log(result);

//Viết lại toán tử nullish bằng toán tử 3 ngôi
