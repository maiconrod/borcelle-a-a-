"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart')
    if (cartLocal) {
      try {
        
        setCart(JSON.parse(cartLocal))
      } catch (err) {
        console.error("Falha ao buscar carrinho no LocalStorage", err)
        setCart({})
      }
    }
  }, [])
  const addToCart = (item) => {
    setCart((cart) => {
        let quantity = 0
        if (cart[item.id]) {
            quantity = cart[item.id].quantity
        }
      const newCart = {
        ...cart,
        [item.id]: {
            quantity: quantity + 1,
            item
        }
      };
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
