import toast from "react-hot-toast";

const AddExpense = () => {
  const handleAddExpense = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const category = form.category.value;

    const formData = {
      title,
      amount,
      category,
      date,
    };
    console.log(formData);

    fetch("http://localhost:3000/addExpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.insertedId) {
          toast.success("Expense Added Successfully");
        }
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-start">
      <div className="card bg-base-100 w-full max-w-3/4 shrink-0 rounded-none p-10">
        <h1 className="text-4xl font-semibold text-center">Add Your Expense</h1>
        <form onSubmit={handleAddExpense} className="card-body">
          <fieldset className="fieldset">
            <div className="flex items-center gap-4">
              <div className="w-full">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="input w-full"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="w-full">
                <label className="label">Amount</label>
                <input
                  name="amount"
                  type="number"
                  className="input w-full"
                  placeholder="Title"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-full">
                <label className="label">Date</label>
                <input
                  name="date"
                  type="date"
                  className="input w-full"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="w-full">
                <label className="label">Category</label>
                <select
                  name="category"
                  id="cars"
                  className="w-full border border-gray-300 px-3 py-[10px] rounded"
                  required
                >
                  <option value="">Select</option>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="bills">Bills</option>
                  <option value="others">Other</option>
                </select>
              </div>
            </div>
            <button className="btn btn-neutral mt-4 rounded-none">Add</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
