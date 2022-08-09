import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    setLoading(true);
    fetch(url, { signal: abortCont.signal })
      .then((response) => response.json())
      .then(setData)
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
