import Image from "next/image";

function CardSection() {
  const cards = [
    {
      title: "Everyday Fresh & Clean with Our Products",
      bg: "#F1E8D7",
      img: "/p6.png",
    },
    {
      title: "Make your Breakfast Healthy and Easy",
      bg: "#F3E8E7",
      img: "/p4.png",
    },
    {
      title: "Make your Breakfast Healthy and Easy",
      bg: "#E7EAF2",
      img: "/p5.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-6 md:px-12 py-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-3xl overflow-hidden min-h-[220px] md:min-h-[260px] p-4 flex flex-col md:flex-row items-center"
          style={{ backgroundColor: card.bg }}
        >
         
          <div className="relative z-10 w-full md:w-[55%] space-y-4 md:space-y-6">
            <h2 className="text-base md:text-[1.1rem] font-bold text-slate-800 leading-snug">
              {card.title}
            </h2>

            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md shadow-sm w-full sm:w-auto">
              Shop Now
            </button>
          </div>

          <div className="relative w-full h-40 md:w-[30%] md:h-full md:absolute md:right-0 md:bottom-0 flex items-end">
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardSection
