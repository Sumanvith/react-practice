import React from "react";
import { useParams } from "react-router-dom";

const rockstarGames = {
  "GTA V":
    "Grand Theft Auto V (GTA V) is one of Rockstar Games' most acclaimed titles, known for its sprawling open world, engaging narrative, and dynamic gameplay. Set in the fictional city of Los Santos, players navigate a detailed urban landscape with diverse missions and activities, including driving, shooting, and exploring the vast environment. Its multiplayer component, GTA Online, offers endless opportunities for players to engage in heists, races, and various other activities with others worldwide.",

  "Red Dead Redemption 2":
    "Red Dead Redemption 2 stands out as a masterpiece of storytelling and open-world design. Set in the late 19th century, the game immerses players in the life of Arthur Morgan, an outlaw in a rapidly changing America. The attention to detail, realistic environments, and complex characters make it a compelling experience, with a rich narrative that explores themes of loyalty, morality, and the fading frontier.",

  "GTA IV":
    "Grand Theft Auto IV (GTA IV) is notable for its gritty realism and deep narrative. The game follows Niko Bellic, an Eastern European immigrant seeking the American Dream in Liberty City. Its engaging story, combined with a more grounded and realistic approach compared to its predecessors, offers a fresh take on the series. The game also introduced significant advancements in physics and AI for its time.",

  "Max Payne 3":
    "Max Payne 3, the final installment in the Max Payne series, is known for its intense action and innovative bullet-time mechanics. The game follows Max Payne, a former cop turned private security contractor, as he battles through a series of high-octane scenarios in Sao Paulo, Brazil. Its dark, gritty narrative and cinematic presentation make it a standout in the action genre.",

  "L.A. Noire":
    "L.A. Noire is a unique entry in Rockstar's lineup, focusing on detective work and crime-solving in a meticulously recreated 1940s Los Angeles. Players take on the role of LAPD detective Cole Phelps, investigating a series of crimes using interrogation, evidence gathering, and deduction. The game's motion-capture technology and attention to historical detail offer a distinctive experience compared to other Rockstar titles.",
};

const ObjectInfo = () => {
  const { rgId } = useParams();
  const description = rockstarGames[rgId];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Game Details</h2>
      <p>{description}</p>
    </div>
  );
};

export default ObjectInfo;
