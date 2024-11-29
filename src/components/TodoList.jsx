import { useContext, useEffect, useState } from "react";
import { getTodoItems } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  const { dispatch } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodoItems()
      .then((todoItems) => {
        dispatch({ type: ACTION.INIT_TODO, payload: todoItems });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      This is the TodoList Component.
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
};

export default TodoList;
