"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Cardápio",
  },
  {
    label: "Contato",
  },
];

export const Header = () => {
  return (
    <header className="bg-beige-header h-[200px] lg:h-[330px] md:pr-4">
      <motion.div
        className="py-1 px-1 w-full sm:flex sm:justify-between sm:px-10 lg:relative"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full sm:w-[150px] md:w-[200px] lg:w-[350px] mb-4">
          <Link href="/">
            <Image
              width={150}
              height={150}
              src="/images/logoSemFundoRoxa.png"
              alt="Logo Borcelle Açaí"
              className="mx-auto aspect-auto md:w-[200px] lg:w-[350px] xl:ml-28"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-20 sm:gap-15 underline md:pt-24 md:text-xl lg:pt-10 lg:h-[200px] xl:pr-36 xl:pt-1">
          {NAV_ITEMS.map((item, index) => (
            <div key={index}>
              <button className="text-purple-contact hover:scale-125 transition-all duration-300 ">
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};
