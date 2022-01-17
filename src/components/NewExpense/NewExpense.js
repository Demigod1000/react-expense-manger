import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddNewExpense(expenseData);
    seteditingMode(false);
  };
  const [editingMode, seteditingMode] = useState(false);
  const toggleNewExpenseForm = () => {
    seteditingMode(true);
  };
  const cancelFormHandler = () => {
    seteditingMode(false);
  };
  return (
    <div className="new-expense">
      {editingMode && (
        <NewExpenseForm
          onCancelForm={cancelFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!editingMode && (
        <button onClick={toggleNewExpenseForm}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
