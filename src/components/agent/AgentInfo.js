import React, { useState, useEffect } from "react";
import AgentSkill from "./AgentSkill";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../../node_modules/react-lazy-load-image-component/src/effects/blur.css";

const AgentInfo = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [skill, setSkill] = useState("");

  const selectedSkill = (e) => {
    if (e !== skill) {
      setSkill(e);
      setIsSelected(true);
    } else {
      setSkill("");
      setIsSelected(false);
    }
  };

  useEffect(() => {
    setSkill("");
    setIsSelected(false);
  }, [props.agent]);

  return (
    <div className="flex w-full justify-center items-center">
      {props.agent.map((agent) => {
        return (
          <div key={agent.uuid}>
            <div className="lg:flex h-full items-center">
              {/* <img
                src={agent.fullPortrait}
                alt={agent.displayName}
                width="800px"
              ></img> */}
              <div className="mt-5 min-h-[400px] md:h-[800px] lg:w-[800px]">
                <LazyLoadImage
                  alt={agent.displayName}
                  effect="blur"
                  src={agent.fullPortrait}
                  // width="800px"
                />
              </div>
              <div className="text-center lg:text-left w-full lg:w-[400px]">
                <p className="font-druk text-4xl lg:text-6xl inline">
                  {agent.displayName}
                </p>
                {/* <LazyLoadImage
                  alt={agent.role.displayName}
                  effect="blur"
                  src={agent.role.displayIcon}
                  className="h-10 mx-5"
                /> */}
                <AgentSkill
                  role={agent.role}
                  skills={agent.abilities}
                  onSaveSelectedSkill={selectedSkill}
                  selected={skill.displayName}
                />
                <div className="lg:w-3/4 font-sans text-center lg:text-justify md:min-h-[90px] lg:min-h-[400px] px-2 lg:px-0">
                  {/* <section className="mb-1">{agent.description}</section> */}
                  {!isSelected ? (
                    <div>
                      <p>{agent.description}</p>
                      {/* <div className="grid grid-rows-3 grid-flow-col gap-1">
                        <div className="row-span-3">
                          <LazyLoadImage
                            alt={agent.role.displayName}
                            effect="blur"
                            src={agent.role.displayIcon}
                          />
                        </div>
                        <div className="col-span-2 font-druk">
                          {agent.role.displayName}
                        </div>
                        <div className="row-span-2 col-span-2 text-justify">
                          {agent.role.description}
                        </div>
                      </div> */}
                    </div>
                  ) : (
                    <div>
                      <section className="font-druk">
                        {skill.displayName}
                      </section>
                      {skill.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AgentInfo;
