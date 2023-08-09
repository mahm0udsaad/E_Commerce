import React, { useEffect, useState } from 'react';
export const Cart = React.createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const cart = localStorage.getItem('cart');
    return cart && cart !== 'undefined' ? JSON.parse(cart) : [];
  });

  const [numOfItems, setNumOfItems] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));

    const totalQuantity =  cartItems.reduce((total, item) =>item? total + item.quantity : item, 0);
    setNumOfItems(totalQuantity);
  }, [cartItems]);

  return (
    <Cart.Provider value={{ cartItems, setCartItems, numOfItems }}>
      {props.children}
    </Cart.Provider>
  );
};

export default CartProvider;