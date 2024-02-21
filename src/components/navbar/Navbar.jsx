import React, { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSunFill,
  RiMoonFill,
} from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";

const Navbar = ({ onClick, mode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 900) {
      setToggleMenu((toggleMenu) => !toggleMenu);
    }
  };

  return (
    <nav className="section__padding">
      <div className="nav-contents">
        <h1 className="nav-logo">GPT-3</h1>
        <ul className={toggleMenu ? "show" : ""}>
          <li>
            <a href="#home" onClick={handleClick}>
              home
            </a>
          </li>
          <li>
            <a href="#wgpt" onClick={handleClick}>
              What is GPT?
            </a>
          </li>
          <li>
            <a href="#openai" onClick={handleClick}>
              Open AI
            </a>
          </li>
          <li>
            <a href="#case" onClick={handleClick}>
              Case Studies
            </a>
          </li>
          <li>
            <a href="#library" onClick={handleClick}>
              Library
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        {mode ? (
          <RiSunFill size={25} onClick={onClick} />
        ) : (
          <RiMoonFill size={25} onClick={onClick} />
        )}
        <a>sign in</a>
        <button className="button">Sign-Up</button>
        <div className="menu-icons" onClick={handleClick}>
          {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
