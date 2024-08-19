import { useContext } from "react";
import { AppContext } from "../App";
export default function Content() {
  const context = useContext(AppContext);

  return (
    <div>
      <h1>{context.msg}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi est
        repudiandae inventore distinctio aliquam, consectetur ab eaque doloribus
        delectus provident officia, eum magnam et aspernatur cupiditate vero
        quae possimus.
      </p>
      <button onClick={context.onClick}>Click me</button>
    </div>
  );
}
