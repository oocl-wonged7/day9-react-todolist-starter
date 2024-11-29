import React, { useContext } from "react";
import { deleteTodoItem, toggleTodoItem } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";

const TodoItem = ({ todoItem }) => {
  const { dispatch } = useContext(TodoContext);
  const handleDeleteTodoItem = () => {
    deleteTodoItem(todoItem.id).then((deletedTodoItem) => {
      dispatch({ type: ACTION.DELETE_TODO, payload: deletedTodoItem.id });
    });
  };

  const handleToggleTodoItem = () => {
    toggleTodoItem(todoItem.id, todoItem.done).then((toggledTodoItem) => {
      console.log(toggledTodoItem);
      dispatch({ type: ACTION.TOGGLE_TODO, payload: toggledTodoItem.id });
    });
  };

  const TodoItemStyle = {
    border: "solid 1px gray",
    width: "400px",
    padding: "5px",
    textDecoration: todoItem.done ? "line-through" : "none",
    margin: "5px",
    cursor: "pointer",
  };

  const todoItemWrapperStype = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  };

  return (
    <div style={todoItemWrapperStype}>
      <div onClick={handleToggleTodoItem} style={TodoItemStyle}>
        {todoItem.text}
      </div>
      <button onClick={handleDeleteTodoItem}>X</button>
    </div>
  );
};
export default TodoItem;
