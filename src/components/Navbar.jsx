import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">Home</Link>
      <Link to="/electronics">electronics</Link>
      <Link to="/jewelery">jewelery</Link>
      <Link to="/men">men's clothing</Link>
      <Link to="/women">women's clothing</Link>
    </div>
  );
};

export default Navbar;
