"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ItemsMenu } from "../itemsMenu";


export const Menu = () => {
  return (
    <main className="">
      <div
      className="bg-beige-header flex items-center justify-center relative py-10 xl:py-10 lg:justify-end shadow-inner"
      >
        <h2 className="hidden lg:block text-end text-purple-contact text-6xl pr-32">
          Cardápio
        </h2>
        <Image
          src="/images/logoCardapio.png"
          alt="Logomarca Borcelle"
          width={100}
          height={100}
          className="rounded-full aspect-auto absolute mt-16 md:w-32 lg:hidden shadow-md shadow-slate-950"
        />
      </div>
      <div className="my-14 md:mt-20 xl:mt-50 shadow-lg lg:relative">
        <p className="hidden lg:block w-full text-center font-light text-4xl text-purple-contact px-16 pl-[600px] pb-20">
          Saboreie a maravilha de um açaí perfeito e deixe sua alma se
          revitalizar.
        </p>
        <p className="text-center text-purple-contact text-xl md:text-3xl xl:text-3xl xl:mb-20 lg:hidden pb-5">
          Cardápio
        </p>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -0 }}
            whileInView={{ opacity: 1, y: -100 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <Image
              src="/images/cardapio2.png"
              alt="Imagem prato com açaí"
              width={750}
              height={750}
              className="absolute hidden lg:block left-[-150px] top-0"
              unoptimized
            />
          </motion.div>
          <div className="bg-beige-header">
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: -250 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Image
                src="/images/cardapio1.png"
                alt="Imagem prato com açaí"
                width={800}
                height={800}
                className="hidden absolute lg:block top-[1100px] left-[-250px]"
                unoptimized
              />
            </motion.div>
            <div className="w-full py-2 lg:flex lg:items-end lg:justify-end">
            <ItemsMenu />
            </div>
          </div>
        </div>
        <div className="bg-beige-header  flex items-center justify-center pb-10 xl:py-16">
          <button className="text-center font-light bg-purple-contact text-beige-header py-2 px-28  rounded-2xl sm:text-2xl shadow-md shadow-slate-950 hover:ring-2 hover:ring-purple-contact hover:bg-beige-header hover:text-purple-contact transition-all duration-300">
            Ver carrinho
          </button>
        </div>
      </div>
    </main>
    
  );
};
