import { useEffect, useState } from "react";
import { REFRESH_TIME_ALARM } from "@/lib/constants";

/**
 * @param {() => Promise<any>} callBack
 * @param {any} initialState
 * @return {any}
 */
export const useRecursivePolling = (callBack, initialState) => {
  const [data, setData] = useState(initialState);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isMounted) return;

      try {
        setLoading(true);
        const data = await callBack();
        if (isMounted) {
          setData(data);
          setErr(null);
        }
      } catch (err) {
        if (isMounted) {
          setErr(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setTimeout(fetchData, REFRESH_TIME_ALARM);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error: err };
};
