import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };


  const editHandler = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  return <div className="new-expense">
    {!isEditing && <button onClick={editHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditing}/>}
  </div>
}

export default NewExpense;