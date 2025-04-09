import logo from "../assets/images/logo.svg";
import { menuItems } from "../data";

const Navbar = () => {
  return (
    <div className="w-full rounded-[110px] bg-navbar flex items-center justify-between h-[90px] px-[23px] backdrop-blur-[25px]">
      <div className="w-full">
        <img src={logo} alt="logo" className="w-[90px] ml-[20px]" />
      </div>
      <div className="w-full lg:flex hidden items-center justify-center gap-12">
        {menuItems.map((item, index) => (
          <a href="#" key={index} className="text-white ubuntu text-[19px] opacity-[0.85]">
            {item}
          </a>
        ))}
      </div>
      <div className="w-full flex items-center justify-end gap-5">
        <button className="w-[140px] h-[58px] lg:block hidden bg-fadedbtn rounded-full text-white text-lg font-semibold cursor-pointer">
          Sign Up
        </button>
        <button className="w-[140px] h-[58px] bg-primary rounded-full text-white text-lg font-semibold cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
