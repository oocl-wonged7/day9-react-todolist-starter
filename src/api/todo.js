import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c95868020296630aba1.mockapi.io/api/v1",
    timeout: 5000
});

export const getTodoItems = async () =>{
    const response = await instance.get("/todoItems")
    return response.data;
}

export const addTodoItem = async (todoItemText) =>{
    const response = await instance.post("/todoItems", {
        text: todoItemText,
        done: false
    })
    return response.data;
}