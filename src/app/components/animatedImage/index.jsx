import Image from "next/image";

export const AnimatedImage = () => {
  return (
    <div
      className="w-full flex items-center justify-center mt-2"
    >
      <Image
        src="/images/heroSection.png"
        width={600}
        height={600}
        alt="Imagem de um pote de açaí"
        className="md:max-w-[600px] w-11/12 xl:max-w-[630px] aspect-auto mb-5 lg:absolute top-40 right-1 xl:right-20"
      />
    </div>
  );
};
