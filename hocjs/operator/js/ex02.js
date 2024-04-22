//Tự động chuyển về kiểu logic để so sánh (truthy, falsy)
//Falsy: 0, NaN, null, "", undefined, false
//Truthy: Các trường hợp còn lại
// var a = "";
// var b = !a ? "F8" : "Hoàng An"; //Toán tử 3 ngôi

//Cú pháp truthy: variable
//Cú pháp falsy: !variable
// console.log(b);

/*
if (a) {
    //Code
}
*/

//Toán tử && --> Tìm biểu thức sai, còn đúng còn chạy đến khi nào hết thì thôi
// var a = 1;
// var b = 2;
// var c = 3;
// var result = a && b && c;
// console.log(result);

//Toán tử || --> Tìm biểu thức đúng, còn sai còn chạy đến khi nào hết thì thôi
// var a = false;
// var b = 0;
// var result = a || b || "F8";
// console.log(result);

var a;
var b = a || "F8";
console.log(b);
