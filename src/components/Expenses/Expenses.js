import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear
  });

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList data={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
