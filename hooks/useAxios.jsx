import { useState, useEffect } from "react";

import axios from "axios";

const useAxios = (url, limit) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

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

  useEffect(() => {
    fetchData();
  }, [url, limit]);

  return { isLoading, isError, data };
};

export default useAxios;
