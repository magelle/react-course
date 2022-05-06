import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const expense = props.expense;

  return (<Card className="expense-item">
    <div><ExpenseDate date={expense.date}></ExpenseDate></div>
    <div className="expense-item__description">
      <h2>{expense.title}</h2>
      <div className="expense-item__price">${expense.amount}</div>
    </div>
  </Card>);
}

export default ExpenseItem;