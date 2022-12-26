import React from "react";
import { Link } from "react-router-dom";

import weapons from "../../assets/weapons.png";

const WeaponSection = () => {
  return (
    <div className="h-fit lg:h-screen bg-red-500 text-white py-5 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <div className="hidden lg:inline mr-[200px]">
            <img
              src={weapons}
              // src="https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png"
              alt="agents"
              width={800}
            ></img>
          </div>
          <div className="lg:w-1/3 text-center lg:text-right px-3 lg:px-0">
            <section className="lg:mb-5 lg:text-[40px] font-druk ">
              Weapons
            </section>
            <p className="mb-2 font-sans ">
              Weapons are used by agents to damage and kill/destroy enemy agents
              and their utility. Weapons are separated by two categories,
              Sidearms and Primary weapons. Sidearms consists of pistols, whilst
              primaries include SMGs, shotguns, rifles, sniper rifles, and
              machine guns.
            </p>
            <p className="hidden lg:block mb-5 font-sans ">
              Guns have limited amounts of ammo but come with reserve magazines.
              Bullets deal different amounts of damage depending on the gun, the
              body part they hit, and the distance between the shooter and the
              target. Each gun deals a set amount of damage to an enemy's body
              at its shortest range and then uses multipliers on this value to
              calculate the damage it will deal to the head and legs at close
              range and all body parts at further ranges. Resulting numbers with
              a decimal value are rounded down to the next integer value.
              Enemies hit by bullets will also be tagged with a 72.5% slow for a
              brief period. Shotgun pellets will only apply a 30% slow if they
              tag an enemy beyond 10 meters.
            </p>
            <Link to="/weapons">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>See All Weapons</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponSection;
