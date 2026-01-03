import {FormContext} from "../components/UI/FormSteps/FormContext";
import { useContext } from "react";

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }
    return context;
}