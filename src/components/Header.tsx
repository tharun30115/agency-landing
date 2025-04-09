import Navbar from "./Navbar";
import bg from "../assets/images/bg.png";
import scroll from "../assets/images/scroll.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import { cards } from "../data";

const Header = () => {
  return (
    <div
      className="w-full bg-center bg-cover flex flex-col items-center justify-between lg:px-[54px] px-5 pt-[30px] pb-[60px]"
      style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-3 lg:mt-48 mt-5">
        <span className="text-white text-[22px] tracking-[5px]">Welcome to Solve.</span>
        <span className="text-white text-[58px] font-semibold max-w-[70%] text-center leading-[75px]">
          Mange Your Tasks Efficiently
        </span>
        <p className="text-white lg:block hidden text-lg max-w-[50%] text-center">
          Solve Your Project Management Problems And Gain Satisfaction
        </p>
        <img src={scroll} alt="scroll" className="w-[50px] lg:mt-0 mt-24" />
        <img src={arrowDown} alt="arrowDown" className="w-[15px] lg:block hidden" />
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-[50px] mt-10 px-[100px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[447px] h-[337px] bg-navbar rounded-[22px] border border-fadedbox pt-[27px] px-[50px] pb-[40px] flex flex-col justify-between">
            <img src={card.icon} alt={card.title} className="w-[50px] h-[50px]" />
            <span className="text-white text-[22px] font-medium">{card.title}</span>
            {card.description && (
              <p className="text-white text-lg opacity-[0.75]">{card.description}</p>
            )}
            <button
              className={`w-full h-[50px] rounded-[9px] font-semibold text-lg cursor-pointer ${
                index === 1
                  ? "bg-primary text-white"
                  : "lg:bg-transparent bg-primary lg:text-primary text-white"
              }`}>
              Visit Solve Website
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
