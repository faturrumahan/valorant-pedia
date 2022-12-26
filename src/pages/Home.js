import { React, Fragment } from "react";

import AgentSection from "../components/home/AgentSection";
import IntroSection from "../components/home/IntroSection";
import MapSection from "../components/home/MapSection";
import VidBg from "../components/home/VidBg";
import WeaponSection from "../components/home/WeaponSection";

const Home = () => {
  return (
    <Fragment>
      <VidBg />
      <div className="relative">
        <IntroSection />
        <AgentSection />
        <WeaponSection />
        <MapSection />
      </div>
    </Fragment>
  );
};

export default Home;
