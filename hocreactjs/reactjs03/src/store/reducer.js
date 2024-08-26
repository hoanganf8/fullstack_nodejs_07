export const initialState = {
  count: 0,
  todoList: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + 1 };
    case "counter/decrement":
      return { ...state, count: state.count - 1 };
    case "todos/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "todos/remove":
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id !== action.payload),
      };
    case "todos/completed":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.isCompleted = action.payload.status;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
