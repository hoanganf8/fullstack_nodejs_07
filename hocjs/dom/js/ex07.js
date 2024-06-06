// var btn = document.querySelector(".btn");
// var input = document.querySelector(".input");

// btn.addEventListener("click", function (e) {
//   //   console.log(this);
//   //   console.log(e.target);
//   console.log(`clientX = ${e.clientX}`);
//   console.log(`clientY = ${e.clientY}`);
//   console.log(`offsetX = ${e.offsetX}`);
//   console.log(`offsetY = ${e.offsetY}`);
// });

// input.addEventListener("focus", function (e) {
//   //   console.log(e);
//   //   var key = e.data;
//   //   var key = e.key;
//   //   var value = e.target.value;
//   //   console.log(`key = ${key}`, `value = ${value}`);
// });

// // document.body.addEventListener("keyup", function (e) {
// //   console.log(e);
// // });

//Xây dựng chức năng kéo thả
// mousedown, mouseup, mousemove

/*
Bước 1: Lắng nghe sự kiện giữ và kéo chuột
*/
var btn = document.querySelector(".btn");
var initialX = 0;
var initialY = 0;
btn.addEventListener("mousedown", function (e) {
  //Add Event kéo (mousemove)
  document.addEventListener("mousemove", handleDrag);
  initialX = e.offsetX;
  initialY = e.offsetY;
  //   initialX = btn.clientWidth / 2;
  //   initialY = btn.clientHeight / 2;
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

var handleDrag = function (e) {
  var clientX = e.clientX - initialX - 10;
  var clientY = e.clientY - initialY - 10;
  btn.style.translate = `${clientX < 0 ? 0 : clientX}px ${
    clientY < 0 ? 0 : clientY
  }px`;
};
