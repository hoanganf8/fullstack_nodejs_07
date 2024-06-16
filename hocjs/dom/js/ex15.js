//window.scrollX ==> Lấy tọa độ so với top theo trục X
//window.scrollY ==> Lấy tọa độ so với top theo trục Y
//window.scroll(options) ==> Di chuyển thanh cuộn tới vị trí mong muốn
// var lastPosition = 0;
// window.addEventListener("scroll", function () {
//   var position = window.scrollY; //Lấy tọa độ so với top theo trục Y
//   if (position > lastPosition) {
//     document.body.style.background = "red";
//   } else {
//     document.body.style.background = null;
//   }
//   lastPosition = position;
// });

//Bài tập 1: Kéo chuột xuống đổi body thành màu đỏ, kéo lên màu trắng

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   window.scroll({
//     top: 500,
//     behavior: "smooth",
//   });
// });

//Bài tập 2: Xây dựng chức năng back to top

var topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", function () {
  var position = window.scrollY;
  if (position > 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
topBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
