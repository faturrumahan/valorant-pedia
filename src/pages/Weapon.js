import React, { useEffect, useState, Fragment } from "react";
import WeaponInfo from "../components/weapon/WeaponInfo";
import WeaponList from "../components/weapon/WeaponList";

const url = "https://valorant-api.com/v1";

const Weapon = () => {
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState("classic");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url + "/weapons")
      .then((response) => response.json())
      .then((data) => setValue(data.data));
    setIsLoading(false);
  }, []);

  const filteredItem = value.filter((a) => {
    return a.displayName.toLowerCase().match(selected);
  });

  const selectedWeapon = (a) => {
    setSelected(a.toLowerCase());
  };

  return (
    <Fragment>
      <div className="w-screen min-h-fit md:min-h-screen max-h-fit bg-gradient-to-r from-[#fa4454] to-[#042e27]">
        <div className="container mx-auto pt-20">
          {isLoading && <p className="text-white text-xl">Loading</p>}
          {!isLoading && (
            <div className="md:mt-10">
              <WeaponInfo weapon={filteredItem} />
              <WeaponList
                weapons={value}
                onSaveSelectedWeapon={selectedWeapon}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Weapon;
