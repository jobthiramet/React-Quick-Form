export default function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className={`form-textarea${error ? " form-input--error" : ""}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
