const translations = {
  EN: {
    nextTrain: "Next train:",
    platform: "Platform:",
  },
  TC: {
    nextTrain: "下班列車：",
    platform: "開出月台：",
  },
};

function StationCard({ color, stationName, stationInfo, language }) {
  return (
    <div className="station" style={{ backgroundColor: color }}>
      <h3 className="station-name">{stationName[language]}</h3>
      <div className="station-info">
        <div className="station-next">
          {translations[language].nextTrain}
          {stationInfo.time
            ? stationInfo.time.split(" ")[1].substring(0, 5)
            : "N/A"}
        </div>
        <div className="station-platform">
          {translations[language].platform}
          {stationInfo.plat || "N/A"}
        </div>
      </div>
    </div>
  );
}

export default StationCard;
