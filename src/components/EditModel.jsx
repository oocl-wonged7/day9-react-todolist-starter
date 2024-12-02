import React, { useState, useContext } from "react";
import { Modal } from "antd";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";
import { updateTodoItem } from "../api/todo";


const EditModel = (props) => {
    const {open, todoItem, setIsModalOpen} = props;
    const { dispatch } = useContext(TodoContext);
    const [isUpdating, setIsUpdating] = useState(false);
    const [text, setText] = useState(todoItem.text);

    const handleOk = () => {
        setIsUpdating(true);
        updateTodoItem(todoItem.id, text, todoItem.done).then((updatedTodoItem) => {
          dispatch({ type: ACTION.UPDATE_TODO, payload: updatedTodoItem });
        }).finally(() => {
          setIsUpdating(false);
          setIsModalOpen(false);
        });
      };
    
      const handleCancel = () => {
        setText(todoItem.text);
        setIsModalOpen(false);
      };
    
      const handleInput = (event) => {
        setText(event.target.value);
      }
  return (
    <Modal
      title="Update Todo"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <input disabled={isUpdating} value={text} onChange={handleInput}></input>
    </Modal>
  );
};

export default EditModel;
