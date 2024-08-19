import { useEffect, useRef } from "react";
import Button from "./Button";

export default function Counter() {
  //   const [count, setCount] = useState(0);
  //   const myRef = useRef(0);
  //   const a = {
  //     value: 0,
  //   };
  //   const handleClick = () => {
  //     setCount(count + 1);
  //     a.value++;
  //     myRef.current++;
  //     // console.log(myRef.current);
  //     // console.log(count);
  //   };

  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.placeholder = "Ok chưa?";
    console.log(buttonRef);
    buttonRef.current.style.color = "red";
  }, []);

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <h2>Count: {a.value}</h2>
      <h2>Count: {myRef.current}</h2>
      <button onClick={handleClick}>Click me</button> */}
      <h1
        ref={(el) => {
          console.log(el);
        }}
      >
        Hello Ref
      </h1>
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <Button ref={buttonRef} />
    </div>
  );
}
