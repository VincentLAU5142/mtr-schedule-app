function LineButtons({ Lines, activeLine, handleLineClick, language }) {
  return (
    <div id="btn-container">
      {Object.entries(Lines).map(([key, line]) => (
        <button
          key={key}
          className="line-button"
          style={{
            color: activeLine === key ? "#ffffff" : line.color,
            borderColor: line.color,
            backgroundColor: activeLine === key ? line.color : "#ffffff",
          }}
          onClick={() => handleLineClick(key)}
        >
          {line.text[language]}
        </button>
      ))}
    </div>
  );
}

export default LineButtons;
