// This page is incomplete

import development from "../../assets/Images/development.svg";
import React from "react";
function Invoices() {
  return (
    <div
      className="bg-white w-[1200px] max-w-[90%] rounded-xl min-h-[90vh]
        !p-6 !mx-auto relative"
    >
      <div className="absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2">
        <img
          src={development}
          alt="development"
          className="w-[400px] !mx-auto"
        />
        <h1 className="font-black text-[45px] text-center !mt-24">Coming Soon!</h1>
        <span className="text-center block !mt-2 text-[#5d5d5d] text-[21px]">
          We are working on something greate!
        </span>
      </div>
    </div>
  );
}

export default Invoices;
