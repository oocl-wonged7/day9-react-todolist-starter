import React, {useContext} from 'react'
import {TodoContext} from '../App'
import { hover } from '@testing-library/user-event/dist/hover'

const TodoItem = (props) =>{
    const {todoItem} = props
    const {dispatch} = useContext(TodoContext) 
    const handleDeleteTodoItem = () =>{
        dispatch({type: "DELETE_TODO", payload: todoItem.id})
    }

    const handleToggleTodoItem = () =>{
        dispatch({type: "TOGGLE_TODO", payload: todoItem.id})
    }

    const TodoItemStyle = {
        border: 'solid 1px gray',
        width: '400px',
        padding: '5px',
        textDecoration:todoItem.done?"line-through":"none",
        margin: '5px',
    }

    const todoItemWrapperStype = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
    }

    return(
        <div onClick={handleToggleTodoItem} style={todoItemWrapperStype}>
            <div style={TodoItemStyle}>{todoItem.text}</div>
        <button onClick={handleDeleteTodoItem}>X</button>
        </div>
    )
}
export default TodoItem

