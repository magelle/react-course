import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  return (<Card className="expenses">
    <ExpensesFilter selected={filteredYear} onSelectYear={filterChangeHandler}/>
    {props.items.map(e => <ExpenseItem key={e.id} expense={e}/>)}
  </Card>);
}

export default Expenses;