/** @format */

import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExpenseContext } from "../ExpenseContext";
import { v4 as uuidv4 } from 'uuid';


const ExpenseAded = () => {

  const { addItems, expenses,deleteItems } = useContext(ExpenseContext);

  const formik = useFormik({
    initialValues: {
      id:"",
      title: "",
      amount: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),

      amount: Yup.string().required("Amount is required"),
    }),
    onSubmit: (values) => {
      addItems({...values,id:uuidv4()});
      },
   
 
    });

  return (
    <>
      {expenses.map((expense) => (
        <div key={expense.id} >
        <ul >
          <li>{expense.title}</li>
          <li>${expense.amount}</li>
        </ul>
        <button type="button" onClick={()=>(deleteItems(expense))} >Delete</button>
        </div>
      ))}

      <form onSubmit={formik.handleSubmit}>
        
        <input
          name="title"
          onChange={formik.handleChange}
          type="text"
          placeholder="Items title"
          value={formik.values.title}
        />
        <input
          name="amount"
          onChange={formik.handleChange}
          type="text"
          placeholder="Amount"
          value={formik.values.amount}
        />
        <button type="submit">Submit</button>
       
      </form>
    </>
  );
};
export default ExpenseAded;
