import React from 'react';
import '../NewExpenses/NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {
    return (
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;