import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("idle");
  const getTodos = async () => {
    setStatus("pending");
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    setTodos(data);
    setStatus("idle");
  };
  const handleClick = () => {
    getTodos();
  };
  //   getTodos();
  return (
    <div>
      <button disabled={status === "pending"} onClick={handleClick}>
        {status === "pending" ? "Loading..." : "Load Data"}
      </button>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
}
