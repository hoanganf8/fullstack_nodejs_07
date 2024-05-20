//Object.keys() --> Trả về 1 mảng chứa các key trong object

var obj = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
};
// var keys = Object.keys(obj);
// console.log(keys);

// Object.keys(obj).forEach(function (key) {
//   console.log(obj[key]);
// });

var user = {};
//Kiểm tra object user có phần tử hay không?
if (Object.keys(user).length) {
  console.log("Có phần tử");
} else {
  console.log("Không có");
}

//Object.values() ==> Trả về 1 mảng chứa các value của object
// console.log(Object.values(obj));

//Object.entries() ==> Trả về 1 mảng 2 chiều chứa cả key và value
console.log(Object.entries(obj));

//Object.fromEntries() ==> Chuyển từ array entries (Mảng 2 chiều) thành object
// var arr = [
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ];
// var obj = Object.fromEntries(arr);
// console.log(obj);

//Object.assign(target, source) ==> Copy object source và nối vào object target, đồng cũng trả về object mới chính object sau khi nối

var obj1 = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var obj2 = {
  role: "Teacher",
  address: "Hà Nội",
};
//Nối obj2 vào obj1
// var obj3 = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj3);

//Nối obj1 và obj2 lưu vào obj3 (Không làm thay đổi obj1, obj2)

var obj3 = Object.assign({}, obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

var query = {
  category: 1,
  keyword: "Khóa học Fullstack",
  status: true,
};
//Chuyển thành string: category=1&keyword=Khóa+học+Fullstack&status=true
var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);
