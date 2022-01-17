import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "12",
      title: "Car Insurance",
      date: new Date(2020, 1, 11),
      amount: 123.5,
    },
    {
      id: "13",
      title: "Bike Insurance",
      date: new Date(2019, 2, 12),
      amount: 45464.5,
    },
    {
      id: "14",
      title: "Home Insurance",
      date: new Date(2021, 3, 13),
      amount: 7454.6,
    },
    {
      id: "15",
      title: "land Insurance",
      date: new Date(2022, 0, 14),
      amount: 87454583.2,
    },
    {
      id: "16",
      title: "Life Insurance",
      date: new Date(2022,41, 15),
      amount: 105406550.2,
    },
  ];
  const [expense, addExpense] = useState(expenses);

  const addExpenseHandler = (newExpense) => {
    addExpense((prevState)=>{
      return [newExpense,...prevState];
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expense}></Expenses>
    </div>
  );
};

export default App;
