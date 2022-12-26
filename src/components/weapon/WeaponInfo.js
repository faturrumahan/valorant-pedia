import React, { useState, useEffect } from "react";
import WeaponSkinList from "./WeaponSkinList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const WeaponInfo = (props) => {
  const [selected, setSelected] = useState();
  const [level, setLevel] = useState(0);

  const selectedSkin = (a) => {
    setSelected(a);
    setLevel(0);
    if (a !== undefined) {
      setLevel(a.levels.length);
    }
  };

  useEffect(() => {
    setSelected();
    setLevel();
  }, [props.weapon]);

  return (
    <div>
      {props.weapon.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <div className="font-druk text-3xl lg:text-6xl text-white text-center lg:text-left">
              {selected ? selected.displayName : weapon.displayName}
            </div>
            <div className="mt-5 md:my-10 py-10">
              <div className="flex flex-wrap justify-center items-center h-1/2 lg:h-[330px]">
                <img
                  src={!selected ? weapon.displayIcon : selected.displayIcon}
                  alt={weapon.displayName}
                  className="px-3 lg:mr-7 -mt-10 w-fit lg:mt-0 lg:w-1/3 h-[150px] md:h-[300px] object-contain"
                ></img>
                <Tabs className="mt-4 md:mt-10 lg:mt-0 w-3/4 md:w-11/12 lg:w-fit text-white font-mark-medium">
                  <TabList>
                    <Tab>Status</Tab>
                    {weapon.weaponStats !== null &&
                    weapon.weaponStats.adsStats ? (
                      <Tab>Alt Fire</Tab>
                    ) : (
                      ""
                    )}
                    {level && selected.levels[level - 1].streamedVideo ? (
                      <Tab>Effect</Tab>
                    ) : (
                      ""
                    )}
                  </TabList>

                  <TabPanel>
                    <div className="text-white text-xs md:text-base font-druk lg:h-[330px]">
                      {weapon.shopData && weapon.weaponStats ? (
                        <div className="grid grid-cols-1 grid-flow-row place-items-center lg:place-items-start lg:grid-rows-5 lg:grid-flow-col gap-1 gap-x-5">
                          <p>Price : {weapon.shopData.cost}</p>
                          <p>Category : {weapon.shopData.category}</p>
                          <p>Fire Rate : {weapon.weaponStats.fireRate}</p>
                          <p>
                            Magazine Size : {weapon.weaponStats.magazineSize}
                          </p>
                          <p>
                            Run Speed : {weapon.weaponStats.runSpeedMultiplier}
                          </p>
                          <p>
                            Equip Speed : {weapon.weaponStats.equipTimeSeconds}
                          </p>
                          <p>
                            Reload Speed :{" "}
                            {weapon.weaponStats.reloadTimeSeconds}
                          </p>
                          <p>
                            1st Bullet Accuracy :{" "}
                            {weapon.weaponStats.firstBulletAccuracy}
                          </p>
                          <p>
                            Wall Penetration :{" "}
                            {weapon.weaponStats.wallPenetration.substr(
                              "EWallPenetrationDisplayType::".length
                            )}
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 grid-flow-row place-items-center lg:place-items-start lg:grid-rows-5 lg:grid-flow-col gap-1 gap-x-5">
                          <p>Price : -</p>
                          <p>Category : Melee</p>
                          <p>Fire Rate : -</p>
                          <p>Magazine Size : -</p>
                          <p>Run Speed : -</p>
                          <p>Equip Speed : -</p>
                          <p>Reload Speed : -</p>
                          <p>1st Bullet Accuracy : -</p>
                          <p>Wall Penetration : -</p>
                        </div>
                      )}
                    </div>
                  </TabPanel>

                  {weapon.weaponStats !== null &&
                  weapon.weaponStats.adsStats ? (
                    <TabPanel>
                      <div className="text-white text-xs md:text-base font-druk lg:h-[330px]">
                        <div className="grid grid-cols-1 grid-flow-row place-items-center lg:place-items-start lg:grid-rows-5 lg:grid-flow-col gap-1 gap-x-5">
                          <p>
                            Zoom : {weapon.weaponStats.adsStats.zoomMultiplier}
                          </p>
                          <p>
                            Fire Rate : {weapon.weaponStats.adsStats.fireRate}
                          </p>
                          <p>
                            Move Speed :{" "}
                            {weapon.weaponStats.adsStats.runSpeedMultiplier}
                          </p>
                          <p>
                            Burst Bullet :{" "}
                            {weapon.weaponStats.adsStats.burstCount}
                          </p>
                          <p>
                            1st Bullet Accuracy :{" "}
                            {weapon.weaponStats.adsStats.firstBulletAccuracy}
                          </p>
                        </div>
                      </div>
                    </TabPanel>
                  ) : (
                    ""
                  )}

                  {level ? (
                    <TabPanel>
                      {level && selected.levels[level - 1].streamedVideo ? (
                        <div className="lg:h-[300px]">
                          <video
                            controls
                            autoPlay
                            loop
                            className=" h-full object-cover"
                            src={selected.levels[level - 1].streamedVideo}
                            type="video/mp4"
                          ></video>
                        </div>
                      ) : (
                        <div className="hidden"></div>
                      )}
                    </TabPanel>
                  ) : (
                    ""
                  )}
                </Tabs>

                {/* <div className="flex justify-center w-1/2 lg:flex-nowrap">
                  {level && selected.levels[level - 1].streamedVideo ? (
                    <div className="lg:ml-5 lg:h-[300px]">
                      <video
                        controls
                        className=" h-full object-cover"
                        src={selected.levels[level - 1].streamedVideo}
                        type="video/mp4"
                      ></video>
                    </div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div> */}
              </div>
              {/* <div className="text-white font-druk mx-5">
                {weapon.shopData && weapon.weaponStats ? (
                  <div className="grid grid-rows-4 grid-flow-col gap-1">
                    <p>Price : {weapon.shopData.cost}</p>
                    <p>Category : {weapon.shopData.category}</p>
                    <p>Fire Rate : {weapon.weaponStats.fireRate}</p>
                    <p>Magazine Size : {weapon.weaponStats.magazineSize}</p>
                  </div>
                ) : (
                  <div className="grid grid-rows-4 grid-flow-col gap-1">
                    <p>Price : -</p>
                    <p>Category : Melee</p>
                    <p>Fire Rate : -</p>
                    <p>Magazine Size : -</p>
                  </div>
                )}
              </div> */}
            </div>
            <WeaponSkinList
              weaponSkins={weapon.skins}
              onSaveSelectedSkin={selectedSkin}
              className="lg:mt-10"
            />
          </div>
        );
      })}
    </div>
    // <div>
    //   {props.weapon.map((weapon) => {
    //     return (
    //       <div key={weapon.uuid}>
    //         <div className="font-druk text-6xl text-white">
    //           {selected ? selected.displayName : weapon.displayName}
    //         </div>

    //         <div className="flex my-5 mb-10">
    //           <div className="w-1/2 h-[400px] flex items-center justify-center">
    //             <img
    //               src={!selected ? weapon.displayIcon : selected.displayIcon}
    //               alt={weapon.displayName}
    //               className="mb-5 h-max-full object-contain"
    //             ></img>
    //           </div>
    //           <div className="text-white font-druk">
    //             {weapon.shopData && weapon.weaponStats ? (
    //               <div>
    //                 <p>Price : {weapon.shopData.cost}</p>
    //                 <p>Category : {weapon.shopData.category}</p>
    //                 <p>Fire Rate : {weapon.weaponStats.fireRate}</p>
    //                 <p>Magazine Size : {weapon.weaponStats.magazineSize}</p>
    //               </div>
    //             ) : (
    //               ""
    //             )}

    //             {level && selected.levels[level - 1].streamedVideo ? (
    //               <div className=" mt-3 h-[300px]">
    //                 <video
    //                   controls
    //                   className=" h-full object-cover"
    //                   src={selected.levels[level - 1].streamedVideo}
    //                   type="video/mp4"
    //                 ></video>
    //               </div>
    //             ) : (
    //               <div className="h-[300px]"></div>
    //             )}
    //           </div>
    //         </div>
    //         <WeaponSkinList
    //           weaponSkins={weapon.skins}
    //           onSaveSelectedSkin={selectedSkin}
    //           className="mt-10"
    //         />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default WeaponInfo;
