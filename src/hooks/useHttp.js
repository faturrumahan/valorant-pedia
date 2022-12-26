import { useState, useEffect } from "react";

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchApi = () => {
    fetch("https://valorant-api.com/v1/" + url)
      .then((response) => response.json())
      .then((data) => setData(data.data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  });

  return { isLoading, data };
};

export default useHttp;
