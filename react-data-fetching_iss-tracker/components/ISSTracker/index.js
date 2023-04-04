import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
//const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetcher = async (URL) => {
  const res = await fetch(URL);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const { data, error, isLoading } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>Coords not available</div>;
  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
