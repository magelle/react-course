import * as events from "events";
import React, {useRef} from "react";

import classes from './AddTodo.module.css'

const AddTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredValue = todoTextInputRef.current?.value;

        if (!enteredValue || enteredValue.trim().length === 0)
            return;

        props.onAddTodo(enteredValue);
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo text</label>
        <input ref={todoTextInputRef} type='text' id='text' />
        <button>Add Todo</button>
    </form>
}

export default AddTodo