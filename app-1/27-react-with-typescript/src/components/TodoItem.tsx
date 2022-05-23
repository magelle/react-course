import React from "react";

import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string, onDeleteTodo: () => void }> = (props) => {
    const onCLickHandler = () => {
        props.onDeleteTodo()
    };
    return <li className={classes.item} onClick={onCLickHandler}>{props.text}</li>
}

export default TodoItem;