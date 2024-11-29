import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator";
import { useContext, useEffect } from "react";
import { getTodoItems } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";

const TodoList = () => {
  const {dispatch} = useContext(TodoContext)
  useEffect(()=>{
    getTodoItems().then((todoItems)=>{
      dispatch({type:ACTION.INIT_TODO, payload: todoItems})
    })
  },[])
  
  return (
      <div>This is the TodoList Component.
      <TodoGroup/>
      <TodoGenerator/>
      </div>
  );
}

export default TodoList