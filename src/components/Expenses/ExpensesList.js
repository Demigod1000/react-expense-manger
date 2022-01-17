import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <p className="expenses-list__fallback">No expense found</p>;
  }
  let dataItem = props.list.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      ></ExpenseItem>
    );
  });

  return <ul className="expenses-list">{dataItem}</ul>;
};

export default ExpensesList;
