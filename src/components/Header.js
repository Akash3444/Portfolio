import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import About from "./About";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <About />
    </header>
  );
};

export default Header;
