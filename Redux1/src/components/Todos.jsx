import {  useSelector } from "react-redux";
import TodoItems from "./TodoItems";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="text-center text-5xl">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <TodoItems todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
