import { useEffect, useState } from "react";
import { REFRESH_TIME_ALARM } from "@/lib/constants";

/**
 * @param {() => Promise<[data: any, err: any]>} callBack
 * @param {any} initialState
 * @param {(any) => any} dto
 * @return {{data: any, error: any, loading: boolean}}
 */
export const useRecursivePolling = (callBack, initialState, dto = x => x) => {
  const [data, setData] = useState(initialState);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isMounted) return;

      try {
        setLoading(true);
        const [data, err] = await callBack();
        if (isMounted) {
          if (err) {
            setErr(err);
            setData(initialState);
          } else {
            const dtoToData = dto(data);
            setData(dtoToData);
            setErr(null);
          }
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
