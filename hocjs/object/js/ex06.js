console.dir(Object);

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
// console.log(user);

var user2 = Object.create(null);
user2.name = "Hoàng An";
user2.email = "hoangan.web@gmail.com";
// console.log(user2);

//Object.create còn có tác dụng kế thừa prototype

//Tham chiếu
var a = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

// var b = a;
//Shallow copy
// var b = Object.assign({}, a);
// var b = { ...a };
//Deep copy
// var b = JSON.parse(JSON.stringify(a));
// b.name = "Hoàng An F8";
// console.log(a);
// console.log(b);

var users = [
  {
    name: "User 1",
    email: "user1@gmail.com",
  },
  {
    name: "User 2",
    email: "user2@gmail.com",
  },
  {
    name: "User 3",
    email: "user3@gmail.com",
  },
  {
    name: "User 4",
    email: "user4@gmail.com",
  },
];

var email = "user2@gmail.com";
//Yêu cầu: Tìm user có email trên và sửa tên
var user = users.find(function (user) {
  return user.email === email;
});
user.name = "User 2 Update";

document.write(`<table width="100%" border="1">
<thead>
  <tr>
    <th width="5%">STT</th>
    <th>Tên</th>
    <th>Email</th>
  </tr>
</thead>
<tbody>
  ${users
    .map(function (user, index) {
      return `<tr>
    <td>${index + 1}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
  </tr>`;
    })
    .join("")}
</tbody>
</table>`);

/*
1. String
2. Number
3. BigInt
4. Boolean
5. Symbol
6. undefined
7. null
8. Object
*/

var a = { value: 1 };
var b = { value: 1 };
var c = a;

console.log(a == b);
console.log(a == c);
