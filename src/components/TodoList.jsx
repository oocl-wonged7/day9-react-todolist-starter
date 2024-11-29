import { useContext, useEffect, useState } from "react";
import { getTodoItems } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Pagination } from "antd";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { dispatch } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);
  const [pageSize,setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const HandlePageChange = (current, pageSize) => {
    setCurrentPage(current);
    setPageSize(pageSize);
  };

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
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
  ) : (
    <div>
      This is the TodoList Component.
      <TodoGroup currentPage={currentPage} pageSize={pageSize}/>
      <TodoGenerator />
      <Pagination
        showSizeChanger
        onChange={HandlePageChange}
        defaultCurrent={1}
        total={state.length}
      />
    </div>
  );
};

export default TodoList;
