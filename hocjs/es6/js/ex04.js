//Spread
// const arr1 = ["Item 1", "Item 2", "Item 3"];
// const arr2 = ["Item 4", ...arr1, "Item 5", "Item 6"];
// console.log(arr2);

// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// //Yêu cầu: Thêm Todo 4 vào mảng todos và lưu vào biến mới
// const newTodos = [...todos, "Todo 4"];
// // console.log(newTodos);
// // console.log(todos);

// const form = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// //Cập nhật lại email và lưu object vào biến mới
// const newForm = { ...form, email: "contact@fullstack.edu.vn" };
// // console.log(newForm);

// const something = (args1, args2, args3) => {
//   console.log(args1);
//   console.log(args2);
//   console.log(args3);
// };
// const data = ["Data 1", "Data 2", "Data 3"];
// something(...data);
// something.apply(null, data);

//Enhanced Object Literal
// const name = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// let address;
// const user = {
//   name,
//   email,
//   address,
//   getName: function () {
//     return this.name;
//   },
//   getEmail() {
//     return this.email;
//   },
// };
// console.log(user);

// const something = (name, email, address) => {
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   console.log(`Address: ${address}`);
// };

//Trường hợp 1: Chỉ muốn truyền name
// something("Hoàng An");

//Trường hợp 2: Chỉ muốn truyền email
// something(undefined, "hoangan.web@gmail.com");

//Xây dựng hàm hỗ trợ named arguments (Áp dụng destructuring và Enhanced)
// const something = ({ name, email, address }) => {
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   console.log(`Address: ${address}`);
// };

// // something({ email: "Hoàng An" });
// const address = "Hà Nội";
// something({ address });
