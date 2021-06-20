/** @format */

import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExpenseContext } from "../ExpenseContext";
import { useState } from "react";

const ExpenseAded = () => {
  const { addItems, expenses,setNewExpenses} = useContext(ExpenseContext);




  



  const formik = useFormik({
    initialValues: {
      id:"",
      title:"",
      amount:""
     
    },

   
  
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),

      amount: Yup.string().required("Amount is required"),
    }),
    onSubmit: (values,e) => {
      setNewExpenses({id:formik.values.id, title:formik.values.title,amount:formik.values.amount})
     addItems(); 
   
     
     console.log('addItems:',addItems)
     
    },

   
  })
 
  
console.log('initialValues:',formik.initialValues)
  return (
    <>
   
      {expenses.map((expens) => (
        <ul key={expens.id}>
          <li>{expens.title}</li>
          <li>${expens.amount}</li>
        </ul>
      ))}
    
      <form onSubmit={formik.handleSubmit}>
      <input
          name="id"
          onChange={formik.handleChange}
          type="text"
          placeholder="Items id"
          value={formik.values.id}
        />
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
        <button type="submit" >Submit</button>
      </form>
    </>
  );
};
export default ExpenseAded;
