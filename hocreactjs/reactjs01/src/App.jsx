import { useLayoutEffect } from "react";
import { useState } from "react";

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useLayoutEffect(() => {
    const status = localStorage.getItem("user_token");
    if (status) {
      setAuthenticated(true);
    }
  }, []);
  return <div>{isAuthenticated ? <h1>Profile</h1> : <h1>Login</h1>}</div>;
}

//useLayoutEffect
/*
1. state thay đổi
2. component re-render
3. cleanup useLayoutEffect
4. callback useLayoutEffect
5. update UI (Khi callback chạy xong)
*/
