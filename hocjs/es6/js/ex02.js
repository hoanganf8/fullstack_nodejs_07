//Arrow function
// const getMessage = (msg) => {
//   console.log("Học lập trình không khó", msg);
// };
// getMessage("F8");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const name = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// const getUser = () => ({ name: name, email: email });
// console.log(getUser());

const users = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
];
// const getUser = (userId) => users.find((user) => user.id === userId);
// console.log(getUser(1));

// document.body.innerHTML = `${users
//   .map((user) => `<h3>${user.name}</h3>`)
//   .join("")}`;

/*
- Không nên dùng để làm method của object (Bởi vì không bind được this)
- Không được dùng để tạo Constructor
- Không có object prototype
- Không bind được this, arguments
*/
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log(this);
// });

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getInfo: function () {
//     return {
//       age: 32,
//       getAge: () => {
//         console.log(this);
//         return this.age;
//       },
//     };
//   },
// };
// console.log(user.getInfo().getAge());
