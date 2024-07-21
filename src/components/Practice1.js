import React from "react";
import { Link } from "react-router-dom";

const Practice1 = () => {
  return (
    <div>
      <div className="items-center justify-center flex flex-col bg-[#EEE] h-screen w-screen">
        <h1 className="text-7xl my-5">STICKY SLIDER NAV</h1>
        <h3 className="text-3xl">Sliding content with sticky tab nav</h3>

        <div className="flex flex-row bottom-0 w-full shadow-lg bg-white z-10 absolute">
          <Link className="justify-center items-center flex flex-1 hover:text-white hover:bg-blue-500 p-4">
            Home
          </Link>
          <Link className="justify-center items-center flex flex-1 hover:text-white hover:bg-blue-500 p-4">
            About
          </Link>
          <Link className="justify-center items-center flex flex-1 hover:text-white hover:bg-blue-500 p-4">
            Services
          </Link>
          <Link className="justify-center items-center flex flex-1 hover:text-white hover:bg-blue-500 p-4">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Practice1;
