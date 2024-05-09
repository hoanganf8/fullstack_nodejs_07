//Khai báo mảng
var myArray = [1, 5, 3, "Hello F8", true, false, null, undefined];

//Kiểm tra số lượng phần tử
console.log(myArray.length);

//Kiểm tra 1 biến có phải là mảng không?
if (Array.isArray(myArray)) {
  console.log("Đây là mảng");
} else {
  console.log("Đây không phải mảng");
}

//Thêm phần tử mới
//Cú pháp: tenbienmang[indexmoi] = giatri
myArray[myArray.length] = "An";
myArray[myArray.length] = "Nam";

//Sửa phần tử ==> Xác định được index
myArray[3] = "Hello F88";

//Duyệt mảng (Đọc mảng)
// console.log(myArray[0]);
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for (var index in myArray) {
//   console.log(index, myArray[index]);
// }

// for (var value of myArray) {
//   console.log(value);
// }

//Xóa phần tử trong mảng ==> Xác định index
var deleteIndex = 3;
var newArr = [];
for (var index in myArray) {
  if (+index === +deleteIndex) {
    continue;
  }
  newArr[newArr.length] = myArray[index];
}
myArray = newArr;
// console.log(myArray);

//Bài tập: Thêm 1 phần tử bất kỳ vào đầu mảng
var newValue = "JS";
var newArr = [newValue];
for (var value of myArray) {
  newArr[newArr.length] = value;
}
// console.log(newArr);

var users = [
  "Tạ Hoàng An",
  "Nguyễn Tuấn Anh",
  "Nguyễn Văn Dũng",
  "Phạm Văn Hiếu",
];
var keyword = "an";
//Yêu cầu: Xóa tất cả phần tử mảng có chứa keyword (Không phân biệt hoa, thường)

/*
B1: Duyệt qua các phần tử của mảng
B2: So sánh chuỗi keyword với các phần từ của mảng và lấy được các phần tử thỏa mãn điều kiện
*/
// var newUsers = [];
// for (var index in users) {
//   var value = users[index];
//   if (value.toLowerCase().includes(keyword.toLowerCase())) {
//     continue;
//   }
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

var numbers = [5, 2, 1, 9, 6];
//Yêu cầu: Tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử đó với phần tử đầu tiên

var max = numbers[0]; //Giả định giá trị lớn nhất là phần tử đầu tiên
var maxIndex; //Lưu index tại vị trí lớn nhất
for (var index in numbers) {
  if (max < numbers[index]) {
    max = numbers[index];
    maxIndex = +index;
  }
}

var tmp = numbers[0];
numbers[0] = max;
numbers[maxIndex] = tmp;

// console.log(numbers);

var fullname = "tạ hoàng an";
//Yêu cầu: Chuyển thành họ tên hợp lệ: Tạ Hoàng An
var fullnameArr = fullname.split(" ");
var newName = "";
for (var index in fullnameArr) {
  var word = fullnameArr[index];
  var newWord = word.slice(0, 1).toUpperCase() + word.slice(1);
  newName += newWord + " ";
}
newName = newName.trimEnd();
console.log(newName);
