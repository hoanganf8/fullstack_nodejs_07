import { createContext, useState } from "react";
import Content from "./components/Content";
export const AppContext = createContext();

export default function App() {
  const [msg, setMsg] = useState("Học React không khó");
  const handleClick = () => {
    setMsg("Học React quá khó");
  };
  return (
    <AppContext.Provider
      value={{
        msg,
        onClick: handleClick,
      }}
    >
      <Content />
    </AppContext.Provider>
  );
}

//A => B => C => D
//Context
/*
- Khởi tạo đối tượng Context==> Dùng hàm createContext
- Bọc Component Provider (Của Context) ==> Để gửi dữ liệu vào context
- Lấy dữ liệu từ Context: Dùng component Consumer hoặc hook useContext
*/
