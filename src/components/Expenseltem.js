
import React,{useContext} from "react";
import {ExpenseContext} from '../ExpenseContext';
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';


const Expenseltem = () => {
  const { dispatch, expenses } = useContext(ExpenseContext);

  return (
   <>
  
  {expenses.map((expense) => (
        <div key={expense.id}>
          <List>
            <ListItem>
              <ListItemText primary={expense.title} />
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={expense.amount} />

              <ListItemSecondaryAction>
                <IconButton
                  type="button"
                  onClick={() =>
                    dispatch({ type: "DELETE_ITEMS", id: expense.id })
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      ))}


    </>
  );
 
};

export default Expenseltem;
