export const expenseReducer=(state,action)=>{

switch(action.type){
    case 'ADD_ITEMS':
        return[...state,{
            title: action.expenses.title,
            amount: action.expenses.amount,
            id:action.expenses.id
        }]

        default:
            return state


}

}