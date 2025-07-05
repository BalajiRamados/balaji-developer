import React from "react";
import Home from "../Home";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

