/** @format */

import { v4 as uuidv4 } from "uuid";

export const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return [
        ...state,
        {
          title: action.expense.title,
          amount: action.expense.amount,
          id: uuidv4(),
        },
      ];

    case "DELETE_ITEMS":
      return state.filter((expense) => expense.id !== action.id);

    default:
      return state;
  }
};
