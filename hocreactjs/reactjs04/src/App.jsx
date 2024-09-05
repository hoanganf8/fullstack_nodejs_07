import { useMemo, useState } from "react";
import color from "./utils/color";

function App() {
  const [histories, setHistories] = useState([]);
  const [amount, setAmount] = useState("");
  const handleChangeValue = (e) => {
    setAmount(e.target.value);
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    setHistories([...histories, amount]);
    setAmount("");
    // const data = new FormData(e.target);
    // const amount = data.get("amount");
    // console.log(amount);
  };
  const total = useMemo(() => {
    return histories.reduce((total, history) => {
      //   console.log("reduce");
      return total + +history;
    }, 0);
  }, [histories]);

  return (
    <div>
      <form onSubmit={handleTransfer}>
        <input
          name="amount"
          type="number"
          placeholder="Số tiền cần chuyển..."
          onChange={handleChangeValue}
          value={amount}
          required
        />
        <button>Chuyển</button>
      </form>
      <h2>Lịch sử chuyển tiền</h2>
      {histories.map((history, index) => (
        <h4 key={index}>
          Lần {index + 1}: {history}
        </h4>
      ))}
      <h2>Tổng tiền: {total}</h2>
    </div>
  );
}
const ColorApp = color(App);
export default ColorApp;

//Xây dựng Higher Order Component
/*
Tạo ra 1 hàm bọc 1 component và trả về chính component đó sau khi đã được thay đổi logic

useId
useTransition
useDeferredValue
*/
