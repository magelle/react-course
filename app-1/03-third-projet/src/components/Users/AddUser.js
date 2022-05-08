import React, {Fragment, useRef, useState} from "react";

import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button.module";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  let [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please entre a valid name and age (non-empty values)'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please entre a valid age (> 0)'
      })
      return;
    }

    props.addUser(enteredUsername, +enteredAge)

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorHandler = () => setError(null)

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username"
                 type="text"
                 ref={nameInputRef}/>
          <label htmlFor="age">Age (years)</label>
          <input id="age"
                 type="number"
                 ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>)
}

export default AddUser;