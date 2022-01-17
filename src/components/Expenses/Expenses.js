import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const expenseList = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );
  const dropdownFilterChangeHandler = (chosenYear) => {
    setYear(chosenYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onSaveDropdownData={dropdownFilterChangeHandler}
        />
        <ExpensesChart expenses={expenseList} />
        <ExpensesList list={expenseList} />
      </Card>
    </div>
  );
};

export default Expenses;
