
import React,{useState,useContext} from "react";
import {ExpenseContext} from '../ExpenseContext'

const Expenseltem = () => {

  const {expenses} =useContext(ExpenseContext);
  console.log('expenses:',expenses)
  return (
   
    <>
     {expenses.map(expens=>(
        <div>
          <h2>{expens.title}</h2> 
          <h4>${expens.amount}</h4> 
        </div>
      ))
    } 
    </>
  );
 
};

export default Expenseltem;
