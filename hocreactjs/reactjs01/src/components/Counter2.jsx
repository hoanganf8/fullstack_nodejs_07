import { useEffect, useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("Mounted");
  //     return () => {
  //       console.log("Unmount");
  //     };
  //   }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`Count: ${count}`);
    return () => {
      console.log(`Cleanup: ${count}`);
    };
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
      <hr />
    </div>
  );
}

//Mounted ==> Khi component được đưa vào DOM
//Unmount ==> Khi component bị loại bỏ khỏi DOM

/*
Thứ tự hoạt động của Hook useEffect
1. State thay đổi
2. Component Re-render
3. Update UI
4. Cleanup (Nếu có)
5. Callback useEffect

Một số trường hợp phải giải phóng trong cleanup
- timer: setInterval, setTimeout
- storage: localStorage, sessionStorage, cookie, worker,...
- Nếu sử dụng design pattern observer ==> Cần unsubscribe
- event: removeEventListener
- HTTP Request
*/
