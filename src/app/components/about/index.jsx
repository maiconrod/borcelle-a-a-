import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";
import { GrMailOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const CONTACT_LIST = [
  {
    id: 1,
    icon: <FiPhone />,
    info: "(99) 9999-9999",
  },
  {
    id: 2,
    icon: <TbBrandWhatsapp />,
    info: "(99) 9999-9999",
  },
  {
    id: 3,
    icon: <GrMailOption />,
    info: "email@email.com",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    info: "@instagram",
  },
];

export const About = () => {
  return (
    <div>
      <div className="bg-beige-header flex items-center justify-center py-10 lg:justify-end">
        <Image
          src="/images/logoCardapio.png"
          alt="Logomarca Borcelle"
          width={100}
          height={100}
          className="rounded-full aspect-auto absolute mt-16 md:w-32 lg:hidden"
        />
      </div>
      <div className="bg-purple-contact relative w-full -z-10 grid grid-cols-1">
        <div>
          <Image
            src="/images/logoSemFundo.png"
            alt="Logomarca Borcelle"
            width={200}
            height={200}
            className="rounded-full aspect-auto mt-16 mx-auto pb-7 md:w-72 lg:pb-24 lg:mt-4"
          />
        </div>
        <div>
          <p className="text-beige-header font-light text-center px-6 mb-20 xl:text-2xl">
            Revitalize seu paladar, alimente sua alma: Mergulho no mundo do Açaí
            Borcelle
          </p>
        </div>
        <div>
          <p
            id="contact"
            className="text-beige-header font-light text-center pb-5 xl:text-2xl"
          >
            Fale conosco:
          </p>
        </div>
        <div className="mb-10">
          {CONTACT_LIST.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-center gap-2"
            >
              <p className="text-beige-header font-light pl-2 xl:text-2xl xl:w-">
                {contact.icon}
              </p>
              <p className="text-white font-light w-44 pl-2 xl:text-2xl xl:w-64">
                {contact.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
