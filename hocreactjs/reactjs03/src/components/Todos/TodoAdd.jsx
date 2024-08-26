import { useContext, useState } from "react";
import { ProviderContext } from "../../store/Provider";
import { v4 as uuid } from "uuid";

export default function TodoAdd() {
  const [name, setName] = useState("");
  const { dispatch } = useContext(ProviderContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Vui lòng nhập tên");
    }
    //dispatch
    const todo = {
      id: uuid(),
      name,
      isCompleted: false,
    };
    dispatch({
      type: "todos/add",
      payload: todo,
    });
    setName("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
