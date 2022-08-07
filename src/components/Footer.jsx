import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly">
          <div>
            <h2>Support</h2>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>API Status</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h2>Info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Invest</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <ThemeToggle></ThemeToggle>
              </div>
              <p>Sign up for crypto news</p>
              <div>
                <input type="email" placeholder="Enter email" />
                <button>Sign up</button>
              </div>
              <div>
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
