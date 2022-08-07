import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

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

      {user?.email ? (
        <div>
          <Link to='/account' className='p-4'>
            Account
          </Link>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div className='hidden md:block'>
          <Link to='/signin' className='p-4 hover:text-accent'>
            Sign In
          </Link>
          <Link
            to='/signup'
            className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
          >
            Sign Up
          </Link>
        </div>
      )}
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
          <li
            onClick={handleMenu}
            className="border-b py-6 flex justify-center"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={handleMenu}
            className="border-b py-6 flex justify-center"
          >
            <Link to={user?.email ? "/account" : "/signup"}>Account</Link>
          </li>
          <li className="py-6 flex justify-center">
            <ThemeToggle />
          </li>
        </ul>
        <div className='flex flex-col w-full p-4'>
          <Link to='/signin'>
            <button
              onClick={handleMenu}
              className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'
            >
              Sign In
            </button>
          </Link>
          <Link onClick={handleMenu} to='/signup'>
            <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
