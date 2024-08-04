import React from "react";
import { Link } from "react-router-dom";

const Params = () => {
  const rockstarGames = [
    "GTA V",
    "Red Dead Redemption 2",
    "GTA IV",
    "Max Payne 3",
    "L.A. Noire",
  ];

  return (
    <div className="flex flex-wrap">
      {rockstarGames.map((rockstarGame) => (
        <Link key={rockstarGame} to={`/rockstarGames/${rockstarGame}`}>
          <button className="p-4 m-4 border border-black">
            {rockstarGame}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Params;
