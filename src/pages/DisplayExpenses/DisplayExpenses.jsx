import { useLoaderData } from "react-router";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const DisplayExpenses = () => {
  const expenseData = useLoaderData();
  console.log(expenseData);

  const [expense, setExpense] = useState([]);
  // const handleDelete = async (id) => {
  //   console.log(id);
  //   fetch(`http://localhost:3000/expense/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = expense.filter((food) => id !== food._id);
  //       setExpense(newData);
  //     });
  // };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/expense/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      const newData = expense.filter((expense) => id !== expense._id);
      setExpense(newData);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="overflow-x-auto w-10/12 mx-auto pt-20">
      <h1 className="text-4xl font-bold text-center pb-6">All Expense</h1>
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
                  {/* <td>
                    <MdDelete className="text-xl" />
                  </td> */}
                  <td>
                    <button
                      onClick={() => handleDelete(expense._id)}
                      className="bg-black px-4 py-[10px] rounded text-white"
                    >
                      <FaTrash className=""></FaTrash>
                    </button>
                  </td>
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
