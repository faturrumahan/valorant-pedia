import React from "react";

import bg from "../../assets/bg-agent.jpg";

const AgentBg = () => {
  return (
    <img
      className="absolute h-screen w-screen object-cover hidden lg:inline"
      src={bg}
      alt="agent-select-bg"
    ></img>
  );
};

export default AgentBg;
