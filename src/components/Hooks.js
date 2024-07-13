import React, { useRef, useState } from "react";

const Hooks = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-black  p-4">
        <div>
          <button
            className="bg-green-100 p-2 m-4"
            onClick={() => {
              x = x + 1;
              console.log("x=" + x);
            }}>
            Increase
          </button>
          <span className="p-2 m-4">Let regularIncreament = {x} </span>
        </div>
        <div>
          <button
            className="bg-green-100 p-2 m-4"
            onClick={() => {
              setY(y + 1);
            }}>
            Increase
          </button>
          <span className="p-2 m-4">Let UseState = {y}</span>
        </div>
        <div>
          <button
            className="bg-green-100 p-2 m-4"
            onClick={() => {
              z.current = z.current + 1;
            }}>
            Increase
          </button>
          <span className="p-2 m-4">Let UseRef = {z.current}</span>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
