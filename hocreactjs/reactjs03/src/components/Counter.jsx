import { useContext } from "react";
import { ProviderContext } from "../store/Provider";
export default function Counter() {
  const { state, dispatch } = useContext(ProviderContext);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

//Làm thế nào để trong component này đọc được state từ Provider (Global State)
