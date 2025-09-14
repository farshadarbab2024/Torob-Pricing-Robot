import Signup from "../components/auth/step1/Signup";
import Step2 from "../components/auth/Step2";
import { useState } from "react";
import Login from "../components/auth/step1/Login";
import React from "react";
import { motion } from "framer-motion";

function Auth() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [mode, setMode] = useState<"login" | "signup">("signup");

  return (
    <div
      className="w-screen h-screen flex justify-center items-center lg:bg-[url('/images/login/login-background-image.png')] bg-no-repeat
    bg-cover bg-center"
    >
      {currentStep == 1 ? (
        // Step 1
        <div
          className="w-screen h-screen relative md:flex md:justify-between lg:h-[580px] 
          lg:w-[1000px] lg:max-w-[90vw] lg:max-h-[90vh] lg:shadow-[0px_0px_7px_rgba(0,0,0,0.25)] lg:rounded-2xl
          overflow-hidden"
        >
          <motion.div
            className="absolute bottom-0 right-0 w-full h-full "
            // style={{
            //   transform: mode=="signup" ? "translateY(0)" : "translateY(-100%)"
            // }}
            initial={{
              y: 0,
            }}
            animate={{
              y: mode == "signup" ? "0" : "-100%",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}

          >
            <Signup setMode={setMode} />
            <Login setMode={setMode} />
          </motion.div>
        </div>
      ) : (
        <Step2 />
      )}
    </div>
  );
}

export default Auth;
