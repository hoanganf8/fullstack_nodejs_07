//load: (window) ==> Khi các tài nguyên trên trang web tải xong (html, css, js, media,...)
//DOMContentLoaded ==> Khi hình thành cây DOM

// var getSizeImage = function () {
//   var imgEl = document.querySelector("img");
//   var width = imgEl.width;
//   var height = imgEl.height;
//   console.log(width, height);
// };
//event fire
// document.addEventListener("DOMContentLoaded", function () {
//   //   var h1 = document.querySelector("h1");
//   //   console.log(h1);
//   console.log("DOM");
//   getSizeImage();
// });

var hidePreloader = function () {
  var preloader = document.querySelector(".preloader");
  preloader.style.opacity = 0;
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1000);
};

window.addEventListener("load", function () {
  hidePreloader();
});
