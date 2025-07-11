import { useLoaderData } from "react-router";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const DisplayExpenses = () => {
  const expenseData = useLoaderData();
  const [expense, setExpense] = useState(expenseData); // ✅ initialize state
  const [selectedCategory, setSelectedCategory] = useState(""); // ✅ initialize state

  const filterdExpenses = selectedCategory
    ? expenseData.filter((expense) => expense.category === selectedCategory)
    : expenseData;

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/expense/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      // ✅ Update UI after successful deletion
      const newData = expense.filter((e) => e._id !== id);
      setExpense(newData);

      Swal.fire("Deleted!", "Your expense has been deleted.", "success");
    } catch (error) {
      console.error("Delete error:", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="overflow-x-auto w-10/12 mx-auto pt-20">
      <h1 className="text-4xl font-bold text-center pb-6">All Expense</h1>
      <div className="">
        <div className="flex items-center justify-start gap-4">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
            <option value="bills">Bills</option>
            <option value="others">Other</option>
          </select>
          <button className="btn">Reset</button>
        </div>
      </div>
      <table className="table">
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
          {expense.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No Expenses yet
              </td>
            </tr>
          ) : (
            filterdExpenses.map((expense, index) => (
              <tr key={expense._id}>
                <td>{index + 1}</td>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>
                  <button
                    onClick={() => handleDelete(expense._id)}
                    className="bg-black px-4 py-[10px] rounded text-white"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayExpenses;
