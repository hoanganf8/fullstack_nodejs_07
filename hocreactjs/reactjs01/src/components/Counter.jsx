import { useState } from "react";
import Text from "./Text";
export default function Counter() {
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  console.log("Counter Render");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <Text />
    </div>
  );
}
