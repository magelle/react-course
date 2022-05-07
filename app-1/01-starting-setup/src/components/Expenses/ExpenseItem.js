import React, {useState} from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const expense = props.expense;

  const clickHandler = () => {
    setTitle('Updated!')
  }

  return (<li>
    <Card className="expense-item">
      <div><ExpenseDate date={expense.date}></ExpenseDate></div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  </li>);
}

export default ExpenseItem;