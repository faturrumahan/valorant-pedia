import React, { useState, Fragment, useEffect } from "react";
import AgentBg from "../components/agent/AgentBg";
import AgentInfo from "../components/agent/AgentInfo";
import AgentsList from "../components/agent/AgentsList";

const url = "https://valorant-api.com/v1";

const Agent = () => {
  const [value, setValue] = useState([]);
  const [filtered, setFiltered] = useState("jett");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url + "/agents?isPlayableCharacter=true")
      .then((response) => response.json())
      .then((data) => setValue(data.data));
    setIsLoading(false);
  }, []);

  // const filterHandler = (e) => {
  //   setFiltered(e.target.value.toLowerCase());
  // };

  const filteredItem = value.filter((a) => {
    return a.displayName.toLowerCase().match(filtered);
  });

  const selectedAgent = (a) => {
    setFiltered(a.toLowerCase());
    // console.log(filtered);
  };

  const content = (
    <Fragment>
      <AgentInfo agent={filteredItem} />
      <AgentsList agents={value} onSaveSelectedAgent={selectedAgent} />
    </Fragment>
  );

  return (
    <Fragment>
      {/* <div className="flex w-screen h-screen justify-center items-center">
        <input type="text" onChange={filterHandler}></input>
        {isLoading && <div>loading</div>}
        {!isLoading && (
          <ul>
            {filteredItem.map((agent) => {
              return (
                <li>
                  <div key={agent.uuid}>
                    <p>{agent.displayName}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div> */}
      <AgentBg />
      <div className="relative h-fit lg:h-screen bg-black bg-opacity-80">
        <div className="container mx-auto py-5 text-white">
          {/* <input type="text" onChange={filterHandler}></input> */}
          {isLoading && <div>loading</div>}
          {!isLoading && content}
        </div>
      </div>
      {/* {filteredItem.map((agent) => {
        return <div key={agent.uuid}></div>;
      })} */}
    </Fragment>
  );
};

export default Agent;
