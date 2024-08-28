import { completedTodo, removeTodo } from "../../store/actions/todoActions";
import { useDispatch, useSelector } from "../../store/hook";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc?")) {
      dispatch(removeTodo(id));
    }
  };
  const handleCompleted = (id, status) => {
    dispatch(completedTodo(id, status));
  };
  return (
    <div>
      <ul>
        {todoList.map(({ id, name, isCompleted }) => (
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
