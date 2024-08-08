/* eslint-disable react/prop-types */
export default function User({ name, email }) {
  //   props.name = "Hoang An 2";
  //   console.log(props);

  return (
    <div>
      {/* {children} */}
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* <button onClick={onClick}>Click me</button> */}
    </div>
  );
}
