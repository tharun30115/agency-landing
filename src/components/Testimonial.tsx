import testimonial from "../assets/images/testimonial.png";
import quote from "../assets/images/quote.svg";
import arrowRight from "../assets/images/arrowRight.svg";

const Testimonial = () => {
  return (
    <div className="w-full lg:mt-[220px] mt-[100px] lg:px-[150px] px-5 flex flex-col gap-[70px]">
      <span className="text-white font-semibold text-[44px]">Testimonial</span>
      <div className="w-full rounded-[22px] bg-barshadow lg:h-[544px] lg:p-[40px] p-5 flex lg:flex-row flex-col lg:items-start items-center gap-[70px]">
        <img src={testimonial} alt="testimonial" className="w-[329px] h-[467px] rounded-[22px]" />
        <div className="w-full h-full flex flex-col justify-between lg:gap-0 gap-10">
          <img src={quote} alt="quote" className="w-[34px] h-[34px]" />
          <span className="text-white text-[22px] opacity-[0.75] lg:max-w-[60%] leading-[45px]">
            This tool has completely transformed how our team operates. We’re more organized, meet
            our deadlines consistently, and collaboration has never been smoother. It's a
            game-changer!
          </span>
          <div className="w-full flex items-center justify-between">
            <span className="flex flex-col">
              <span className="text-white font-semibold text-[28px]">John Doe</span>
              <span className="text-white font-medium text-lg opacity-[0.50]">
                Team Lead of xyz Company
              </span>
            </span>
            <img src={arrowRight} alt="arrowRight" className="w-[90px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
