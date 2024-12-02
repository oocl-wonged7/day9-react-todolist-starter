import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
  const { state } = useContext(TodoContext);
  const { currentPage, pageSize } = props;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentTodos = state.slice(startIndex, endIndex);
  return (
    <>
      {state === null || state.length === 0 ? (
        <div>Add the things you need to do today...</div>
      ) : (
        <div>
          {currentTodos.map((todoItem, _) => {
            return <TodoItem todoItem={todoItem} key={todoItem.id} />;
          })}
        </div>
      )}
    </>
  );
};
export default TodoGroup;
