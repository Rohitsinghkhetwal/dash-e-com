function HeroSection() {
  return (
    <div className="bg-slate-100 flex items-center h-[700px] justify-between  ">
      
      <div className="ml-12">
        <img src="/p3.png" className="mt-4 h-[70px] w-[70px] "/>

        <h5 className="font-bold text-[1rem] mt-6">
          <span className="text-red-600">100%</span> Organic Vegetables
        </h5>
        <h1 className="font-extrabold text-[3rem] leading-tight mt-3">
          The best way to <br /> stuff your wallet.
        </h1>
        <p className="text-slate-500 text-[0.8rem] font-semibold mt-2">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          veritatis repellat facere? <br /> lorem isom tutyo lre{" "}
        </p>

        <div className="flex flex-row mt-4">
          <img
            src="/send.png"
            alt="send"
            className="w-4 h-4 z-20 relative top-4 left-4"
          />

          <input
            placeholder="Your email address"
            className="bg-white py-3 px-12 rounded-full absolute"
          />
          <button className="py-3 px-4 rounded-full bg-green-500 text-white relative left-50">
            Subscribe
          </button>
        </div>
      </div>
      <img src="/p2.png" className="mt-4 h-[70px] w-[70px]"/>

      <div className="w-[600px] h-full flex justify-end">
        <img src="/plant.png" alt="plant" className="w-[500px] h-[400px] mt-60" />
      </div>

    </div>
  );
}

export default HeroSection;
