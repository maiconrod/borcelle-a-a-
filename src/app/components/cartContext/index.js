"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      try {
        const parsedCart = JSON.parse(cartLocal);
        setCart(parsedCart);
      } catch (err) {
        console.error("Falha ao buscar carrinho no LocalStorage", err);
        setCart({});
      }
    }
  }, []);

  const addToCart = (item) => {
    setCart((cart) => {
      let quantity = 0;
      if (cart[item.id]) {
        quantity = cart[item.id].quantity;
      }
      const newCart = {
        ...cart,
        [item.id]: {
          quantity: quantity + 1,
          item,
        },
      };
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const decreaseQuantity = (itemId) => {
    setCart((cart) => {
      const newCart = { ...cart };
  
      if (newCart[itemId]) {
        let currentQuantity = newCart[itemId].quantity;
  
        if (currentQuantity > 1) {
          newCart[itemId].quantity = currentQuantity - .5;
        } else {
          delete newCart[itemId];
        }
      }
  
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCart((cart) => {
      const newCart = { ...cart };
      delete newCart[itemId];
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
