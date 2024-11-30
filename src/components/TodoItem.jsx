import React, { useContext, useState } from "react";
import { deleteTodoItem, toggleTodoItem } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";
import { Button, Modal } from 'antd';
import Item from "antd/es/list/Item";
import { updateTodoItem } from "../api/todo";

const TodoItem = ({ todoItem }) => {
  const { dispatch } = useContext(TodoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState(todoItem.text);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    updateTodoItem(todoItem.id, text).then((updatedTodoItem) => {
      dispatch({ type: ACTION.UPDATE_TODO, payload: updatedTodoItem });
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setText(todoItem.text);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  }

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
      <Button onClick={showModal}>Edit</Button>
      <Modal title="Update Todo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <input value={text} onChange={handleInput}></input>
      </Modal>
      <button onClick={handleDeleteTodoItem}>X</button>
    </div>
  );
};
export default TodoItem;
