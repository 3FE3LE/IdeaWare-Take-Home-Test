import { useState, useEffect } from "react";

import axios from "axios";

const useAxios = (url,limit,time) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const millisecondsTime = 1000*60*time;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);

      setIsLoading(false);

      setData(response.data);
    } catch (error) {
      setIsLoading(false);

      setIsError(true);

      console.log(error);
    }
  };

  setInterval(() => {
    fetchData
    console.log(millisecondsTime)
  }, millisecondsTime);

  useEffect(() => {
    fetchData();
  }, [limit,url,time]);

  return { isLoading, isError, data };
};

export default useAxios;