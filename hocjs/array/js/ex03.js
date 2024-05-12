var users = ["An", "Dũng", "Tâm", "Hạnh"];
//sort(): Sắp xếp mảng theo thứ tự tăng dần
//Sắp xếp theo ký tự: a, b, c
/*
Lưu ý: hàm sort nhận vào 1 callback
function callbackSort(a, b) {
    //a: Phần tử sau
    //b: Phần tử trước
    //Nếu hàm này trả về giá trị âm ==> Tự động đổi chỗ
}
*/
users.sort();
// console.log(users);

// var numbers = [5, 1, 2, 100, 10];
// console.log(numbers);
// numbers.sort(function (a, b) {
//   //Sắp xếp tăng dần:
//   //Phần tử trước < phần tử sau
//   //Cần xử lý: Nếu phần tử trước > phần tử sau ==> Đổi chỗ
//   console.log(`Trước = ${b}, Sau = ${a}`);
//   if (b > a) {
//     return -1;
//   }
// });
// console.log(numbers);
//Sắp toán sắp xếp nổi bọt

var users = [
  "Tạ Hoàng An",
  "Lưu Anh Quân",
  "Lê Đức Nam",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
];
//Sắp xếp mảng sau theo thứ tự tăng dần (Theo tên)

var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1).join();
};
users.sort(function (a, b) {
  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
});
// console.log(users);

//Vòng lặp
var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
//forEach(callback): Duyệt từng phần tử của mảng
/*
Callback sẽ 3 tham số
- value
- index
- array: Mảng ban đầu
*/
// var result = users.forEach(function (value, index) {
//   console.log(value, index);
// });
// console.log(result);

//map(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về 1 mảng mới có số lượng phần tử bằng với mảng ban đầu
- Giá trị từng phần tử của mảng mới là return của callback
*/
// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//filter(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback return về truthy
*/
console.log(users);
var newArr = users.filter(function (value, index) {
  //   console.log(value, index);
  //   if (index > 1) {
  //     return true;
  //   }
  return value;
});
// console.log(newArr);

/*
Bài tập
*/
var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];
// console.log(customers);

//Xóa khách hàng có email là: customer2@gmail.com
// customers = customers.filter(function (customer) {
//   return !customer.includes("customer2@gmail.com");
// });
// console.log(customers);

//Tăng tuổi của khách hàng có email customer2@gmail.com thêm 2 tuổi
//Gợi ý: Dùng vòng lặp map
customers = customers.map(function (customer) {
  if (customer.includes("customer2@gmail.com")) {
    customer[2] += 2;
  }
  return customer;
  //   return (
  //     customer.includes("customer2@gmail.com") && (customer[2] += 2), customer
  //   );
});
// console.log(customers);

//return a,b,c ==> Trả về c

var data = [];
function addData(value, status) {
  var addItem = function (item) {
    if (!data.includes(item)) {
      data.push(item);
    }
  };
  var removeItem = function (item) {
    data = data.filter(function (_item) {
      return item !== _item;
    });
  };
  if (status) {
    addItem(value);
  } else {
    removeItem(value);
  }
}

addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
console.log(data);
/*
['An']

Giải thích: 
Nếu status = true ==> Thêm value vào mảng data (Kiểm tra trùng)
Nếu status = false ==> Xóa phần tử có value
*/
