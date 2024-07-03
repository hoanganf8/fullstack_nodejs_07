//Javascript Module
//- CommonJS ==> NodeJS
//- ES6 Module
// console.log("ex06");
// const { a, b } = require("../modules/module1");
// console.log(a);
// console.log(b);

import ahihi, { a as a1, b, getMessage, product } from "../modules/module2.js";
console.log(a1, b);
getMessage();
console.log(ahihi);
console.log(product);

/*
app.js ==> modules ==> 10 file

app.js ==> Import 10 lần

Giải pháp: 
Trong folder modules ==> Tạo file index.js ==> Import 10 file và export để app.js sử dụng
*/
