import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/UI/FormSteps/FormInput";

export default
    function FormStep3() {
    const { formData, updateFormData } = useForm();
    const navigate = useNavigate();

    const preferences = formData.preferences || { difficulty: 'easy' };

    const handlePreferenceChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        const newPreferences = { ...preferences, [name]: val };
        updateFormData("preferences", newPreferences);
    };


    return (
        <div className="page-container">
            <h1>Step 3: Set your preferences</h1>
            <div className="settings-group">
                <div className="form-group">
                <label htmlFor="difficulty">Difficulty Level:</label>
                <select
                    id="difficulty"
                    name="difficulty"
                    value={preferences.difficulty||'easy'}
                    onChange={handlePreferenceChange}
                    className="input-field"
                >
                    <option value="easy">Easy</option>  
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                </div>
            </div>
            <div className="form-group checkbox-group">
                <FormInput
                    labelText="Enable Notifications:"
                    type="checkbox"
                    name="notifications"
                    checked={preferences.notifications || false}
                    onChange={handlePreferenceChange}
                />
            </div>
            {/*remember - to add buttons in another component, they are freaking same*/}
            <div className="form-navigation">
                <button onClick={() => navigate("/form-step-2")} className="btn btn-secondary">
                    Back
                </button>
                <button onClick={() => navigate("/summary")} className="btn btn-primary">
                    Review
                </button>
            </div>
        </div>
    );
}

