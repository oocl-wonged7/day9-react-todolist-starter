import { createContext, useReducer } from "react";
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import DoneList from "./components/DoneList";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";
import TodoList from "./components/TodoList";
import { todoReducer } from "./context/todoReducer";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
          <nav>
            <Link to={"/"}>Home</Link> | <Link to={"/doneList"}>Done</Link> |{" "}
            <Link to={"/helpPage"}>Help</Link>
          </nav>
          <Routes>
            <Route path={"/"} element={<Navigate to="/todoList" />} />
            <Route path={"/todoList"} element={<TodoList />} />
            <Route path={"/doneList"} element={<DoneList />} />
            <Route path={"/helpPage"} element={<HelpPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Router>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
