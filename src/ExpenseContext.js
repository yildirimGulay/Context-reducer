/** @format */

import { Formik } from "formik";
import React, { useState, createContext, useReducer } from "react";
import ExpenseAded from "./components/ExpenseAded";
import { expenseReducer } from "./reducers/expenseReducer";

export const ExpenseContext = createContext();

const ExpenseProvider = (props) => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
    },
  ]);

  const addItems = (title, amount, id) => {
    setExpenses([...expenses, { title, id, amount }]);
  };
  const [newExpenses, setNewExpenses] = useState([]);
  console.log(":");
  return (
    <ExpenseContext.Provider
      value={{ expenses, addItems, setExpenses, setNewExpenses }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
