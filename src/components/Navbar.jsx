import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className={style.navbar}>
        <Link to="/">Home</Link>
        <Link to="/electronics">electronics</Link>
        <Link to="/jewelery">jewelery</Link>
        <Link to="/men">men's clothing</Link>
        <Link to="/women">women's clothing</Link>
        <Link to="/cart">cart({cart.length})</Link>
      </div>
      <div className={style.imageContainer}>
        <img
          className={style.image}
          src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1"
          alt="an im"
        />
      </div>
    </div>
  );
};

export default Navbar;
