import React, { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
    const [formData, setFormData] = useState({
        userName: "",
        age: "",
        avatar: "",
        preferences: {}
    });

    const updateFormData = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
}
