// import { Fragment } from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

// import Avatar from "./components/Avatar";
import User from "./components/User";

export default function App() {
  // const handleClick = (e) => {
  //   console.log(e);
  // };
  // const handleClick2 = (title) => {
  //   console.log(title);
  // };
  // const jsx = (
  //   <>
  //     <h2>Hello</h2>
  //     <h2>Hello</h2>
  //   </>
  // );
  // const handleClick = () => {
  //   console.log(`Click me`);
  // };
  const users = [
    {
      name: "User 1",
      email: "user1@gmail.com",
    },
    {
      name: "User 2",
      email: "user2@gmail.com",
    },
    {
      name: "User 3",
      email: "user3@gmail.com",
    },
  ];
  return (
    <>
      {/* <Header />
      <main>
        <h1>Trang chủ</h1>
        {jsx}
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClick2(e.target.innerText)}>
          Click me 2
        </button>
      </main>
      <Footer /> */}
      {users.map((user, index) => (
        <User key={index} {...user} />
      ))}
    </>
  );
}
