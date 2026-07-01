import { useState } from "react";
import SurveyHeader from "./components/SurveyHeader";
import SurveyForm from "./components/SurveyForm";
import SurveySummary from "./components/SurveySummary";
import { movies } from "./constants/movies";
import { validateSurveyForm } from "./utils/validation";
import "./App.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  selectedMovie: "",
  comment: "",
};

export default function App() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      const errorKey = field === "selectedMovie" ? "movie" : field;
      delete next[errorKey];
      return next;
    });
  };

  const handleMovieChange = (event) => {
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, selectedMovie: value }));
    setErrors((prev) => ({ ...prev, movie: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateSurveyForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const selectedMovie = movies.find((m) => m.title === formData.selectedMovie);

    setSubmittedData({
      name: formData.name,
      email: formData.email,
      movie: selectedMovie,
      comment: formData.comment,
    });
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  };

  const handleReset = () => {
    resetForm();
  };

  const handleRestart = () => {
    setSubmittedData(null);
    resetForm();
  };

  return (
    <div className={`survey-app${submittedData ? " survey-app--summary" : ""}`}>
      <SurveyHeader />
      <main className={`survey-body${submittedData ? " survey-body--summary" : ""}`}>
        {submittedData ? (
          <SurveySummary data={submittedData} onRestart={handleRestart} />
        ) : (
          <SurveyForm
            formData={formData}
            errors={errors}
            movies={movies}
            onFieldChange={handleFieldChange}
            onMovieChange={handleMovieChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}
