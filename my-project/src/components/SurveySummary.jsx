export default function SurveySummary({ data, onRestart }) {
  const { name, email, movie, comment } = data;

  return (
    <div className="survey-summary">
      <div className="success-card">
        <div className="success-card__header">
          <span className="success-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="currentColor" />
              <path
                d="M8 12.5l2.5 2.5L16 9"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="success-card__message">ส่งแบบสำรวจสำเร็จ!</p>
        </div>

        <ul className="success-card__list">
          <li className="success-row">
            <span className="success-row__label">ชื่อ:</span>
            <span className="success-row__value">{name}</span>
          </li>
          <li className="success-row">
            <span className="success-row__label">อีเมล:</span>
            <span className="success-row__value">{email}</span>
          </li>
          <li className="success-row">
            <span className="success-row__label">หนังที่เลือก:</span>
            <span className="success-row__value success-row__value--movie">
              {movie.title}
            </span>
          </li>
        </ul>

        {comment && (
          <>
            <hr className="success-card__divider" />
            <div className="success-comment">
              <p className="success-comment__label">ความคิดเห็น:</p>
              <p className="success-comment__value">{comment}</p>
            </div>
          </>
        )}
      </div>

      <button type="button" className="btn btn--restart" onClick={onRestart}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="btn__icon">
          <path
            d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 4h4v4M8 20H4v-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        ทำแบบสำรวจใหม่
      </button>
    </div>
  );
}
