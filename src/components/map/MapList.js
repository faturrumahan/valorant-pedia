import React from "react";

const MapList = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4">
      {props.maps.map((map) => {
        return (
          <div
            key={map.uuid}
            className="min-h-full bg-cover bg-center rounded text-white"
            style={{ backgroundImage: `url(${map.splash})` }}
          >
            <div className="h-full bg-gradient-to-r from-slate-800 to-transparent rounded">
              <div className="p-3 h-full grid grid-cols-2 grid-flow-row">
                <div className="row-span-full my-auto">
                  <div className="font-druk text-base lg:text-xl">
                    {map.displayName}
                  </div>
                  <div className="text-sm">{map.coordinates}</div>
                </div>
                <div className="row-span-full my-auto">
                  {map.displayName.toLowerCase() === "the range" ? (
                    ""
                  ) : (
                    <img
                      src={map.displayIcon}
                      alt={map.displayName}
                      width="300px"
                    ></img>
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

export default MapList;
