import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const respone = await axios.get(url);
      setData(respone.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};
export default useFetch;
