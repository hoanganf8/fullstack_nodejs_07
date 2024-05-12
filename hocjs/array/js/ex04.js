var numbers = [1, 2, 5, 7, 9];
//some(callback)
/*
- Duyệt qua từng phần tử cuả mảng ban đầu
- Trả về giá trị true / false
- Trả về true khi có ít nhất 1 lần return truthy ở callback
*/
//Ví dụ: Tìm trong mảng numbers xem có số chẵn hay không?
var result = numbers.some(function (value, index) {
  //   console.log(value, index);
  return value % 2 === 0;
});
// console.log(result);

//every(callback) ==> Ngược lại so với some (Tất cả đều đúng)
var numbers = [1, 3, 2, 5, 7, 9];
var result = numbers.every(function (value) {
  return value % 2 !== 0;
});
// console.log(result);

//find(callback)
/*
- Điều kiện giống filter
- Trả về phần tử đầu tiên tìm được
*/

// var numbers = [1, 3, 2, 5, 7, 9];
// var result1 = numbers.filter(function (number) {
//   return number > 2;
// });
// console.log(result1);

// var result2 = numbers.find(function (number) {
//   return number > 2;
// });
// console.log(result2);

//findLast(callback) ==> Tìm phần tử cuối cùng

//findIndex(callback) ==> Tìm index đầu tiên

//findLastIndex(callback) ==> Tìm index cuối cùng

var users = [
  ["A", "A"],
  ["B", "B"],
  ["C", "C"],
  ["D", "D"],
];

console.log(users);

//Yêu cầu 1: Tìm index của mảng ["B", "B"] trong mảng users
// var index = users.indexOf(["B", "B"]);
// var arr = ["B", "B"];
// var index = users.findIndex(function (user) {
//   return user.join() === arr.join();
// });
// console.log(index);

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

//[1,2]
var result = [];
arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    result.push(item);
  }
});
console.log(result);

//Tìm hiểu reduce
