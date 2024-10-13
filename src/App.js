import React, { useState } from "react";
import "./App.css";
import { Lines } from "./data/lines";
import { translations } from "./data/translations";
import LanguageToggle from "./components/LanguageToggle";
import LineButtons from "./components/LineButtons";
import ScheduleDisplay from "./components/ScheduleDisplay";
import useMTRData from "./hooks/useMTRData";

function App() {
  const [activeLine, setActiveLine] = useState(null);
  const [language, setLanguage] = useState("EN");
  const { scheduleData, error, isLoading, fetchMTRData } = useMTRData(language);

  const handleLineClick = (lineKey) => {
    setActiveLine(lineKey);
    fetchMTRData(lineKey);
  };

  return (
    <div className="App">
      <LanguageToggle
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />
      <h1>{translations[language].title}</h1>
      <LineButtons
        Lines={Lines}
        activeLine={activeLine}
        handleLineClick={handleLineClick}
        language={language}
      />
      {isLoading && <p>{translations[language].loading}</p>}
      {error && <p className="error">{translations[language].error}</p>}
      {!isLoading && !error && activeLine && (
        <ScheduleDisplay
          activeLine={activeLine}
          scheduleData={scheduleData}
          Lines={Lines}
          translations={translations}
          language={language}
        />
      )}
    </div>
  );
}

export default App;
