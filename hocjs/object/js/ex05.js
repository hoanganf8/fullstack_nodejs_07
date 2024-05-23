// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getInfo: function () {
//     console.log(this);
//     // return {
//     //   age: 32,
//     //   getName: function () {
//     //     return this.name;
//     //   },
//     // };
//   },
// };

// user.getInfo.bind("a")();

function something(name, email) {
  console.log(name, email);
  console.log(this.courseName);
  console.log(this.coursePrice);
}

var obj = {
  courseName: "Fullstack",
  coursePrice: 12000,
};

// something.call(obj, "Hoàng An", "hoangan.web@gmail.com");

var arr = ["Hoàng An", "hoangan.web@gmail.com"];
// something.apply(obj, arr);

// something.call(obj, ...arr); //ES6

function Person() {
  this.name = "Hoàng An";
  this.email = "hoangan.web@gmail.com";
  this.getName = function () {
    return this.name;
  };
  this.getEmail = function () {
    return this.email;
  };
}

function User() {
  Person.call(this);
  this.getInfo = function () {
    console.log(this.getName());
    console.log(this.getEmail());
  };
}

var user = new User();
user.getInfo();
console.log(user.name);

//func1 => func2 => func3

/*
1. Prototype

2. Từ khóa this

3. Function Constructor

4. bind, call, apply

5. Kế thừa Constructor
*/
