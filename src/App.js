import { createContext, useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { todoReducer } from "./context/todoReducer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
          <Routes>
            <Route path={"/"} element={<Navigate to={<TodoList />} />} />
            <Route path={"/todo-list"} element={<TodoList />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Router>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
