import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setChosenYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === chosenYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={chosenYear}
        onFilteredYear={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
