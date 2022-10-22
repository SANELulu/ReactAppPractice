import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setChosenYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={chosenYear}
        onFilteredYear={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
