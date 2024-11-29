import React, {useContext} from 'react'
import {TodoContext} from '../App'
import { ACTION } from '../context/todoReducer'
import { deleteTodoItem } from '../api/todo'

const TodoItem = ({todoItem}) =>{
    const {dispatch} = useContext(TodoContext) 
    const handleDeleteTodoItem = () =>{
        deleteTodoItem(todoItem.id).then((deletedTodoItem)=>{
            dispatch({type: ACTION.DELETE_TODO, payload: deletedTodoItem.id})
        })
    }

    const handleToggleTodoItem = () =>{
        dispatch({type: ACTION.TOGGLE_TODO, payload: todoItem.id})
    }

    const TodoItemStyle = {
        border: 'solid 1px gray',
        width: '400px',
        padding: '5px',
        textDecoration:todoItem.done?"line-through":"none",
        margin: '5px',
        cursor: 'pointer',
    }

    const todoItemWrapperStype = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
    }

    return(
        <div style={todoItemWrapperStype}>
            <div onClick={handleToggleTodoItem} style={TodoItemStyle}>{todoItem.text}</div>
        <button onClick={handleDeleteTodoItem}>X</button>
        </div>
    )
}
export default TodoItem

