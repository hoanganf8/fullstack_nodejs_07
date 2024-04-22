/*
Vòng lặp: 
- Cú pháp trong lập trình
- Cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định

2 loại vòng lặp
- Vòng lặp với số lần xác định trước
==> for
- Vòng lặp với số lần không xác định trước
==> while, do while
*/

//Vòng lặp for
/*
for (initial; condition; step) {
    Code
}
*/
// for (var i = 1; i <= 10; i++) {
//   console.log(`Lan lap thu: ${i}`);
// }

// for (var i = 10; i >= 1; i--) {
//   console.log(`Lan lap thu: ${i}`);
// }
// var count = 0;
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//     count++;
//   }
// }
// console.log(count);

//S = 1 + 2 + 3 + ... + N
// var n = 10;
// var s = 0;
// for (var i = 1; i <= n; i++) {
//   s += i;
//   console.log(`i = ${i} ==> s = ${s}`);
// }
// console.log(s);

//S = 1 + 1*2 + 1*2*3 + ... + 1*2*4*..*n

var n = 5;
// --> 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
//i    1   2     3       4         5
var total = 0;
var tmp = 1;
for (var i = 1; i <= n; i++) {
  tmp *= i;
  total += tmp;
  //i = 1 --> 1!
  //i = 2 --> tmp = 1 * 2 = 2!
  //i = 3 --> tmp = 1 * 2 * 3 = 3!
}
console.log(total);
