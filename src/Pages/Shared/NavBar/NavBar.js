import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconName, FaUserCircle } from "react-icons/fa";
import { AuthProvider } from "../../../contexts/AuthContextProvider/AuthContextProvider";
import books from "../../../assets/images/books.png";
import './NavBar.css';

const NavBar = () => {
  const { user, handleLogOut } = useContext(AuthProvider);
  console.log(user);
  const logOut = () => {
    handleLogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-slate-600 p-5">
      <div className="navbar-start  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-8 p-2 shadow bg-base-100 rounded-box w-52 space-y-5"
          >
            <Link to="/">Homepage</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </ul>
        </div>
      </div>
      <div></div>
      <div />

      <div className="navbar-center flex items-center ">
        <img className="rounded-full w-[40px]" src={books} alt="" />
        <Link className="btn btn-ghost text-slate-900 text-2xl font-bold hidden lg:block normal-case  pt-1">
          Explore Knowledge
        </Link>
      </div>
      

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
          <label
              htmlFor="AcceptConditions"
              className="relative h-8 w-14 cursor-pointer"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
              />

              <span className="absolute inset-0 rounded-full bg-gray-900 transition peer-checked:bg-slate-900"></span>

              <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
            </label>
          </div>
        </button>
        <button className="btn btn-ghost btn-circle">
          {user?.photoURL ? (
            <img
              className="rounded-full w-[40px]"
              src={user.photoURL}
              alt=""
              title={user.displayName}
            />
          ) : (
            <Link className="text-4xl rounded">
              <FaUserCircle></FaUserCircle>
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
