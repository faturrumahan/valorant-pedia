import React, { useState, useEffect } from "react";
import MapList from "../components/map/MapList";

const url = "https://valorant-api.com/v1";

const Map = () => {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url + "/maps")
      .then((response) => response.json())
      .then((data) => setValue(data.data));
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen max-h-fit bg-gradient-to-r from-[#fa4454] to-[#042e27]">
      <div className="container mx-auto pt-20">
        {isLoading && <p className="text-white text-xl">Loading</p>}
        {!isLoading && (
          <div className="p-5">
            <MapList maps={value} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
