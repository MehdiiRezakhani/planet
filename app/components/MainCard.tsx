import React from "react";
import { PlanetType } from "../types/planet.type";
import PlanetIcon from "./PlanetIcon";

const MainCard: React.FC<{ planet: PlanetType }> = ({ planet }) => {
  const date = new Date(planet?.created);
  return (
    <div className="bg-gray-800 px-6 py-3 rounded-md card-container duration-300 hover:scale-105 hover:shadow-card">
      <p className="text-yellow-400">
        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </p>
      <div className="mt-4 flex gap-2 items-center">
        <div className="flex font-bold items-center justify-center size-10 bg-gray-400 text-lg rounded-full text-white">
          B
        </div>
        <div className="flex-1">
          <h2 className="text-white text-xl">{planet?.name}</h2>
          <h3 className="text-gray-400 text-lg">{planet?.climate}</h3>
        </div>

        <PlanetIcon className="size-8 text-yellow-400 duration-300 icon" />
      </div>
      <div className="text-white text-lg mt-4">
        <p>{planet?.filmNames.join(", ")}</p>
      </div>
    </div>
  );
};

export default MainCard;
