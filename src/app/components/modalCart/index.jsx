import Image from "next/image";
import ReactModal from "react-modal";
import { useCart } from "../cartContext";

export const ModalCart = ({
  isOpen,
  setModalOpen,
  cart,
  itemsCount,
  totalPrice,
}) => {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();

  if (isOpen) {
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={setModalOpen}
        contentLabel="Cart Modal"
        className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      >
        <div className="bg-beige-header p-5 rounded-lg max-w-[90%] md:max-w-[600px] border-2 border-purple-contact overflow-y-auto max-h-[600px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/logoSemFundoRoxa.png"
              width={100}
              height={100}
              alt="Logomarca Borcelle"
            />
            <h2 className="text-center text-lg font-bold md:text-xl mb-2 text-purple-contact">
              Meu Carrinho
            </h2>
          </div>
          <div className="flex justify-between flex-col">
            {itemsCount === 0 ? (
              <p className="text-purple-contact text-center text-xl py-3">
                Hey! Seu carrinho está vazio!
              </p>
            ) : (
              <ul>
                {cart &&
                  Object.keys(cart).map((key) => {
                    const { item, quantity } = cart[key];
                    const itemTotal = item.price
                      ? (
                          parseFloat(
                            item.price.replace("R$", "").replace(",", ".")
                          ) * quantity
                        ).toFixed(2)
                      : 0;
                    return (
                      <div
                        key={item.id}
                        className="flex justify-between items-center border-b border-purple-contact py-2 text-purple-contact"
                      >
                        <img
                          src={item.src}
                          alt={item.description}
                          className="max-w-[40%] md:max-w-[30%] rounded"
                        />
                        <div className="flex flex-col items-end px-2 max-w-[70%] md:max-w-[100%] md:text-xl">
                          <p className="text-end text-sm">{item.description}</p>
                          <p className="text-base">{item.price}</p>
                          <div className="flex gap-1 mt-2 items-center justify-center">
                            <button
                              onClick={() => {
                                decreaseQuantity(item.id);
                              }}
                              className="bg-red-700 text-base text-white px-2 rounded my-2 md:my-3"
                            >
                              -
                            </button>
                            <input
                              value={quantity}
                              className="font-bold text-center w-8 h-8 border-none rounded appearance-none text-purple-contact"
                            ></input>
                            <button
                              onClick={() => addToCart(item)}
                              className="bg-green-700 text-base text-white px-2 rounded my-2 md:my-3"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="bg-red-700 text-base text-white px-2 rounded my-2 md:my-3"
                            >
                              Remover
                            </button>
                          </div>
                          <p className="font-bold text-xl md:text-2xl">
                            Total: R$ {itemTotal}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </ul>
            )}
          </div>
          <p className="font-bold text-purple-contact text-end mt-2 text-2xl md:text-3xl">
            Total: {`R$${totalPrice}`}
          </p>
          <p className="font-bold mt-4 text-purple-contact">
            Endereço de entrega:{" "}
          </p>
          <input
            type="text"
            placeholder="Digite seu endereço completo"
            className="w-full p-1 rounded my-1 focus:outline-none focus:ring-1 focus:ring-purple-contact"
          />
          <p className="text-red-500 hidden" id="address-warn">
            Digite seu endereço completo
          </p>

          <div className="flex items-center justify-between mt-5 w-full">
            <button
              className="bg-red-700 text-white px-4 py-1 rounded"
              onClick={setModalOpen}
            >
              Fechar
            </button>
            <button
              id="checkout-btn"
              className="bg-green-700 text-white px-4 py-1 rounded"
            >
              Finalizar pedido
            </button>
          </div>
        </div>
      </ReactModal>
    );
  }
  return null;
};
