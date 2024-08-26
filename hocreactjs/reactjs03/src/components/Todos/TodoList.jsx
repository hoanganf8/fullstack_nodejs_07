import { useContext } from "react";
import { ProviderContext } from "../../store/Provider";

export default function TodoList() {
  const { state, dispatch } = useContext(ProviderContext);
  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc?")) {
      dispatch({
        type: "todos/remove",
        payload: id,
      });
    }
  };
  const handleCompleted = (id, status) => {
    dispatch({
      type: "todos/completed",
      payload: { id, status },
    });
  };
  return (
    <div>
      <ul>
        {state.todoList.map(({ id, name, isCompleted }) => (
          <li key={id}>
            <input
              type="checkbox"
              onChange={(e) => handleCompleted(id, e.target.checked)}
            />
            <span className={`${isCompleted ? "completed" : ""}`}>{name}</span>
            <button onClick={() => handleRemove(id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
