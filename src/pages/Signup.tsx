import React, { useState } from "react";
import Step1 from "../feature/signup/Step1";
import Step2 from "../feature/signup/Step2";
import LeftSide from "../feature/signup/LeftSide";
import backgroundImage from "../assets/Images/background-image.png";
function Signup() {
  const [step, setStep] = useState<number>(1); //ntch change it to 1
  return (
    <div
      className="w-screen h-screen overflow-hidden lg:bg-cover lg:bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="bg-main-red w-full h-full lg:w-[850px] lg:h-[550px] lg:max-w-[90vw] lg:max-h-[90vh]
        relative lg:absolute lg:top-1/2 lg:right-1/2 
        lg:translate-x-1/2 lg:-translate-y-1/2 flex flex-col 
        md:flex-row md:justify-between lg:rounded-xl"
      >
        <LeftSide />
        {/* steps frame */}
        <div className="w-screen h-full md:w-[55%] relative overflow-hidden
        lg:bg-white lg:rounded-tr-xl lg:rounded-br-xl"
        >
          {/* steps train */}
          <div
            className="absolute left-0 bottom-0 flex justify-start items-end transition duration-300
            h-full lg:w-[200%] lg:bg-white"
            style={{
              transform: `translateX(-${(step - 1) * 50}%)`,
            }}
          >
            <Step1 setStep={setStep} />
            <Step2 setStep={setStep} step={step} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
