import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from './Todos.module.css'

type TodosProps = {
    todos: Todo[],
    onDeleteTodo: (id: string) => void
};

const Todos: React.FC<TodosProps> = (props) => {

    return <ul className={classes.todos}>
        {props.todos.map((todo: Todo) => <TodoItem key={todo.id} text={todo.text} onDeleteTodo={props.onDeleteTodo.bind(null, todo.id)}/>)}
    </ul>
}

export default Todos