import React, { useState, useEffect } from "react";

const url = "https://valorant-api.com/v1";

const Buddies = () => {
  const [value, setValue] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(url + "/buddies")
      .then((response) => response.json())
      .then((data) => setValue(data.data));
    setIsLoading(false);
  }, []);

  const filterHandler = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredItem = value.filter((buddy) => {
    return buddy.displayName.toLowerCase().match(filter);
  });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="min-h-screen max-h-fit bg-gradient-to-r from-[#fa4454] to-[#042e27]">
      <button
        onClick={scrollToTop}
        className={`${
          visible ? "inline" : "hidden"
        } fixed z-55 bottom-0 right-0 m-5`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
          />
        </svg>
      </button>
      {/* <input
        type="text"
        className="mt-20 border-2"
        onChange={filterHandler}
      ></input> */}
      <form className="pt-20 mx-5 lg:container lg:mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm rounded-lg border bg-gray-800 border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Buddies..."
            onChange={filterHandler}
          ></input>
        </div>
      </form>
      {isLoading && <p className="pt-16">loading</p>}
      {!isLoading && (
        <div className="container mx-auto pt-10 flex flex-wrap justify-center">
          {filteredItem.map((buddy) => {
            return (
              <div key={buddy.uuid}>
                <div className="w-[150px] md:w-[176px] h-fit lg:w-[291px] lg:h-30 max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700 m-2 lg:flex items-center">
                  <img
                    className="p-8 rounded-t-lg w-[120px] lg:w-[150px] mx-auto"
                    src={buddy.displayIcon}
                    alt={buddy.displayName}
                  ></img>
                  <div className="px-2 pb-3 lg:pb-0 lg:px-5">
                    <p className="text-xs lg:text-xl font-semibold tracking-tight text-white text-center">
                      {buddy.displayName}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Buddies;
