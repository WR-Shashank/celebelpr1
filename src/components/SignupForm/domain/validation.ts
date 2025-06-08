import { FormData } from "./entities";
export const validateField = (
 name: keyof FormData,
 value: string,
): string | undefined => {
 switch (name) {
 case "firstName":
 case "lastName":
 if (!value.trim())
 return `${
 name === "firstName" ? "First" : "Last"
 } name is required`;
 if (value.length < 2)
 return `${
 name === "firstName" ? "First" : "Last"
 } name must be at least 2 characters`;
 return undefined;
 case "username":
 if (!value.trim()) return "Username is required";
 if (value.length < 3) return "Username must be at least 3 characters";
 if (!/^[a-zA-Z0-9_]+$/.test(value))
 return "Username can only contain letters, numbers, and underscores";
 return undefined;
 case "email":
 if (!value.trim()) return "Email is required";
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
 return "Please enter a valid email address";
 return undefined;
 case "password":
 if (!value) return "Password is required";
 if (value.length < 6) return "Password must be at least 6 characters";
 if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
 return "Password must contain uppercase, lowercase, and number";
 return undefined;
 case "country":
 if (!value) return "Please select a country";
 return undefined;
 case "city":
 if (!value) return "Please select a city";
 return undefined;
 case "phoneNumber":
 if (!value.trim()) return "Phone number is required";
 if (!/^\d{10}$/.test(value.replace(/\s/g, "")))
 return "Please enter a valid 10-digit phone number";
 return undefined;
 case "aadharNo":
 if (!value.trim()) return "Aadhar number is required";
 if (!/^\d{12}$/.test(value.replace(/\s/g, "")))
 return "Aadhar number must be 12 digits";
 return undefined;
 case "panNo":
 if (!value.trim()) return "PAN number is required";
 if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value.toUpperCase()))
 return "Please enter a valid PAN number (e.g., ABCDE1234F)";
 return undefined;
 default:
 return undefined;
 }
};