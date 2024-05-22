

export const ItemsCart = ({item}) => {
  
  return (
    <div
      className=""
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3}}
    >
      <div className="flex items-center justify-between">
        <p className=" text-purple-contact font-light max-w-[70%] ">
          {item.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-2 mt-2">
          <p className="lg:mt-6 max-h-24 text-purple-contact font-semibold text-lg">
            {item.price}
          </p>
          <div className="flex items-center justify-center">
            <button className="text-beige-header text-sm font-light bg-purple-contact/80 py-[3px] px-3 rounded-xl shadow-sm shadow-slate-950 hover:ring-2 hover:ring-purple-800 hover:bg-purple-contact transition-all duration-300">
              Remover
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-purple-contact border mt-6" />
    </div>
  );
};
