import { useState } from "react"
import { TodoContext } from "../App"
import { useContext } from "react"
import { ACTION } from "../context/todoReducer"
import { addTodoItem } from "../api/todo"

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext)

    const TodoGeneratorStyle = {
        margin: '5px'
    }
    
    const handleInput = (event) =>{
        setText(event.target.value)
    }
    
    const handleAddTodoItem = () =>{
        if (text.trim() === "") {
            return
        }
        setText("")
        addTodoItem().then((todoItem)=>{
            dispatch({type: ACTION.ADD_TODO, payload: todoItem.text})
        })
    }

    return (
        <div>
            <input type="text" maxLength={100} value={text} onChange={handleInput} style={TodoGeneratorStyle}/>
            <button onClick={handleAddTodoItem}>Add</button>
        </div>
    )
}
export default TodoGenerator