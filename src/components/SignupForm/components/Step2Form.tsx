import React from "react";
import { ChevronDown } from "lucide-react";
import { FormData, FormErrors, Country } from "../domain/entities";

interface Step2FormProps {
	formData: FormData;
	errors: FormErrors;
	countries: Country[];
	availableCities: string[];
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
}

const Step2Form: React.FC<Step2FormProps> = ({
	formData,
	errors,
	countries,
	availableCities,
	handleInputChange,
}) => {
	// Find the selected country object to get its phone code
	const selectedCountry = countries.find(
		(c) => c.name === formData.country,
	);
	const countryCode = selectedCountry ? selectedCountry.code : "";

	return (
		<div className="space-y-6">
			{/* Country & City */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* ... Country and City selects remain the same ... */}
				<div>
					<label className="mb-2 block text-sm font-semibold text-gray-700">
						Country *
					</label>
					<div className="relative">
						<select
							name="country"
							value={formData.country}
							onChange={handleInputChange}
							className={`w-full appearance-none rounded-lg border-2 px-4 py-3 transition-all duration-200 ${
								errors.country
									? "border-red-500 bg-red-50 focus:border-red-500"
									: "border-gray-200 focus:border-red-500 focus:bg-white"
							}`}
						>
							<option value="">Select your country</option>
							{countries.map((country) => (
								<option key={country.name} value={country.name}>
									{country.name}
								</option>
							))}
						</select>
						<ChevronDown
							className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
							size={20}
						/>
					</div>
					{errors.country && (
						<p className="mt-1 flex items-center text-sm text-red-500">
							<span className="mr-1 h-4 w-4">⚠</span>
							{errors.country}
						</p>
					)}
				</div>
				<div>
					<label className="mb-2 block text-sm font-semibold text-gray-700">
						City *
					</label>
					<div className="relative">
						<select
							name="city"
							value={formData.city}
							onChange={handleInputChange}
							disabled={!formData.country}
							className={`w-full appearance-none rounded-lg border-2 px-4 py-3 transition-all duration-200 ${
								errors.city
									? "border-red-500 bg-red-50 focus:border-red-500"
									: "border-gray-200 focus:border-red-500 focus:bg-white"
							} ${
								!formData.country
									? "cursor-not-allowed bg-gray-100 opacity-50"
									: ""
							}`}
						>
							<option value="">Select your city</option>
							{availableCities.map((city) => (
								<option key={city} value={city}>
									{city}
								</option>
							))}
						</select>
						<ChevronDown
							className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
							size={20}
						/>
					</div>
					{errors.city && (
						<p className="mt-1 flex items-center text-sm text-red-500">
							<span className="mr-1 h-4 w-4">⚠</span>
							{errors.city}
						</p>
					)}
				</div>
			</div>

			{/* Phone Number with Country Code */}
			<div>
				<label className="mb-2 block text-sm font-semibold text-gray-700">
					Phone Number *
				</label>
				<div
					className={`flex items-center overflow-hidden rounded-lg border-2 transition-all duration-200 ${
						errors.phoneNumber
							? "border-red-500 bg-red-50"
							: "border-gray-200 focus-within:border-red-500"
					} ${
						!formData.country
							? "cursor-not-allowed bg-gray-100 opacity-50"
							: "bg-white"
					}`}
				>
					<span className="whitespace-nowrap bg-gray-100 px-4 py-3 font-semibold text-gray-600">
						{countryCode || "+??"}
					</span>
					<input
						type="tel"
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={handleInputChange}
						placeholder="Enter your phone number"
						disabled={!formData.country}
						className="w-full border-none bg-transparent px-4 py-3 text-black placeholder-gray-500 focus:ring-0"
					/>
				</div>
				{errors.phoneNumber && (
					<p className="mt-1 flex items-center text-sm text-red-500">
						<span className="mr-1 h-4 w-4">⚠</span>
						{errors.phoneNumber}
					</p>
				)}
			</div>

			{/* Aadhar & PAN */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* ... Aadhar and PAN inputs remain the same ... */}
				<div>
					<label className="mb-2 block text-sm font-semibold text-gray-700">
						Aadhar Number *
					</label>
					<input
						type="text"
						name="aadharNo"
						value={formData.aadharNo}
						onChange={handleInputChange}
						placeholder="Enter your 12-digit Aadhar"
						className={`w-full rounded-lg border-2 px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 ${
							errors.aadharNo
								? "border-red-500 bg-red-50 focus:border-red-500"
								: "border-gray-200 focus:border-red-500 focus:bg-white"
						}`}
					/>
					{errors.aadharNo && (
						<p className="mt-1 flex items-center text-sm text-red-500">
							<span className="mr-1 h-4 w-4">⚠</span>
							{errors.aadharNo}
						</p>
					)}
				</div>
				<div>
					<label className="mb-2 block text-sm font-semibold text-gray-700">
						PAN Number *
					</label>
					<input
						type="text"
						name="panNo"
						value={formData.panNo}
						onChange={handleInputChange}
						placeholder="Enter your 10-digit PAN"
						className={`w-full rounded-lg border-2 px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 ${
							errors.panNo
								? "border-red-500 bg-red-50 focus:border-red-500"
								: "border-gray-200 focus:border-red-500 focus:bg-white"
						}`}
					/>
					{errors.panNo && (
						<p className="mt-1 flex items-center text-sm text-red-500">
							<span className="mr-1 h-4 w-4">⚠</span>
							{errors.panNo}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Step2Form;