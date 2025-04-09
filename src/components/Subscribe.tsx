const Subscribe = () => {
  return (
    <div className="w-full lg:mt-[220px] mt-[100px] lg:px-[150px] px-5 flex flex-col items-center gap-[35px]">
      <span className="text-white font-semibold text-[55px]">So, what are you waiting for?</span>
      <p className="text-white text-[24px] opacity-[0.75]">
        Stay Updated with the Latest News, Tips, and Updates!
      </p>
      <div className="w-full lg:w-fit mx-auto flex lg:flex-row flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full lg:w-[412px] h-[80px] rounded-[13px] bg-barshadow outline-none border border-barshadow p-[10px] text-white placeholder:text-white/50 px-[20px]"
        />
        <button className="w-full lg:w-[247px] h-[80px] rounded-[13px] bg-primary font-medium text-[22px] text-white cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
