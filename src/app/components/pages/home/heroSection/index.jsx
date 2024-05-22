"use client";

import Image from "next/image";
import { TbBrandWhatsapp } from "react-icons/tb";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { motion } from "framer-motion";
import { AnimatedImage } from "@/app/components/animatedImage";

const SOCIAL_ITEMS = [
  {
    id: 1,
    icon: <TbBrandWhatsapp />,
    href: "/",
  },
  {
    id: 2,
    icon: <TbBrandFacebook />,
    href: "/",
  },
  {
    id: 3,
    icon: <TbBrandInstagram />,
    href: "/",
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full h-[580px] md:h-[920px] md:pb-4 lg:h-[530px] xl:h-[650px] lg:pb-10 overflow-auto bg-bg-image bg-cover bg-center bg-no-repeat ">
      <div className="lg:flex w-full justify-around lg:gap-60">
        <div className="lg:pt-24 lg:w-[500px]">
          <div className="w-full flex items-center justify-center lg:items-start lg:justify-start text-xl pt-10 lg:pt-1">
            <motion.span
              className="text-white font-light lg:hidden"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.7 }}
            >
              Já pediu o seu açaí hoje??
            </motion.span>
            <motion.span
              className="w-[700px] text-white font-extralight hidden lg:block text-4xl text-center leading-loose pl-20"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.7 }}
            >
              Revitalize seu paladar, alimente sua alma: mergulhe no mundo do
              Açaí da Inspiração.
            </motion.span>
          </div>
          <motion.div
            className="flex items-center justify-center mt-7 lg:w-[580px]"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
          >
            <button className="text-purple-contact bg-beige-header px-10 md:px-20 py-1 md:py-2 md:text-2xl font-light rounded-2xl w-max mt-4 hover:ring-2 hover:ring-beige-header hover:bg-purple-contact hover:text-beige-header transition-all duration-300">
              Fazer pedido
            </button>
          </motion.div>
        </div>
        <div>
          <div className="hidden lg:block">
            <AnimatedImage />
          </div>
          <motion.div
            className="w-full flex items-center justify-center mt-2 lg:hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/heroSection.png"
              width={600}
              height={600}
              alt="Imagem de um pote de açaí"
              className="md:max-w-[600px] w-11/12 xl:max-w-[630px] aspect-auto mb-5 lg:absolute top-40 right-1 xl:right-20 lg:top"
              unoptimized
            />
          </motion.div>
          <div className="hidden lg:block pr-16 w-[600px] pt-[400px] xl:flex xl:items-center xl:justify-center">
            <span className="text-white font-extralight hidden lg:block text-4xl xl:text-start leading-loose xl:w-full xl:mt-8">
              Já pediu o seu açaí hoje??
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end px-5 text-beige-header text-2xl md:text-4xl gap-1 lg:absolute lg:right-2 xl:mt-10">
        {SOCIAL_ITEMS.map((item, index) => (
          <motion.button
            key={item.id}
            className="hover:text-purple-contact hover:scale-125 transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <a href={item.href}>{item.icon}</a>
          </motion.button>
        ))}
      </div>
    </section>
  );
};
