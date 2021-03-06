/** @format */

import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ExpenseContext = createContext();

const ExpenseProvider = (props) => {
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      title: "Toilet Paper",
      amount: 94.12,
    },
    {
      id: uuidv4(),
      title: "New TV",
      amount: 799.49,
    },
    {
      id: uuidv4(),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: uuidv4(),
      title: "New Desk (Wooden)",
      amount: 450,
    },
  ]);

  const addItems = (values) => {
    setExpenses([...expenses,values/* {id:uuidv4(),title:values.title,amount:values.amount} */]);
  
  };

  const deleteItems = (item) => {
    setExpenses ( expenses.filter((i) => i.id !== item.id));
   
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addItems, setExpenses, deleteItems }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
