// import React, { useState, useEffect } from "react";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Agent from "./pages/Agent";
import Buddies from "./pages/Buddies";
import Card from "./pages/Card";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Weapon from "./pages/Weapon";

// const url = "https://valorant-api.com/v1";

function App() {
  // const [value, setValue] = useState([]);
  // const [filtered, setFiltered] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch(url + "/agents?isPlayableCharacter=true")
  //     .then((response) => response.json())
  //     .then((data) => setValue(data.data));
  //   setIsLoading(false);
  // }, []);

  // const filterHandler = (e) => {
  //   setFiltered(e.target.value.toLowerCase());
  // };

  // const filteredItem = value.filter((a) => {
  //   return a.displayName.toLowerCase().match(filtered);
  // });

  return (
    // <Fragment>
    //   <Navbar />
    //   <h1>Valorant Agents</h1>
    //   <input type="text" onChange={filterHandler}></input>
    //   {isLoading && <p>Content Is Loading...</p>}
    //   {!isLoading && (
    //     <ul>
    //       {filteredItem.map((agent) => {
    //         return (
    //           <li>
    //             <div key={agent.uuid}>
    //               <p>{agent.displayName}</p>
    //             </div>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   )}
    // </Fragment>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/agents" exact>
          <Agent />
        </Route>
        <Route path="/buddies" exact>
          <Buddies />
        </Route>
        <Route path="/cards" exact>
          <Card />
        </Route>
        <Route path="/weapons" exact>
          <Weapon />
        </Route>
        <Route path="/maps" exact>
          <Map />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
