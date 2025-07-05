import React from "react";
import { useLoaderData } from "react-router";

const ExpenseSummary = () => {
      const expenseSummary = useLoaderData();
      console.log(expenseSummary);
  return (
  <div className="w-10/12 mx-auto mt-10">
      <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Total Expenses</div>
        <div className="stat-value">{expenseSummary.totalExpense}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Highest Expense</div>
        <div className="stat-value text-secondary">{expenseSummary.highestExpense}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Expenses By Category</div>
        <div className="stat-value">1,200</div>
      </div>
    </div>
  </div>
  );
};

export default ExpenseSummary;
