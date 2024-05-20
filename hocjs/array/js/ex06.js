//Array, Object, Function: Khi gán 1 biến bằng 1 array, object ==> Biến mới copy địa chỉ của biến cũ ==> 2 biến cùng 1 địa chỉ

//Copy array
// var oldArr = ["Hoàng An", "hoangan.web@gmail.com"];
// var newArr = oldArr;
//Shallow Copy
// - Sử dụng các phương thức trả về mảng mới
// var newArr = oldArr.map(function (item) {
//   return item;
// });
// var newArr = oldArr.slice(0);
// - Spread Operator --> Học ở ES6
// var newArr = [...oldArr];
//Deep Copy
//- Sử dụng JSON: Chuyển mảng thành json, chuyển ngược lại (json về mảng)
// var json = JSON.stringify(oldArr);
// var newArr = JSON.parse(json);
// newArr[0] = "Hoàng An f8";
// console.log(newArr);
// console.log(oldArr);

//Hiểu nhầm
// var users = ["Item 1", "Item 2"];
// function setData(data) {
//   //   data[0] = "Item 3";
//   data.pop();
//   console.log(data);
// }

// setData(users);
// console.log(users);

// var message = "F8";
// function setMessage(data) {
//   data = data.replace("8", "9");
//   console.log(data);
// }
// setMessage(message);
// console.log(message);

//đích = nguồn
//đích thay đổi --> nguồn thay đổi --> Kiểu dữ liệu tham chiếu

// var a = function () {
//   console.log("getA");
// };
// var b = a;
// var c = b;
// c();

var arr = [
  ["User 1", "user1@gmail.com"],
  ["User 2", "user2@gmail.com"],
  ["User 3", "user3@gmail.com"],
];

//Thêm 1 phần tử vào mảng con nếu tìm thấy email = user2@gmail.com
// var arr = arr.map(function (item) {
//   if (item.includes("user2@gmail.com")) {
//     item.push("Hello anh em");
//   }
//   return item;
// });
// console.log(arr);

// console.log(arr);
// var result = [];
// arr.forEach(function (item) {
//   if (item.includes("user2@gmail.com")) {
//     result = item;
//   }
// });
// result.push("Hello anh em");
// console.log(arr);

// arr
//   .find(function (item) {
//     return item.includes("user2@gmail.com");
//   })
//   .push("Hello anh em");

// console.log(arr);

// var arr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// arr.length = 3; //getter, setter --> Học sau
// console.log(arr);

//Tạo 1 mảng mới có số lượng phần tử xác định
// var arr = Array(20);
//Ví dụ: Tạo 1 mảng mới chứa các số từ 1 đến 20
// [1,2,3,4,5,6,7...,20]
var newArr = Array.from(Array(20).keys()).map(function (item) {
  return item + 1;
});
console.log(newArr);

//Giải thích:
//1. Array(number) --> Trả về 1 mảng mới có số lượng phần tử number

//2. keys() --> Trả về các index của mảng
// console.log(Array(20).keys());

//3. Array.from --> Ép kiểu về mảng
// console.log(Array.from(Array(20).keys()));

function something() {
  console.log(arguments);
  //Array Like Object --> Object giống mảng (Có length, có key là số)
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
}
something(5, 10, 15, 20, 25, 30);
