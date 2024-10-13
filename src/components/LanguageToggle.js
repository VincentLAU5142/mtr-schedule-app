function LanguageToggle({ language, setLanguage, translations }) {
  return (
    <button
      onClick={() => setLanguage((lang) => (lang === "EN" ? "TC" : "EN"))}
    >
      {translations[language].languageButton}
    </button>
  );
}

export default LanguageToggle;
