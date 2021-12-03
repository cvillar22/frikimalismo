import React, {useEffect} from "react";
import CartFull from "./CartFull";
import CartEmpty from "./CartEmpty";
import { useCartContextProvider } from "../../context/cartContext";

const Cart = () => {

  const { hasItemsInCart } = useCartContextProvider();

  return (
    <div className='container is-max-desktop p-4'>
      {hasItemsInCart() ? <CartFull /> : <CartEmpty />}
    </div>
  );
};

export default Cart;