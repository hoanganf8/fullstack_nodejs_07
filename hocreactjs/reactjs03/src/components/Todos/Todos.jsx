import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import "./Todos.css";

export default function Todos() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
