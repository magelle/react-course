import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) =>
  (<Card className="expenses">
      {props.items.map(e => <ExpenseItem expense={e}/>)}
    </Card>
  )

export default Expenses;