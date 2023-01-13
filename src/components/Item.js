import React from "react";
import react, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);

  function addCart() {
    setIsAdded((isAdded) => !isAdded);
  }

  const cartClass = isAdded ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{isAdded ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
