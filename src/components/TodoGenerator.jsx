import { useState } from "react"
import { TodoContext } from "../App"
import { useContext } from "react"

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext)
    
    const handleInput = (event) =>{
        setText(event.target.value)
    }
    
    const handleAddTodoItem = () =>{
        if (text.trim() === "") {
            return
        }
        setText("")
        dispatch({type: "ADD_TODO", payload: text})
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleInput}/>
            <button onClick={handleAddTodoItem}>Add</button>
        </div>
    )
}
export default TodoGenerator