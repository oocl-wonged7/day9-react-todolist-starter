import instance from "./interceptor";

export const getTodoItems = async () => {
  const response = await instance.get("/todoItems");
  return response.data;
};

export const addTodoItem = async (todoItemText) => {
  const response = await instance.post("/todoItems", {
    text: todoItemText,
  });
  return response.data;
};

export const deleteTodoItem = async (todoItemId) => {
  const response = await instance.delete(`/todoItems/${todoItemId}`);
  return response.data;
};

export const updateTodoItem = async (todoItemId, todoItemText, todoItemDone) => {
  const response = await instance.put(`/todoItems/${todoItemId}`, {
    text: todoItemText,
    done: todoItemDone,
  });
  return response.data;
};