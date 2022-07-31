import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div
      className="rounded-div flex items-center 
    justify-between h-20 font-bold"
    >
      <Link to="/">
        <h1 className="text-2xl">Cryptocoin</h1>
      </Link>
      <div className="hidden md:flex">
        <ThemeToggle />
      </div>
      <div>
        <Link to="signin">Sign In</Link>
        <Link to="signup">Sign Up</Link>
      </div>
      <div>
        <AiOutlineMenu />
      </div>
      {/* Menu */}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div>
          <Link to="/signin">
            <button>Sign In</button>
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
