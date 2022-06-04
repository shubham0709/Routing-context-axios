import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import style from "./Item.module.css";

const Item = () => {
  const { clickedItem } = useContext(ItemContext);
  let x = clickedItem;
  console.log(x);

  return (
    <div>
      <div className={style.item}>
        <img src={x.image} alt="" className={style.image} />
        <h1>{x.title}</h1>
        <h3>Cat : {x.category}</h3>
        <p>{x.description}</p>
        <p>price : {x.price}</p>
        <p>rating : {x.rating.rate}</p>
      </div>
    </div>
  );
};

export default Item;
