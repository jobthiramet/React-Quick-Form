export default function MovieList({
  movies,
  selectedMovie,
  onChange,
  error,
}) {
  return (
    <div className="form-field">
      <p className="form-label">
        เลือกหนังที่คุณชอบ
        <span className="required">*</span>
      </p>
      <div className="movie-list">
        {movies.map((movie) => {
          const value = movie.title;
          const isSelected = selectedMovie === value;

          return (
            <label
              key={value}
              className={`movie-item${isSelected ? " movie-item--selected" : ""}`}
            >
              <input
                type="radio"
                name="movie"
                value={value}
                checked={isSelected}
                onChange={onChange}
                className="movie-radio"
              />
              <div className="movie-info">
                <span className="movie-title">
                  {movie.title} ({movie.year})
                </span>
                <span className="movie-director">Director: {movie.director}</span>
              </div>
            </label>
          );
        })}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
