import { Button } from "antd";
import React, { useContext, useState } from "react";
import { deleteTodoItem, updateTodoItem } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";
import EditModel from "./EditModel";

const TodoItem = ({ todoItem }) => {
  const { dispatch } = useContext(TodoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteTodoItem = () => {
    deleteTodoItem(todoItem.id).then((deletedTodoItem) => {
      dispatch({ type: ACTION.DELETE_TODO, payload: deletedTodoItem.id });
    });
  };

  const handleToggleTodoItem = () => {
    console.log(todoItem.id, todoItem.text, todoItem.done)
    updateTodoItem(todoItem.id, todoItem.text, !todoItem.done).then(
      (toggledTodoItem) => {
        console.log(toggledTodoItem.done);
        dispatch({ type: ACTION.TOGGLE_TODO, payload: toggledTodoItem});
      }
    );
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
      <Button onClick={showModal}>Edit</Button>
      <EditModel
        open={isModalOpen}
        todoItem={todoItem}
        setIsModalOpen={setIsModalOpen}
      />
      <button onClick={handleDeleteTodoItem}>X</button>
    </div>
  );
};
export default TodoItem;
