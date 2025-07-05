import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddExpense from "../pages/AddExpense/AddExpense";
import DisplayExpenses from "../pages/DisplayExpenses/DisplayExpenses";
import ExpenseSummary from "../pages/ExpenseSummary/ExpenseSummary";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "addExpense", Component: AddExpense },
      {
        path: "allExpense",
        Component: DisplayExpenses,
        loader: () => fetch("http://localhost:3000/allExpense"),
      },
      {
        path: "summary",
        Component: ExpenseSummary,
        loader: () => fetch("http://localhost:3000/sumExpense"),
      },
    ],
  },
]);

export default router;
