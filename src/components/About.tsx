import arrowLink from "../assets/images/arrowLink.svg";
import light1 from "../assets/images/light1.svg";
import { bars, stats } from "../data";

const About = () => {
  const getBarRoundedClass = (index: number) => {
    if (index === 0) return "lg:rounded-br-none";
    if (index === 1) return "lg:rounded-b-none";
    return "lg:rounded-bl-none";
  };

  return (
    <div className="w-full lg:mt-[90px] mt-[100px] flex flex-col gap-[70px] lg:px-[150px] px-5 relative">
      <img src={light1} alt="light1" className="absolute top-[150px] right-0 w-[525px]" />
      <div className="w-full flex items-center justify-between gap-[86px]">
        <span className="text-white font-semibold text-[44px]">What do we offer ?</span>
        <img src={arrowLink} alt="arrowLink" className="w-[80px]" />
      </div>
      <div className="w-full flex lg:flex-row flex-col items-start justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex lg:w-[597px] w-full items-end rounded-[22px] bg-navbar h-[550px]">
            {bars.map((bar, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center gap-[20px]">
                <div className="w-full flex flex-col items-center justify-center">
                  <span className="text-secondary text-[24px] font-semibold">
                    {bar.percentage}%
                  </span>
                  <span className="text-white text-[24px]">{bar.title}</span>
                </div>
                <div
                  className={`relative lg:w-[199px] w-[100px] rounded-[22px] bg-barshadow z-[5] border border-white/10 ${getBarRoundedClass(
                    index
                  )}`}
                  style={{ height: bar.shadowheight }}>
                  <div
                    className={`absolute bottom-0 lg:w-[199px] w-[100px] rounded-[22px] z-[100] ${getBarRoundedClass(
                      index
                    )}`}
                    style={{ height: bar.barheight, background: bar.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[70%] flex flex-col gap-[25px] lg:mt-0 mt-20">
          {stats.slice(0, 1).map((item, index) => (
            <div key={index} className="w-full flex items-center gap-4">
              <span className="text-white text-[58px]">{item.value}</span>
              <span className="text-white text-[20px] opacity-[0.75] max-w-[10%]">
                {item.label}
              </span>
            </div>
          ))}
          <div className="w-full lg:max-w-[70%] flex items-center justify-between">
            {stats.slice(1).map((item, index) => (
              <div key={index} className="w-full flex items-center gap-4">
                <span className="text-white text-[58px]">{item.value}</span>
                <span className="text-white text-[20px] opacity-[0.75] max-w-[10%]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-white text-[22px] opacity-[0.75] lg:max-w-[65%] leading-[45px]">
            Simplify your workflow with our intuitive task management tool, designed to help you
            stay on top of your daily responsibilities and long-term goals.
          </p>
          <span className="text-white text-[22px] mt-5">
            Streamline Your Workflow, Achieve More.
          </span>
          <button className="w-[211px] h-[67px] rounded-[13px] bg-primary text-white text-lg font-medium cursor-pointer mt-[21px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
