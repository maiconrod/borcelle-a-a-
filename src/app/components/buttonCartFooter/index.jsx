"use client";

import { FaCartShopping } from "react-icons/fa6";
import { ModalCart } from "../modalCart";
import { useState } from "react";

import { ItemsCart } from "../itemsCart";

export const ButtonCartFooter = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const closeModalFunction = () => setOpenModal(!openModal);

  return (
    <div className="fixed bottom-0 w-full bg-purple-cart py-3 z-40 flex items-center justify-center">
      <button
        className="text-white flex items-center justify-center gap-2 font-semibold"
        onClick={() => setOpenModal(true)}
      >
        (<span id="cart-count">{cartItems.length}</span>) Ver meu carrinho
        <FaCartShopping />
      </button>
      <ModalCart isOpen={openModal} setModalOpen={closeModalFunction}>
        {cartItems.map((item, index) => (
          <ItemsCart key={index} item={item} />
        ))}
        {cartItems.length === 0 && (
          <p className="text-purple-contact text-center text-xl py-3">
            Hey! Seu carrinho está vazio!
          </p>
        )}
      </ModalCart>
    </div>
  );
};
