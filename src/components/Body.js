import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../utils/nameSlice";

const Body = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const names = useSelector((state) => state.name);

  const handleInput = () => {
    if (names.includes(input)) {
      setMessage("Name already exists. Choose another name.");
    } else {
      dispatch(addName(input));
      setMessage("Text/Name submited");
    }
    setInput("");
  };

  return (
    <div className="text-center">
      <span>Enter text </span>
      <input
        className="p-2 m-4 border border-black h-10 w-24"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="border border-black w-10" onClick={handleInput}>
        Add
      </button>
      {message && <h1 className="text-red-500">{message}</h1>}
    </div>
  );
};

export default Body;
