import logo from "../assets/images/logo.svg";
import { footerLinks } from "../data";
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[70px] mt-[150px] lg:px-[95px] px-5 pb-[45px]">
      <div className="w-full flex lg:flex-row flex-col items-start justify-between lg:gap-0 gap-16">
        <div className="flex flex-col gap-[30px]">
          <img src={logo} alt="logo" className="w-[100px]" />
          <span className="text-white text-[22px] max-w-[500px]">
            Work together seamlessly with real-time updates and communication.
          </span>
          <a href="#" className="text-white text-[20px] opacity-[0.75]">
            Team Conditional & Policy
          </a>
        </div>
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-[30px]">
            <span className="text-white font-medium ubuntu text-[22px]">{link.title}</span>
            <div className="flex flex-col gap-5">
              {link.items.map((item) => (
                <a href={item.link} className="text-white text-[20px] ubuntu opacity-[0.75]">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-[50px] items-center justify-center">
          <button className="w-[140px] h-[58px] bg-fadedbtn rounded-full text-white text-lg font-semibold cursor-pointer">
            Sign Up
          </button>
          <button className="w-[140px] h-[58px] bg-primary rounded-full text-white text-lg font-semibold cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[90%] mx-auto h-[1px] bg-white/35" />

        <div className="text-center text-white/50 text-[20px] ubuntu mt-[45px]">
          ©solve. all right reserve
        </div>
      </div>
    </div>
  );
};

export default Footer;
