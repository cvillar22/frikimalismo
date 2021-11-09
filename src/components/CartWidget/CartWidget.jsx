import React from "react";
import Carrito from "../../assets/Cart.svg";

const CartWidget = () => {
  
  return (
    <div>
      <img title="Cart"  className="cartImg" src={Carrito} alt="Cart" />
    </div>
  );
};

export default CartWidget;