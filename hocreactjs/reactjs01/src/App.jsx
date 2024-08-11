import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("F8");
  const [count, setCount] = useState(0);
  const handleChangeValue = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    document.title = title;
    console.log("Side Effect");
  }, [title]);
  console.log("Component Re-render");
  return (
    <div>
      <input type="text" onChange={handleChangeValue} />
      {console.log("UI Update")}
      <button onClick={() => setCount(count + 1)}>Click me ({count})</button>
    </div>
  );
}

/*
Hook useEffect(callback, dependencies?)
- null hoặc undefined ==> Component re-render callback trong useEffect sẽ được gọi
- [] ==> callback trong useEffect chỉ gọi khi component được render lần đầu tiên
- [bien1, bien2,...] ==> callback trong useEffect chỉ gọi khi 1 trong các biến thay đổi
*/
