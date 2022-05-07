import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  const filteredExpenses = props.items.filter((e) => e.date.getFullYear().toString() === filteredYear);

  return (<Card className="expenses">
    <ExpensesFilter selected={filteredYear} onSelectYear={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
  </Card>);
}

export default Expenses;