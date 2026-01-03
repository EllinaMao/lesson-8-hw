import FormInput from "../components/UI/FormSteps/FormInput";
import { useForm } from "../components/UI/FormSteps/FormContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default
  function FormStep1() {
  const { data, setValues } = useForm();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateUsername(data.userName)) {
      newErrors.userName = "Username must be between 3 and 15 characters.";
    }

    if (!validateAge(data.age)) {
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
          value={data.userName || ""}
        />
        <FormInput
          labelText="Age:"
          error={errors.age}
          name="age"
          type="number"
          onChange={handleChange}
          value={data.age || ""}
        />
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
}   