import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Stock Trading",
    amount: 1900,
    date: new Date(2021, 9, 17),
  },
  {
    id: "e2",
    title: "F&O",
    amount: 2500,
    date: new Date(2021, 9, 18),
  },
  {
    id: "e3",
    title: "Coffee",
    amount: 680,
    date: new Date(2021, 9, 19),
  },
  {
    id: "e4",
    title: "Stock Trading",
    amount: 360,
    date: new Date(2021, 9, 20),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
      data={expenses}
      />
    </div>
  );
}

export default App;
