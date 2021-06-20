import React from 'react';
import './App.css';
import  ExpenseAded  from './components/ExpenseAded';
import Expenseltem from './components/Expenseltem';
import ExpenseProvider from './ExpenseContext';

  const App = () => {

  
  return (

    <ExpenseProvider> 
    <div className="App">
    
    {/*  <Expenseltem />  */}
     <ExpenseAded/>
    </div>
    </ExpenseProvider> 
  );
}

export default App;
