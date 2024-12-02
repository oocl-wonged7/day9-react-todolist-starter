import instance from "./interceptor";

export const getTodoItems = async () => {
  const response = await instance.get("/todoItems");
  return response.data;
};

export const addTodoItem = async (todoItemText) => {
  const response = await instance.post("/todoItems", {
    text: todoItemText,
    done: false,
  });
  return response.data;
};

export const deleteTodoItem = async (todoItemId) => {
  const response = await instance.delete(`/todoItems/${todoItemId}`);
  console.log(response.data);
  return response.data;
};

export const toggleTodoItem = async (todoItemId, todoItemDone) => {
  const response = await instance.put(`/todoItems/${todoItemId}`, {
    done: !todoItemDone,
  });
  return response.data;
};

export const updateTodoItem = async (todoItemId, todoItemText) => {
  const response = await instance.put(`/todoItems/${todoItemId}`, {
    text: todoItemText,
  });
  return response.data;
};