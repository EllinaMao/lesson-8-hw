import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../components/UI/FormSteps/FormContext"
import CustomUrlAvatar from "../components/AvatarSelection/CustomUrlAvatar";
import PickStandardAvatar from "../components/AvatarSelection/PickStandardAvatar";

const FormStep2Page = () => {
    const { formData, updateFormData } = useForm();
    const navigate = useNavigate();

    const handleAvatarChange = (avatarUrl) => {
        updateFormData("avatar", avatarUrl);
    };

    return (
        <div className="page-container">
            <h1>Step 2: Choose your avatar</h1>
            <PickStandardAvatar
                selectedAvatar={formData.avatar}
                onPick={handleAvatarChange}
            />
            <div className="separator">OR</div>
            <CustomUrlAvatar
                url={formData.avatar}
                onUrlChange={handleAvatarChange}
            />
            <div className="form-navigation">
                <button onClick={() => navigate("/form-step1")} className="btn btn-secondary">
                    Back
                </button>
                <button onClick={() => navigate("/form-step-3")} className="btn btn-primary"
                    disabled={!formData.avatar}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default FormStep2Page;