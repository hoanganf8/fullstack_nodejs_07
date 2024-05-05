/*
Closure: Định nghĩa hàm trong 1 phạm vi khác và có thể truy cập các biến ở phạm vi chứa nó

Trong JS: Tất cả các hàm đều là closure
*/
// var y = 20;
// function display() {
//   console.log("Display");
//   var x = 10;
//   function someThing() {
//     console.log("someThing");
//     console.log(x);
//     console.log(y);
//   }
//   someThing();
// }
// display();

// var a = 10;
// function getMessage() {
//   console.log("getMessage");
// }

// window.getMessage();
// window.console.log(window.a);

// window.f8 = {
//   showMessage() {
//     console.log("Học lập trình không khó");
//   },
// };

// window.f8.showMessage();

// function display() {
//   return function () {
//     return "Học lập trình không khó";
//   };
// }

// var func = display();
// console.log(func());

// console.log(display()());

/*
if (hama(hamb())) {
    
}
*/

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// var add = sum(10);
// var result = add(20);
// console.log(result);

//IIFE = Immediately Invoked Function Expressions
// function getMessage() {
//   console.log("học lập trình không khó");
// }
// getMessage();
// (function () {
//   console.log("học lập trình không khó");
// })();

//Giải thuật đệ quy
// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

//Tính tổng: 1 + 2 + 3 + ... + N (Dùng đệ quy)

function getTotal(n) {
  //Không dùng vòng lặp
  if (n === 1) {
    return 1;
  }
  return n + getTotal(n - 1);
}
var total = getTotal(10);
console.log(total);

function fibonaci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}
console.log(fibonaci(5));
