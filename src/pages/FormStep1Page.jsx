import FormInput from "../components/UI/FormSteps/FormInput";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default
  function FormStep1() {
  const { formData, updateFormData } = useForm();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);

    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateUsername(formData.userName)) {
      newErrors.userName = "Username must be between 3 and 15 characters.";
    }

    if (!validateAge(formData.age)) {
      newErrors.age = "Age must be a number between 10 and 100.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/form-step-2");
  }

  const validateUsername = (value) => {
    return value.length >= 3 && value.length <= 15;
  }
  const validateAge = (value) => {
    const age = Number(value);
    return !isNaN(age) && age >= 10 && age <= 100;
  }


  return (
    <div className="page-container">
      <h1>Step 1: enter username and age</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelText="Username:"
          error={errors.userName}
          name="userName"
          type="text"
          onChange={handleChange}
          value={formData.userName || ""}

        />
        <FormInput
          labelText="Age:"
          error={errors.age}
          name="age"
          type="number"
          onChange={handleChange}
          value={formData.age || ""}
        />
        <div className="form-navigation">
          <button type="submit" className="btn btn-primary" disabled={!formData.userName || !formData.age}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}   