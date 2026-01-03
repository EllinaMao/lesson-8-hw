import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default
    function Summary() {
    const { formData } = useForm();
    const navigate = useNavigate();
    useEffect(() => {
        if (!formData.userName || !formData.age || !formData.avatar || !formData.preferences) {
            alert ("sometnig went wrong, please fill the form again");
            navigate("/form-step-1");
        }
    }, [formData, navigate]);

    return (
        <div className="page-container">
            <h1>Summary of your profile</h1>
            <div className="summary-item">
                <strong>Username:</strong> {formData.userName}
            </div>
            <div className="summary-item">
                <strong>Age:</strong> {formData.age}
            </div>
            <div className="summary-item">
                <strong>Avatar:</strong>
                {formData.avatar ? (
                    <img src={formData.avatar} alt="User Avatar" />
                ) : (
                    <span>Something went wrong</span>
                )}
            </div>
            <div className="summary-item">
                <strong>Preferences:</strong>
                <ul>
                    <li>Difficulty: {formData.preferences?.difficulty || 'Not set'}</li>
                    <li>Notifications: {formData.preferences?.notifications ? 'Enabled' : 'Disabled'}</li>
                </ul>
            </div>
        </div>
    );
}   