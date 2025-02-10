import Navbar from "../navbar/Navbar";
import { useState } from "react";
export default function Plans() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="relative flex items-center justify-center bg-[#f0f0f0]">
      <Navbar />
      <div className="absolute w-[80%] h-[580px] top-[100px] ">
        <h1 className="mt-6 ml-10 font-bold font-montserrat text-black text-4xl">TinyURL Plans</h1>
        <h2 className="mt-4 ml-10 font-medium font-montserrat text-black text-2xl">Find a Plan that meets your needs</h2>
        <h3 className="mt-4 ml-10 font-semibold font-montserrat text-black">
          <span className="text-gray-500">Billing cycle: </span>
          <div className="flex items-center space-x-3 text-lg font-medium">
            <span className={`${isAnnual ? " text-gray-400" : "text-black"}`}>Monthly</span>
            <button
              className={`relative w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition-all duration-300 ${isAnnual ? "bg-blue-600" : ""
                }`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${isAnnual ? "translate-x-6" : ""
                  }`}
              ></div>
            </button>
            <span className={`${isAnnual ? "text-black" : "text-gray-400"}`}>Annual</span>
          </div>
        </h3>
      </div>

    </div>
  );
}
