import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../utils/nameSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Body = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="text-center">
      <div>
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
      <div className="flex justify-center">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-5 w-1/3 border border-gray-400 p-2 rounded-l-full"
          type="text"
          onBlur={() => setShowSuggestions(false)}
          onFocus={() => setShowSuggestions(true)}></input>
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        {showSuggestions && searchQuery && (
          <div className="absolute bg-white py-2 px-2 m-12 w-1/3 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
