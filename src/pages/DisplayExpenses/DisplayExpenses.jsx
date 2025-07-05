import { useLoaderData } from "react-router";

const DisplayExpenses = () => {
  const expenseData = useLoaderData();
  console.log(expenseData);
  return (
    <div className="overflow-x-auto w-10/12 mx-auto pt-20">
      <h1 className="text-4xl font-bold text-center">All Expense</h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {expenseData.length === 0 ? (
            <p>No Expenses yet</p>
          ) : (
            expenseData.map((expense, index) => {
              return (
                <tr key={expense?._id}>
                  <td>{index + 1}</td>
                  <td>{expense.title}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayExpenses;
