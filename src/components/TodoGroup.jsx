import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
  const { state } = useContext(TodoContext);
  return (
    <>
      {state === null || state.length === 0 ? (
        <div>Add the things you need to do today...</div>
      ) : (
        <div>
          {state.map((todoItem, index) => {
            return <TodoItem todoItem={todoItem} key={todoItem.id + index} />;
          })}
        </div>
      )}
    </>
  );
};
export default TodoGroup;
