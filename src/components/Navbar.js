import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className={classes.nav}>
          Home
        </NavLink>
        <NavLink to="/about" className={classes.nav}>
          About
        </NavLink>
        <NavLink to="/login" className={classes.nav}>
          Login
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
