import { useState } from "react";

import { v4 as uuid } from "uuid";
import { useDispatch } from "../../store/hook";
import { addTodo } from "../../store/actions/todoActions";

export default function TodoAdd() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
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
    dispatch(addTodo(todo));
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
