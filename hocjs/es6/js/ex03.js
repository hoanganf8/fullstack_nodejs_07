//Destructuring (Array, Object)
//Phá vỡ cấu trúc array, object để truy cập vào các key và lưu vào các biến riêng biệt
// const user = {
//   username: "hoangan",
//   email: "hoangan.web@gmail.com",
//   password: "123456",
//   age: 32,
// };
// const username = user.username;
// const email = user.email;
// const { username, email: userEmail, age = 30 } = user;
// console.log(username, userEmail);
// console.log(age);
// const { username, email, ...rest } = user;
// console.log(rest);

// const users = [
//   "Hoàng An",
//   "hoangan.web@gmail.com",
//   32,
//   "Hà Nội",
//   { displayName: "Hoàng An F8" },
// ];
// const [username, email, , address] = users;
// console.log(username);
// console.log(email);
// console.log(address);
// const [username, email, ...rest] = users;
// console.log(username, email, rest);
// const [, , , , { displayName }] = users;
// console.log(displayName);

// const output = {
//   displayName: "Hoàng An F8",
//   emails: [
//     {
//       email: "hoangan.web@gmail.com",
//     },
//   ],
// };
// const {
//   displayName,
//   emails: [{ email }],
// } = output;
// console.log(displayName, email);

const users = [
  {
    id: 1,
    name: "Hoàng An 1",
  },
  {
    id: 2,
    name: "Hoàng An 2",
  },
  {
    id: 3,
    name: "Hoàng An 3",
  },
];

users.forEach((user) => {
  const { name } = user;
  console.log(name);
});

/*
const stateArr = useState();
const state = stateArr[0];
*/
