import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import map from "../../assets/map.png";
import maps from "../../assets/maps.png";

const MapSection = () => {
  return (
    <Fragment>
      <div className="h-fit lg:h-screen bg-dark text-white items-center justify-center">
        <div className="absolute w-full bg-dark">
          <img
            className="hidden lg:inline"
            src={map}
            alt="maps"
            width="100%"
          ></img>
          <img
            className="lg:hidden mt-[100px]"
            src={maps}
            alt="maps"
            width="100%"
          ></img>
        </div>
        <div className="container mx-auto relative py-5 px-3 lg:px-0">
          <div className="lg:flex lg:flex-wrap">
            <div className="lg:w-1/3 lg:mt-[30px] text-center lg:text-left">
              <section className="lg:mb-5 lg:text-[40px] font-druk">
                Maps
              </section>
              <p className="mb-2 font-sans">
                Each match of VALORANT takes place on a map. Maps feature a
                spawn area for each team, barriers that limit accessible areas
                during the Buy Phase, and objective sites where the spike is to
                be planted.
              </p>
              <p className="hidden lg:block mb-5 font-sans">
                Four maps were available at launch, and a six-month cycle is
                expected for the release of new maps. There are currently eight
                playable maps in VALORANT, with an additional one for practice
                and training new players.
              </p>
              <Link to="/maps">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>See All Maps</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MapSection;
