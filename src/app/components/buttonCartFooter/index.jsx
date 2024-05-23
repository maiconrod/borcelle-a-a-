"use client";

import { FaCartShopping } from "react-icons/fa6";
import { ModalCart } from "../modalCart";
import { useState } from "react";
import { useCart } from "../cartContext";

export const ButtonCartFooter = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalFunction = () => setOpenModal(!openModal);

  const { cart } = useCart();
  const itemsCount = Object.keys(cart).reduce((prev, curr) => {
    return prev + cart[curr].quantity;
  }, 0);

  const totalPrice = Object.keys(cart).reduce((prev, curr) => {
    const itemTotal = parseFloat(cart[curr].item.price.replace('R$', '').replace(',', '.')) * cart[curr].quantity;
    return prev + itemTotal;
  }, 0).toFixed(2);

  return (
    <div className="fixed bottom-0 w-full bg-purple-cart py-3 z-40 flex items-center justify-center">
      <button
        className="text-white flex items-center justify-center gap-2 font-semibold"
        onClick={() => setOpenModal(true)}
      >
        {itemsCount > 0 ? <span>({itemsCount})</span> : <span>(0)</span>} Ver
        meu carrinho
        <FaCartShopping />
      </button>
      <ModalCart
      isOpen={openModal}
      setModalOpen={closeModalFunction}
      cart={cart}
      itemsCount={itemsCount}
      totalPrice={totalPrice}
      />
    </div>
  );
};
