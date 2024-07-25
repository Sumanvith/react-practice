import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/todoSlice";

const TODO = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const handleAdd = () => {
    if (!todos.includes(input)) dispatch(addItem(input));
  };
  return (
    <div className="bg-[#EEE] h-screen w-screen">
      <div className="items-center justify-center p-4">
        <div className="flex items-center justify-center">
          <span>Add Event</span>
          <input
            className="ml-4 h-10 w-36 border border-black"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="ml-2 h-10 w-16 border border-black hover:bg-green-200">
            ADD
          </button>
        </div>
        <div className="m-5 flex flex-col items-center">
          {todos.map((todo, index) => (
            <p>{todo}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TODO;
