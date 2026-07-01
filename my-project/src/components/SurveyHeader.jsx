export default function SurveyHeader() {
  return (
    <header className="survey-header">
      <svg
        className="survey-header__icon"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="4" x2="6" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="4" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="2" y1="9" x2="6" y2="9" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1.5" />
        <line x1="2" y1="15" x2="6" y2="15" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <h1 className="survey-header__title">Movie Survey</h1>
    </header>
  );
}
