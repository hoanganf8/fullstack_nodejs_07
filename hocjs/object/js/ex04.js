var person1 = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
  getInfo: function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  },
};

// console.log(person1);
// console.log(person1.getInfo());

//Cấu trúc của Object
//- Có những thuộc tính nào?
//- Có những phương thức nào?
//Giải pháp: Tạo 1 function constructor --> Định nghĩa cấu trúc của object
// Nguyên tắc của Function Constructor
/*
- Tên hàm phải là danh từ
- Đặt tên theo quy tắc PascalCase (Ký tự đầu của mỗi từ sẽ viết hóa)
Ví dụ: UserService, UserCourse, ResetPasswordService,...
*/

function Person(name, email, age) {
  //Thuộc tính
  this.name = name;
  this.email = email;
  this.age = age;
  this.a = "Học JS";
  //Phương thức
  this.getInfo = function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  };
}
// Person.prototype.message = "Learn JS";
// //Tạo object từ constructor
// var person1 = new Person("Hoàng An 1", "hoangan1@gmail.com", 32);
// console.log(person1);

//Kiểm tra 1 object được tạo từ hàm tạo nào?
// console.log(person1.constructor.name);

// var users = ["User 1", "User 2", "User 3"];
// if (users && users.constructor.name === "Array") {
//   console.log("Đây là mảng");
// }

//Thuộc tính tĩnh, phương thức tĩnh
/*
- Không phụ thuộc vào object
- Truy cập trực tiếp từ constructor (Hàm tạo)
Ví dụ: Array.isArray(), Object.keys(), Object.values(),...
*/
Person.message = "Hello anh em F8"; //static property

//static method
Person.getMessage = function () {
  return "Học JS không khó";
};

Person.something = function () {
  console.log("something");
  console.log(new this().a);
};

Person.something();

// var person1 = new Person("Hoàng An 1", "hoangan1@gmail.com", 32);
// console.log(person1.constructor.message);

// console.log(Person.message);
