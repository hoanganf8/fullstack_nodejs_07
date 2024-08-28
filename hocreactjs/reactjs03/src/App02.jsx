import { useEffect } from "react";
import { useDispatch, useSelector } from "./store/hook";
import { fetchPosts } from "./store/middlewares/fetchPosts";

export default function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const count = useSelector((state) => state.count);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h1>
        Posts:{" "}
        <button onClick={() => dispatch({ type: "counter/increment" })}>
          Click: {count}
        </button>
      </h1>
      {postList.map(({ title, id }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
}
