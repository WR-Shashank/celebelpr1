import { useState, useMemo, useCallback } from "react";
import { FormData, FormErrors } from "../domain/entities";
import { validateField } from "../domain/validation";
import { countries } from "../data/countries";
const initialFormData: FormData = {
 firstName: "",
 lastName: "",
 username: "",
 email: "",
 password: "",
 country: "",
 city: "",
 phoneNumber: "",
 countryCode: "+91",
 aadharNo: "",
 panNo: "",
};
const step1Fields: (keyof FormData)[] = [
 "firstName",
 "lastName",
 "username",
 "email",
 "password",
];
const step2Fields: (keyof FormData)[] = [
 "country",
 "city",
 "phoneNumber",
 "aadharNo",
 "panNo",
];
export const useSignupForm = () => {
 const [currentStep, setCurrentStep] = useState(1);
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState<FormData>(initialFormData);
 const [errors, setErrors] = useState<FormErrors>({});
 const [submitted, setSubmitted] = useState(false);
 const validateStep = useCallback((step: number, data: FormData) => {
 const fieldsToValidate = step === 1 ? step1Fields : step2Fields;
 const newErrors: FormErrors = {};
 let isValid = true;
 fieldsToValidate.forEach((field) => {
 const error = validateField(field, data[field]);
 if (error) {
 newErrors[field] = error;
 isValid = false;
 }
 });
 setErrors((prev) => ({ ...prev, ...newErrors }));
 return isValid;
 }, []);
 const handleInputChange = useCallback(
 (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
 const { name, value } = e.target;
 const fieldName = name as keyof FormData;
 const newFormData = { ...formData };
 if (fieldName === "country") {
 const selectedCountry = countries.find((c) => c.name === value);
 newFormData.country = value;
 newFormData.countryCode = selectedCountry ? selectedCountry.code : "";
 newFormData.city = ""; // Reset city on country change
 } else {
 newFormData[fieldName] = value;
 }
 setFormData(newFormData);
 // Validate field on change
 const error = validateField(fieldName, value);
 setErrors((prev) => ({ ...prev, [fieldName]: error }));
 },
 [formData],
 );
 const handleNext = useCallback(() => {
 if (validateStep(1, formData)) {
 setCurrentStep(2);
 }
 }, [formData, validateStep]);
 const handleSubmit = useCallback(() => {
 if (validateStep(1, formData) && validateStep(2, formData)) {
 setSubmitted(true);
 }
 }, [formData, validateStep]);
 const handleReset = useCallback(() => {
 setSubmitted(false);
 setCurrentStep(1);
 setFormData(initialFormData);
 setErrors({});
 }, []);
 const availableCities = useMemo(() => {
 const selectedCountry = countries.find((c) => c.name === formData.country);
 return selectedCountry ? selectedCountry.cities : [];
 }, [formData.country]);
 const isStep1Valid = useMemo(
 () => step1Fields.every((field) => !validateField(field, formData[field])),
 [formData],
 );
 const isStep2Valid = useMemo(
 () => step2Fields.every((field) => !validateField(field, formData[field])),
 [formData],
 );
 return {
 currentStep,
 setCurrentStep,
 showPassword,
 setShowPassword,
 formData,
 errors,
 submitted,
 handleInputChange,
 handleNext,
 handleSubmit,
 handleReset,
 countries,
 availableCities,
 isStep1Valid,
 isStep2Valid,
 };
};