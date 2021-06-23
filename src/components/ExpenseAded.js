/** @format */

import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExpenseContext } from "../ExpenseContext";
import { Input,Button } from "@material-ui/core";


const ExpenseAded = () => {
  const { dispatch, expenses } = useContext(ExpenseContext);

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      amount: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),

      amount: Yup.string().required("Amount is required"),
    }),
    onSubmit: (values) => {
      dispatch({ type: "ADD_ITEMS", expense: { ...values } });
    },
  });

  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="title"
          onChange={formik.handleChange}
          type="text"
          placeholder="Items title"
          value={formik.values.title}
        />
        <Input
          name="amount"
          onChange={formik.handleChange}
          type="text"
          placeholder="Amount"
          value={formik.values.amount}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default ExpenseAded;
