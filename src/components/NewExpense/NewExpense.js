import React from 'react';
// import ExpenseDate from '../Expenses/ExpenseDate';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredexpenseData) => {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
