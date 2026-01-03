import React, {createContext, useContext, useState} from "react";

const FormContext = createContext();

export function FormProvider({children}) {
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
        <FormContext.Provider value={{formData, updateFormData}}>
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => useContext(FormContext);