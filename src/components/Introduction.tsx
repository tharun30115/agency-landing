import light2 from "../assets/images/light2.svg";
import intro from "../assets/images/intro.png";
import { useState } from "react";
import { initialTabs } from "../data";

const Introduction = () => {
  const [tabs, setTabs] = useState(initialTabs);
  const handleTabClick = (index: number) => {
    const updatedTabs = tabs.map((tab, idx) => ({
      ...tab,
      active: idx === index,
    }));
    setTabs(updatedTabs);
  };
  return (
    <div className="w-full lg:mt-[220px] mt-[100px] flex flex-col gap-[70px] lg:px-[150px] px-5 relative">
      <img src={light2} alt="light2" className="absolute bottom-[-250px] left-[-150px] w-[718px]" />
      <span className="text-white font-semibold text-[44px] lg:max-w-[30%]">
        Built for endless uses, Across all teams.
      </span>
      <div className="w-full flex lg:flex-row flex-col items-start justify-between">
        <div className="w-full lg:w-1/2">
          <img src={intro} alt="intro" className="lg:w-[584px] w-full lg:h-[573px]" />
        </div>
        <div className="w-full lg:w-[70%] flex flex-col gap-[95px] lg:mt-0 mt-10">
          <div className="w-full lg:max-w-[90%] flex lg:flex-row flex-col items-center justify-between gap-[38px]">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`w-full flex items-center justify-center cursor-pointer border rounded-[50px] h-[60px] ${
                  tab.active ? "bg-transparent border-primary" : "bg-fadedbtn border-fadedbtn"
                }`}>
                <span
                  className={`text-lg font-medium ${tab.active ? "text-primary" : "text-white"}`}>
                  {tab.title}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col gap-[50px]">
            <span className="text-white text-[44px] font-medium">Company main platform</span>
            <p className="text-white text-[21px] opacity-[0.75] lg:max-w-[70%]">
              Simplify your workflow with our intuitive task management tool, designed to help you
              stay on top of your daily responsibilities and long-term goals.
            </p>
            <p className="text-white text-[21px] opacity-[0.75] lg:max-w-[67%]">
              Our platform grows with your business, offering salable solutions that adapts to your
              changing needs. Customize your workflow to match your team's unique process, so you
              can work smarter and not harder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
