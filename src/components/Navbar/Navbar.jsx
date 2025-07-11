import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 border-none w-10/12 mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100  z-1 mt-3 w-52 p-2 "
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/addExpense">Add Expense</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/allExpense">Display Expenses</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/summary">Expense Summary</NavLink>
            </li>
          </ul>
        </div>
        <a class="text-2xl font-medium">Expense Tracker</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/addExpense">Add Expense</NavLink>
          </li>
          <li>
            <NavLink to="/allExpense">Display Expenses</NavLink>
          </li>
          <li>
            <NavLink to="/summary">Expense Summary</NavLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
