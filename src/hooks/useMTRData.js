import { useState } from "react";
import { Lines } from "../data/lines";
import { translations } from "../data/translations";

const API_URL = "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php";

function useMTRData(language) {
  const [scheduleData, setScheduleData] = useState({ up: [], down: [] });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMTRData(lineKey) {
    setIsLoading(true);
    setError(null);
    try {
      const lineArr = Lines[lineKey].sta;
      const upData = [];
      const downData = [];

      for (const station of lineArr) {
        const res = await fetch(
          `${API_URL}?line=${lineKey}&sta=${station.code}`
        );
        const result = await res.json();
        const info = result.data[`${lineKey}-${station.code}`];

        if (info && info["UP"] && info["UP"][0]) {
          upData.push({ station, info: info["UP"][0] });
        }
        if (info && info["DOWN"] && info["DOWN"][0]) {
          downData.push({ station, info: info["DOWN"][0] });
        }
      }

      setScheduleData({ up: upData, down: downData });
    } catch (err) {
      console.error("Error fetching MTR data:", err);
      setError(translations[language].error);
    } finally {
      setIsLoading(false);
    }
  }

  return { scheduleData, error, isLoading, fetchMTRData };
}

export default useMTRData;
