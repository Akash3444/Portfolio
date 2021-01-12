import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [left, setLeft] = useState("-100vw");

  const handleClick = (count) => {
    setLeft(count);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__brand">
        Akash
      </a>

      <button
        type="button"
        style={{ background: "transparent", border: "none" }}
        className="menu__icon"
        onClick={() => handleClick("0")}>
        <svg
          style={{ width: 30, height: 30 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <ul className="navbar__nav" style={{ left }}>
        <span className="times" onClick={() => handleClick("-100vw")}>
          &times;
        </span>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Service
          </a>
        </li>
        <li className="nav__item">
          <a href="/skills" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
