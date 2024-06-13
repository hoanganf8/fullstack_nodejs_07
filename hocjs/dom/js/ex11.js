var root = document.querySelector("#root");
//Tạo element
var h1 = document.createElement("h1");
h1.innerText = `Học lập trình không khó`;
h1.className = `title`;
h1.id = "title";
h1.addEventListener("click", function () {
  this.style.color = `red`;
});

//h1: Node Element
//Việc cần làm: Đưa node element vào cây DOM (Xác định vị trí cần đưa vào)
root.append(h1);

var h2 = document.createElement("h2");
h2.innerText = "Học JS rất dễ";
root.prepend(h2);

var a = document.createElement("a");
a.href = "https://fullstack.edu.vn";
a.innerText = "F8";
h1.append(a);

//Bài tập:
//1. Thêm đoạn html sau vào dưới cùng của #root
//2. Click vào button "Add" ==> Thêm mới li số thứ tự tăng dần
/*
<ul class="menu">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
<button>Add<button>
*/
var ul = document.createElement("ul");
ul.className = "menu";
for (var i = 1; i <= 4; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i}`;
  ul.append(li);
}
root.append(ul);
var button = document.createElement("button");
button.innerText = "Add";
button.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = `Item ${i++}`;
  ul.append(li);
});
root.append(button);

var insertBeforeBtn = document.createElement("button");
insertBeforeBtn.innerText = "Insert Before";
insertBeforeBtn.addEventListener("click", function () {
  var h3 = document.createElement("h3");
  h3.innerText = `Hoang An`;
  root.insertBefore(h3, h1);
  //Chèn thẻ p vào sau h1
  var nextElementH1 = h1.nextElementSibling;
  var p = document.createElement("p");
  p.innerText = "Javascript";
  if (!nextElementH1) {
    root.append(p);
  } else {
    root.insertBefore(p, nextElementH1);
  }
});
root.append(insertBeforeBtn);

var updateNodeBtn = document.createElement("button");
updateNodeBtn.innerText = `Update Node`;
updateNodeBtn.addEventListener("click", function () {
  var h2 = document.createElement("h2");
  h2.innerText = `Node thay thế`;
  root.replaceChild(h2, h1);
  root.removeChild(ul);
});
root.append(updateNodeBtn);
