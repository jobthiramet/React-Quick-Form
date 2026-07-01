import TextField from "./TextField";
import TextArea from "./TextArea";
import MovieList from "./MovieList";

export default function SurveyForm({
  formData,
  errors,
  movies,
  onFieldChange,
  onMovieChange,
  onSubmit,
  onReset,
}) {
  return (
    <form
      className="survey-form"
      onSubmit={onSubmit}
      noValidate
    >
      <TextField
        id="name"
        label="ชื่อ"
        value={formData.name}
        onChange={(e) => onFieldChange("name", e.target.value)}
        placeholder="กรุณากรอกชื่อของคุณ"
        required
        error={errors.name}
      />

      <TextField
        id="email"
        label="อีเมล"
        type="email"
        value={formData.email}
        onChange={(e) => onFieldChange("email", e.target.value)}
        placeholder="example@email.com"
        required
        error={errors.email}
      />

      <MovieList
        movies={movies}
        selectedMovie={formData.selectedMovie}
        onChange={onMovieChange}
        error={errors.movie}
      />

      <TextArea
        id="comment"
        label="ความคิดเห็นเกี่ยวกับหนัง"
        value={formData.comment}
        onChange={(e) => onFieldChange("comment", e.target.value)}
        placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
      />

      <div className="form-actions">
        <button type="button" className="btn btn--reset" onClick={onReset}>
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
          รีเซ็ต
        </button>

        <button type="submit" className="btn btn--submit">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="btn__icon">
            <path
              d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          ส่งแบบสำรวจ
        </button>
      </div>
    </form>
  );
}
