import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        console.log(e, "에러발생!!!!!!");
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, loading];
}
