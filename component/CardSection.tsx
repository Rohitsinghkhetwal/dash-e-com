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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-3xl overflow-hidden min-h-[260px] p-4 flex items-center"
          style={{ backgroundColor: card.bg }}
        >
         
          <div className="relative z-10 w-[55%] space-y-6">
            <h2 className="text-[1.1rem] font-bold text-slate-800 leading-snug">
              {card.title}
            </h2>

            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-md shadow-sm">
              Shop Now
            </button>
          </div>

          <div className="absolute right-0 bottom-0 w-[30%] h-full flex items-end">
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
