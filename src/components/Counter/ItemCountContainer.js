import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({stock, initial}) => {
  

  const [count, setCount] = useState(initial);
  const updateValue = (e) => {
    setCount(count + Number(e.target.value));
  }

  return (
    <div className="level is-mobile p-1 m-0">
      <ItemCount stock={stock} count={count} quantity = {count} onAdd={updateValue} />
    </div>
  );
};

export default ItemCountContainer;