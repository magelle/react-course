import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import AddTodo from "./components/AddTodo";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todo: string) => {
        setTodos([...todos, new Todo(todo)]);
    }

    const removeTodoHandler = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div>
            <Todos todos={todos} onDeleteTodo={removeTodoHandler}/>
            <AddTodo onAddTodo={addTodoHandler}/>
        </div>
    );
}

export default App;
