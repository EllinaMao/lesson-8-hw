import { useState, useEffect } from 'react';
import FormInput from '../UI/FormSteps/FormInput';

const CustomUrlAvatar = ({ url, onUrlChange }) => {
    const [inputUrl, setInputUrl] = useState(url || '');
    const [isValidUrl, setIsValidUrl] = useState(true);
    const [isImageBroken, setIsImageBroken] = useState(false);


    useEffect(() => {
        setInputUrl(url || '');
        validateUrl(inputUrl);
        setIsImageBroken(false);
    }, [inputUrl]);

    const validateUrl = (url) => {
        if (!url) {
            setIsValidUrl(true);
            return;
        }

        try {
            new URL(url);
            setIsValidUrl(true);
        } catch (_) {
            setIsValidUrl(false);
        }
    };

    const handleChange = (e) => {
        const newUrl = e.target.value;
        setInputUrl(newUrl);
        validateUrl(newUrl);
        onUrlChange(newUrl);
    };

    const handleImageError = () => {
        setIsImageBroken(true);
        setIsValidUrl(false);
    };

    return (
        <div className="custom-url-avatar">
            <FormInput
                label="Custom Avatar URL"
                type="text"
                value={inputUrl}
                onChange={handleChange}
                placeholder="Enter image URL"
                isValid={isValidUrl && !isImageBroken}
                errorMessage={isImageBroken ? "Image not found" : "Please enter a valid URL."}
            />
            {isValidUrl && inputUrl && (
                <div className="avatar-preview">
                    <img src={inputUrl} alt="Custom Avatar Preview" onError={handleImageError}
                        className="avatar-image" />
                </div>
            )}
        </div>
    );
}

export default CustomUrlAvatar;