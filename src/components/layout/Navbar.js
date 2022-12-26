import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [blur, setBlur] = useState(false);

  const toggleBlur = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setBlur(true);
    } else if (scrolled <= 300) {
      setBlur(false);
    }
  };

  window.addEventListener("scroll", toggleBlur);

  return (
    <nav
      className={`fixed z-50 flex justify-center items-center bg-dark h-14 w-full ${
        blur ? "backdrop-blur bg-opacity-70" : ""
      }`}
    >
      <div className="w-screen xl:w-1/3 px-5 md:px-11 xl:px-3">
        <ul className="flex justify-between items-center text-white font-mark-medium text-[10px] md:text-xs">
          <li>
            {/* <a href="/" className="hover:color-red-2">
              HOME
            </a> */}
            <NavLink
              to="/home"
              className="hover:color-red-2"
              activeClassName="color-red-2"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agents"
              className="hover:color-red-2"
              activeClassName="color-red-2"
            >
              AGENTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buddies"
              className="hover:color-red-2"
              activeClassName="color-red-2"
            >
              BUDDIES
            </NavLink>
          </li>
          <li className="hidden xl:inline">
            <a href="https://playvalorant.com" target="_blank" rel="noreferrer">
              <img
                src="https://seeklogo.com/images/V/valorant-logo-3D72D9117F-seeklogo.com.png"
                alt="logo"
                width={40}
              />
            </a>
          </li>
          <li>
            <NavLink
              to="/cards"
              className="hover:color-red-2"
              activeClassName="color-red-2"
            >
              CARDS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/maps"
              className="hover:color-red-2"
              activeClassName="color-red-2"
            >
              MAPS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weapons"
              className="hover:color-red-2"
              activeClassName="color-red-2"
            >
              WEAPONS
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
