//reduce(callback, initialValue)
/*
callback có 4 tham số
- prevValue
- currentValue
- index
- array --> Mảng ban đầu

initialValue: Giá trị khởi tạo

Cách hoạt động

1. Không có initialValue
- Vòng lặp chạy từ phần tử thứ 2 cho đến hết
- prevValue của lần lặp đầu tiên chính là phần tử đầu tiên của mảng
- currentValue là các phần tử của mảng qua mỗi lần lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- Giá trị của vòng lặp reduce sẽ là lần return cuối cùng

2. Có initialValue
- Vòng lặp chạy từ đầu
- prevValue của lần lặp đầu tiên chính là initialValue
- currentValue là các phần tử của mảng qua mỗi lần lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- Giá trị của vòng lặp reduce sẽ là lần return cuối cùng
*/

var numbers = [5, 10, 15, 20, 25, 30];
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(`prev = ${prev}`, `current = ${current}`, `index = ${index}`);
//   //   return "F8";
//   return current;
// }, 0);

// console.log(result);

// var total = numbers.reduce(function (prev, current) {
//   console.log(`prev = ${prev}`, `current = ${current}`);
//   return prev + current;
// }, 0);
// console.log(total);

var numbers = [2, 9, 5, 1, -5];
//Tìm phần tử lớn nhất dùng reduce
var max = numbers.reduce(function (prev, current) {
  if (prev < current) {
    return current; //gán prev = current
  }
  return prev;
});
// console.log(max);

var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
//Xóa các phần tử trùng trong mảng users
//Yêu cầu: Dùng reduce

var newUsers = users.reduce(function (prev, current) {
  if (!prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
// console.log(newUsers);

var arr1 = [5, 2, 1, 6, 9];
var arr2 = [2, 1, 6];

//Tìm phần tử khác nhau giữa 2 mảng (Có trong mảng 1 nhưng không có trong mảng 2)
//Output [5, 9]
//Yêu cầu: Dùng reduce
var diffArr = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current) && !prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
// console.log(diffArr);

var numbers = [1, [2, 3], 4, [[5, 6]], 7, [[[8, 9]]]];

//Yêu cầu: Làm phẳng mảng numbers
// [1,2,3,4,5,6,7,8,9]
/*
Điều kiện: 
- Dùng reduce
- Không dùng hàm flat
*/
var flatArray = function (arr) {
  return arr.reduce(function (prev, current) {
    //Kiểm tra xem phần tử có phải là mảng không
    //Nếu là mảng ==> Gọi hàm đệ quy
    if (Array.isArray(current)) {
      return prev.concat(flatArray(current));
    }
    //Ngược lại, thêm current vào prev
    return prev.concat(current);
  }, []);
};
// console.log(numbers);
var newArr = flatArray(numbers);
// console.log(newArr);

// var flatArray2 = (arr) =>
//   arr.reduce(
//     (prev, current) =>
//       prev.concat(Array.isArray(current) ? flatArray(current) : current),
//     []
//   );
// console.log(flatArray2(numbers));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var size = 2;
//Chunk array với size tương ứng
// Output: [[1,2], [3,4], [5,6], [7,8], [9]]

//Ý tưởng:
// [[]] --> [[1]] --> [[1,2]] --> [[1,2], [3,4]] --> [[1,2], [3,4], [5]]

var chunkArr = numbers.reduce(
  function (prev, current) {
    //Kiểm tra số lượng phần tử của mảng con cuối cùng
    if (prev[prev.length - 1].length < size) {
      //Thêm phần tử mới vào mảng con
      prev[prev.length - 1].push(current);
    } else {
      //Ngược lại, thêm 1 mảng mới (Thêm đoạn mới)
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(chunkArr);

var chunkArr2 = numbers.reduce(function (prev, _, index) {
  if (index % size === 0) {
    var subArr = numbers.slice(index, index + size);
    prev.push(subArr);
  }
  return prev;
}, []);
console.log(chunkArr2);

//Array.from()
//Array.keys()
//Tham chiếu Array
//Copy Array

var arr1 = ["Hoàng An", "hoangan.web@gmail.com"];
var arr2 = arr1;
arr2[0] = "Hoàng An F8";
console.log(arr1);
