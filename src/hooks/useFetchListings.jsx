import { useEffect, useState } from 'react';

export const LISTINGS_DATA = "listingsData";
export const LISTINGS_TIMESTAMP = "listingsTimestamp";
const LISTINGS_EXPIRATION = 60 * 60 * 1000; // 1 hour

const useFetchListings = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const restoreFromCache = () => {
    const storedListings = localStorage.getItem(LISTINGS_DATA);
    const storedTimestamp = localStorage.getItem(LISTINGS_TIMESTAMP);

    const currentTime = new Date().getTime();
    const isDataValid = storedListings && storedTimestamp &&
      (currentTime - storedTimestamp < LISTINGS_EXPIRATION);

    if (isDataValid) {
      setListings(JSON.parse(storedListings));
      setLoading(false);
      return true;
    }

    return false;
  }

  const saveToCache = (data) => {
    const currentTime = new Date().getTime();
    setListings(data);
    localStorage.setItem(LISTINGS_DATA, JSON.stringify(data));
    localStorage.setItem(LISTINGS_TIMESTAMP, currentTime);
  }

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);

      if (restoreFromCache()) {
        return;
      }

      const headers = new Headers();
      headers.append(
        'Authorization',
        `Basic ${btoa(
          `${process.env.REACT_APP_SIMPLY_RETS_KEY}:${process.env.REACT_APP_SIMPLY_RETS_SECRET}`
        )}`
      );

      const requestOptions = {
        headers: headers,
      };

      const params = new URLSearchParams({
        limit: 50,
        lastId: 0,
      });

      try {
        const response = await fetch(
          `${process.env.REACT_APP_SIMPLY_RETS_URL}?${params.toString()}`,
          requestOptions,
        );
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const responseData = await response.json();

        saveToCache(responseData);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { listings, loading, error };
};

export default useFetchListings;