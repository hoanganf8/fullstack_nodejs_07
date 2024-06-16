//load: (window) ==> Khi các tài nguyên trên trang web tải xong (html, css, js, media,...)
//DOMContentLoaded ==> Khi hình thành cây DOM

var getSizeImage = function () {
  var imgEl = document.querySelector("img");
  var width = imgEl.width;
  var height = imgEl.height;
  console.log(width, height);
};
//event fire
document.addEventListener("DOMContentLoaded", function () {
  //   var h1 = document.querySelector("h1");
  //   console.log(h1);
  console.log("DOM");
  getSizeImage();
});

window.addEventListener("load", function () {
  //   var h1 = document.querySelector("h1");
  //   console.log(h1);
  console.log("Load");
  getSizeImage();
});
