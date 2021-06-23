/** @format */

import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExpenseContext } from "../ExpenseContext";
import { v4 as uuidv4 } from "uuid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Input, ListItemText, Button } from "@material-ui/core";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
      {expenses.map((expense) => (
        <div key={expense.id}>
          <List>
            <ListItem>
              <ListItemText primary={expense.title} />
              <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
              <ListItemText primary={expense.amount} />
            
              <ListItemSecondaryAction>
          <IconButton
            type="button"
            onClick={() => dispatch({ type: "DELETE_ITEMS", id: expense.id })}
          >
           <DeleteIcon />
          </IconButton>
          </ListItemSecondaryAction>
          </ListItem>
          </List>
        </div>
      ))}

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
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default ExpenseAded;
