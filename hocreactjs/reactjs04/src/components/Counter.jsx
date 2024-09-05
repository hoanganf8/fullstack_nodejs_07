import { useCallback, useState } from "react";
import Reset from "./Reset";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  // console.log("1. Counter render");
  const handleReset = useCallback(() => {
    setCount((count) => {
      setCurrentCount(count);
      return 0;
    });
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
      <hr />
      <Reset onClick={handleReset} />
      <div>{currentCount}</div>
    </div>
  );
}
