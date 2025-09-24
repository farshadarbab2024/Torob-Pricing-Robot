import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import sideImage from "../../assets/Images/side-background.png";
import useDevice from "../../hooks/Device";
function LeftSide() {
  const { isMobile } = useDevice();
  const navigator = useNavigate();
  return (
    <div
      className={`w-full md:w-[45%] md:h-screen lg:h-full !px-5 relative
      md:bg-cover md:bg-center rounded-2xl 
      `}
      style={isMobile ? {} : { backgroundImage: `url(${sideImage})` }}
    >
      <div
        className="md:!mt-12 md:h-[110px] w-full
        flex flex-col justify-between relative !font-medium
        absolute top-1/3 right-1/2 translate-x-1/2
        -translate-y-1/2"
      >
        <div className="hidden md:block">
          <TypeAnimation
            sequence={[
              "Hire a Full-Time Robot",
              2000,
              "Make Your Prices Smart!",
              2000,
              "Maximum Sell on Torob!",
              2000,
            ]}
            wrapper="span"
            speed={35}
            style={{
              fontSize: "23px",
              display: "block",
              textAlign: "center",
              color: "white",
            }}
            repeat={Infinity}
          />
        </div>
        <button
          onClick={() => navigator("/login")}
          className="text-white border-white rounded-full !mx-auto
            block border-[2px] transition duration-300 !w-[180px] !h-[53px]
            cursor-pointer text-xl font-medium hover:bg-main-red-hover !mt-8 
            md:!mt-6"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LeftSide;
