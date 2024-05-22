import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";

const MENU_ITEMS = [
  {
    id: 1,
    src: "/images/posterAcaiFrutas.png",
    description: "Açaí de 300ml com frutas mistas em cubos deliciosas",
    icon: <FaCartPlus />,
    price: "R$ 15,90",
  },
  {
    id: 2,
    src: "/images/posterAmendoim.png",
    description: "Açaí de 300ml com amendoim moído e torradinho",
    icon: <FaCartPlus />,
    price: "R$ 13,90",
  },
  {
    id: 3,
    src: "/images/posterMagnum.png",
    description: "Açaí de 300ml com picolé Magnum no sabor escolhido",
    icon: <FaCartPlus />,
    price: "R$ 19,90",
  },
  {
    id: 4,
    src: "/images/posterMMs.png",
    description: "Açaí de 300ml com MMs originais e saborosos",
    icon: <FaCartPlus />,
    price: "R$ 18,90",
  },
  {
    id: 5,
    src: "/images/posterAcaiFrutas.png",
    description: "Açaí de 300ml com frutas mistas em cubos",
    icon: <FaCartPlus />,
    price: "R$ 17,90",
  },
  {
    id: 6,
    src: "/images/posterAcaiFrutas.png",
    description: "Açaí de 300ml com frutas mistas em cubos",
    icon: <FaCartPlus />,
    price: "R$ 17,90",
  },
  {
    id: 7,
    src: "/images/posterAmendoim.png",
    description: "Açaí de 300ml com amendoim moído",
    icon: <FaCartPlus />,
    price: "R$ 13,90",
  },
  {
    id: 8,
    src: "/images/posterMagnum.png",
    description: "Açaí de 300ml com picolé Magnum",
    icon: <FaCartPlus />,
    price: "R$ 19,90",
  },
  {
    id: 9,
    src: "/images/posterMMs.png",
    description: "Açaí de 300ml com MMs",
    icon: <FaCartPlus />,
    price: "R$ 18,90",
  },
  {
    id: 10,
    src: "/images/posterAcaiFrutas.png",
    description: "Açaí de 300ml com frutas mistas em cubos",
    icon: <FaCartPlus />,
    price: "R$ 18,90",
  },
  {
    id: 11,
    src: "/images/posterMMs.png",
    description: "Açaí de 300ml com MMs",
    icon: <FaCartPlus />,
    price: "R$ 18,90",
  },
  {
    id: 12,
    src: "/images/posterAcaiFrutas.png",
    description: "Açaí de 300ml com frutas mistas em cubos",
    icon: <FaCartPlus />,
    price: "R$ 15,90",
  },
];

export const ItemsMenu = () => {

  return (
    <div>
      <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-[50%] lg:ml-[50%]">
        {MENU_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            className="max-w-[100%] text-center my-10 xl:my-5 xl:mt-16"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="w-full md:items-center justify-between">
              <img
                src={item.src}
                alt={item.description}
                className="mb-6 rounded-2xl shadow-md shadow-slate-950 max-w-[30%] md:max-w-[40%] lg:max-w-[60%] mx-auto"
              />
              <p className="min-h-20 max-h-20  max-w-[50%] lg:max-w-[90%] mb-10 text-purple-contact font-light text-lg text-center mx-auto">
                {item.description}
              </p>
            </div>
            <div className="md:flex flex-col gap-3 items-center justify-center">
              <p className="min-h-12 lg:mt-6 max-h-24 text-purple-contact font-bold text-2xl">
                {item.price}
              </p>
              <div className="flex items-center justify-center">
                <button
                className="text-beige-header text-2xl bg-purple-contact/80 py-3 px-6 rounded-xl shadow-md shadow-slate-950 hover:ring-2 hover:ring-purple-800 hover:bg-purple-contact transition-all duration-300"
                >
                  {item.icon}
                </button>
              </div>
            </div>
            <div className="max-w-[90%] mx-auto border-b border-purple-contact border mt-6" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
