import React from "react";
import { Link } from "react-router-dom";

import agents from "../../assets/agents.png";

const AgentSection = () => {
  return (
    <div className="h-fit lg:h-screen bg-dark text-white py-5">
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-wrap items-center justify-center">
          {/* <div className="grid grid-cols-3"> */}
          <div className="lg:w-1/3 lg:-mt-[100px] text-center lg:text-left px-3 lg:px-0">
            {/* <div className="col-span-2"> */}
            <section className="lg:mb-5 lg:text-[40px] font-druk">
              Agents
            </section>
            <p className="mb-2 font-sans">
              Agents are the playable characters in VALORANT, representing an
              agent of the VALORANT Protocol. Each agent serves as a different
              class with four abilities and are mostly unlocked by progressing
              through their Contract.
            </p>
            <p className="hidden lg:block mb-5 font-sans">
              Five agents are immediately available for players to use;
              Brimstone icon.png Brimstone, Jett icon.png Jett, Phoenix icon.png
              Phoenix, Sage icon.png Sage, and Sova icon.png Sova. All other
              agents must be unlocked by progressing through each of their agent
              contracts and completing Tier 5. New players can also unlock two
              additional agents by progressing through the Play to Unlock
              contract and earning free agent unlocks at Tiers 5 and 10, which
              will immediately grant XP for the selected agent to reach Tier 5
              of their contract and recruit the agent.
            </p>
            <Link to="/agents">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>See All Agents</span>
              </button>
            </Link>
          </div>
          <div className="hidden lg:inline lg:ml-[200px]">
            <img src={agents} alt="agents" width={800}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSection;
