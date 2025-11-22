function HeroSection() {
  return (
    <div className="bg-slate-100 flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-4 px-4 md:px-12 py-10 md:py-0 md:h-[700px]">
      
      <div className="w-full md:w-1/2 max-w-xl md:ml-12">
        <img src="/p3.png" className="mt-2 h-[60px] w-[60px] md:mt-4 md:h-[70px] md:w-[70px]"/>

        <h5 className="font-bold text-sm md:text-[1rem] mt-4 md:mt-24">
          <span className="text-red-600">100%</span> Organic Vegetables
        </h5>
        <h1 className="font-extrabold text-3xl md:text-[3rem] leading-tight mt-3">
          The best way to <br className="hidden md:block" /> stuff your wallet.
        </h1>
        <p className="text-slate-500 text-xs md:text-[0.8rem] font-semibold mt-3 md:mt-2 max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          veritatis repellat facere? lorem isom tutyo lre
        </p>

        <div className="mt-5 max-w-md">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <div className="relative flex-1">
              <img
                src="/send.png"
                alt="send"
                className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2"
              />

              <input
                placeholder="Your email address"
                className="w-full bg-white py-3 pl-10 px-4 rounded-full shadow-sm outline-none text-sm md:absolute"
              />
            </div>
            <button className="py-[0.7rem] px-6 rounded-full bg-green-500 text-white font-semibold w-full sm:w-auto md:relative md:-left-30">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <img src="/p2.png" className="hidden md:block mt-4 h-[70px] w-[70px]"/>

      <div className="w-full md:w-[600px] flex justify-center md:justify-end">
        <img src="/plant.png" alt="plant" className="w-64 h-64 md:w-[500px] md:h-[400px] md:mt-60 object-contain" />
      </div>

    </div>
  );
}

export default HeroSection;
