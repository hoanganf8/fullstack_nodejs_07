import { useEffect, useRef, useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const handleSetValue = () => {
    inputRef.current.value = "Ahihi";
  };
  const handleGetValue = () => {
    const value = inputRef.current.value;
    setValue(value);
  };
  const handleChangePlaceholder = () => {
    inputRef.current.placeholder = "Ok chưa?";
  };
  useEffect(() => {
    console.dir(inputRef.current);
  }, []);
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handleGetValue}>Get Value</button>
      <button onClick={handleChangePlaceholder}>Change Placeholder</button>
      <div>Value: {value}</div>
    </div>
  );
}

//useImperativeHandle
