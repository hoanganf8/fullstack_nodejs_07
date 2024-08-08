import ReactDOM from "react-dom/client";
import React from "react";
const root = document.querySelector("#root");

//Tạo React Element
// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//     id: "title",
//   },
//   "Học ReactJS không khó"
// );

// const h2 = React.createElement(
//   "h2",
//   {
//     className: "sub-title",
//   },
//   "Học React rất khó",
//   React.createElement(
//     "a",
//     {
//       href: "https://fullstack.edu.vn",
//       target: "_blank",
//       style: {
//         color: "red",
//         backgroundColor: "yellow",
//       },
//     },
//     "Fullstack - F8"
//   )
// );
// const liList = [];
// for (let i = 1; i <= 100; i++) {
//   liList.push(React.createElement("li", null, `Học ReactJS - ${i}`));
// }
// const ul = React.createElement("ul", null, ...liList);
// const element = React.createElement(React.Fragment, null, h1, ul, h2);

//JSX (Javascript XML) ==> Javascript Compiler (SWC, Babel) ==> React Element ==> HTML
const title = "<i>Hoàng An F8</i>";
const subTitle = <h3>Ok chưa?</h3>;
const users = ["User 1", "User 2", "User 3"];
const usersJsx = users.map((user, index) => <li key={index}>{user}</li>);
const getProduct = () => {
  return <h2>Sản phẩm 1</h2>;
};
const Product = () => {
  return <h2>Sản phẩm 2</h2>;
};
class User extends React.Component {
  render() {
    return <h2>Ok chưa?</h2>;
  }
}
const element = (
  <div>
    <h1 className="title" id="title">
      Học ReactJS
    </h1>
    <h2>Học React không khó</h2>
    {getProduct()}
    <Product />
    <Product></Product>
    <User />
    <h2>{title}</h2>
    {subTitle}
    <ul>{usersJsx}</ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
      error recusandae enim, soluta voluptatum corporis incidunt, quos labore
      quae quibusdam modi numquam aliquid et tempore perferendis iusto,
      doloremque impedit. Dolorem.
    </p>
  </div>
);
console.log(element);

//Render
ReactDOM.createRoot(root).render(element);

/*
Bài tập: 
Tạo cặp thẻ html sau và đặt trước thẻ h2
<ul>
    <li>Học ReactJS - 01</li>
    <li>Học ReactJS - 02</li>
    <li>Học ReactJS - 03</li>
    <li>Học ReactJS - 04</li>
    ....
    <li>Học ReactJS - 100</li>
</ul>
Lưu ý: Có 100 thẻ li
*/
