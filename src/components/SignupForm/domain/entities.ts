export interface FormData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    country: string;
    city: string;
    phoneNumber: string;
    countryCode: string;
    aadharNo: string;
    panNo: string;
   }
   export type FormErrors = Partial<Record<keyof FormData, string>>;
   export interface Country {
    code: string;
    name: string;
    cities: string[];
   }