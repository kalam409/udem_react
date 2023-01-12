import React from 'react';
import '../NewExpenses/ExpenseForm.css'
const ExpenseForm = () => {
    return (
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label for="fname">Title</label>
            <input type="text" />
          </div>
          <div className="new-expense__control">
            <label for="fname">Amount</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label for="fname">Date</label>
            <input type="date" min="2019-10-01" max="2022-12-31" />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
};

export default ExpenseForm;