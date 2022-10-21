import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState("");

  const yearChangeHandler = (event) => {
    event.preventDefault();
    setEnteredYear(event.target.value);

    console.log(enteredYear);

    props.onFilteredYear(enteredYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
