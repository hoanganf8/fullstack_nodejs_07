import { useState } from "react";
import UsdVnd from "./components/ConvertMoney/UsdVnd";
import VndUsd from "./components/ConvertMoney/VndUsd";

export default function App() {
  const [usd, setUsd] = useState("");
  const [vnd, setVnd] = useState("");
  const handleChangeUsd = (e) => {
    const usdValue = e.target.value;
    //Chuyển thành vnd
    setVnd(usdValue * 25000);
    setUsd(usdValue);
  };
  const handleChangeVnd = (e) => {
    const vndValue = e.target.value;
    setVnd(vndValue);
    setUsd(vndValue / 25000);
  };
  return (
    <div>
      <UsdVnd usd={usd} onChange={handleChangeUsd} />
      <VndUsd vnd={vnd} onChange={handleChangeVnd} />
    </div>
  );
}
