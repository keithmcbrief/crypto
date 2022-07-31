import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="rounded-div flex items-center 
    justify-between h-20 font-bold"
    >
      <Link to="/">
        <h1 className="text-2xl">Cryptocoin</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="hidden md:block">
        <Link className="p-4 hover:text-accent" to="signin">
          Sign In
        </Link>
        <Link
          className="bg-button text-btnText px-5 py-2 ml-2 
          rounded-2xl shadow-lg hover:shadow-2xl"
          to="signup"
        >
          Sign Up
        </Link>
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="block md:hidden text-2xl cursor-pointer z-10 "
      >
        {!showMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      {/* Menu */}
      <div
        className={
          showMenu
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-200 z-100"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-200"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6 flex justify-center">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b py-6 flex justify-center">
            <Link to="/">Account</Link>
          </li>
          <li className="py-6 flex justify-center">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button
              className="w-full my-2 p-3 bg-primary
            border border-secondary rounded-2xl shadow-xl"
            >
              Sign In
            </button>
            <button
              className="w-full my-2 p-3 bg-button
            text-btnText rounded-2xl shadow-xl"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
