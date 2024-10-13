import StationCard from "./StationCard";

function ScheduleDisplay({
  activeLine,
  scheduleData,
  Lines,
  translations,
  language,
}) {
  const renderStations = (stations) => {
    return stations.map((station, index) => (
      <StationCard
        key={index}
        color={Lines[activeLine].color}
        stationName={station.station.name}
        stationInfo={station.info}
        language={language}
      />
    ));
  };

  return (
    <div className="schedule-container">
      <div className="direction">
        <h2>{translations[language].upLine}</h2>
        <div className="stations-grid">{renderStations(scheduleData.up)}</div>
      </div>
      <div className="direction">
        <h2>{translations[language].downLine}</h2>
        <div className="stations-grid">{renderStations(scheduleData.down)}</div>
      </div>
    </div>
  );
}

export default ScheduleDisplay;
