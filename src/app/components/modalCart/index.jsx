import Image from "next/image";

export const ModalCart = ({ isOpen, setModalOpen, children }) => {
  if (isOpen) {
    return (
      <div
        className='bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center'
      >
        <div className="bg-beige-header p-5 rounded-lg min-w-[90%] md:min-w-[600px] border-2 border-purple-contact overflow-y-auto max-h-[600px]">
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
            {children}
          </div>
          <p className="font-bold text-purple-contact mt-2">
            Total:{" "}
            <span id="cart-total" className="">
              0.00
            </span>{" "}
          </p>
          <p className="font-bold mt-4 text-purple-contact">Endereço de entrega: </p>
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
              className="bg-red-500 text-white px-4 py-1 rounded"
              onClick={setModalOpen}
            >
              Fechar
            </button>
            <button
              id="checkout-btn"
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
