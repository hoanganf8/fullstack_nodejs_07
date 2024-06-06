//Dùng inline css ==> Thêm trực tiếp css từ JS

var styleBtn1 = document.querySelector(".style-1");
var styleBtn2 = document.querySelector(".style-2");
var boxEl = document.querySelector(".box");
console.log(boxEl.style);
styleBtn1.addEventListener("click", function () {
  boxEl.style.color = "red";
});
styleBtn2.addEventListener("click", function () {
  //   boxEl.style.fontStyle = "italic";
  //   boxEl.style.fontWeight = "700";
  //   boxEl.style.backgroundColor = "gray";
  var css = {
    fontStyle: "italic",
    fontWeight: "700",
    backgroundColor: "gray",
    color: null,
  };
  Object.assign(boxEl.style, css);
});

//Bài tập: Click vào button Style 3 ==> Thêm ảnh nền (background-image) với hình ảnh trong folder images
var styleBtn3 = document.querySelector(".style-3");
styleBtn3.addEventListener("click", function () {
  boxEl.style.backgroundImage = `url('./images/803-536x354.jpg')`;
});
