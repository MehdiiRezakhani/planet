import React from "react";
import { PlanetType } from "../types/planet.type";
import PlanetIcon from "./PlanetIcon";

const SideCard: React.FC<{ planet: PlanetType }> = ({ planet }) => {
  const date = new Date(planet?.created);
  return (
    <div className="bg-gray-600 px-6 py-3 rounded-md h-fit card-container duration-300 hover:scale-105 hover:shadow-card">
      <div className="text-yellow-400 flex justify-between">
        <p>{date.toLocaleTimeString()}</p>
        <p>
          {date.toLocaleDateString("en-GB", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <div className="size-12 shrink-0 rounded-2xl bg-gray-700 flex items-center justify-center text-yellow-400">
          <PlanetIcon className="size-6 duration-300 icon" />
        </div>
        <div className="flex-1">
          <h2 className="text-white text-xl">{planet?.name}</h2>
          <h3 className="text-gray-300 text-base">
            {planet?.filmNames.join(", ")}
          </h3>
        </div>
        <p className="text-gray-200 text-lg">{planet?.climate}</p>
      </div>
    </div>
  );
};

export default SideCard;
