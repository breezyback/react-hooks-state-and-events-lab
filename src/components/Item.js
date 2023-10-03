import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart" : "";
  const btnText = inCart ? "Remove From Cart" : "Add to Cart"
  const btnClass = inCart ? "remove" : "add";

  function addItem() {
    inCart ? setInCart(false) : setInCart(true);
  }

  return (
    <li className={ itemClass }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ btnClass } onClick={ addItem }>
        { btnText }
      </button>
    </li>
  );
}

export default Item;
