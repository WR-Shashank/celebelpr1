import React from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useSignupForm } from "./hooks/useSignupForm";
import Step1Form from "./components/Step1Form";
import Step2Form from "./components/Step2Form";
import SuccessScreen from "./components/SuccessScreen";

const SignupForm = () => {
	const {
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
	} = useSignupForm();

	if (submitted) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 p-4">
				<SuccessScreen formData={formData} onReset={handleReset} />
			</div>
		);
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 p-4">
			<div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
				{/* Header and Progress Steps */}
				<div className="mb-8">
					<h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
						Create Your Account
					</h1>
					<p className="mb-6 text-center text-gray-500">
						Follow the steps to complete your registration.
					</p>
					<div className="mx-auto flex w-full max-w-md items-center">
						{/* Step 1 */}
						<div className="flex flex-1 items-center">
							<div
								className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
									currentStep >= 1
										? "bg-red-500 text-white"
										: "bg-gray-200 text-gray-500"
								}`}
							>
								1
							</div>
							<p
								className={`ml-4 text-sm font-semibold ${
									currentStep >= 1 ? "text-red-500" : "text-gray-500"
								}`}
							>
								Account Setup
							</p>
						</div>
						{/* Connector */}
						<div
							className={`h-1 flex-1 rounded-full ${
								currentStep > 1 ? "bg-red-500" : "bg-gray-200"
							}`}
						></div>
						{/* Step 2 */}
						<div className="flex flex-1 items-center justify-end">
							<p
								className={`mr-4 text-sm font-semibold ${
									currentStep >= 2 ? "text-red-500" : "text-gray-500"
								}`}
							>
								Personal Details
							</p>
							<div
								className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
									currentStep >= 2
										? "bg-red-500 text-white"
										: "bg-gray-200 text-gray-500"
								}`}
							>
								2
							</div>
						</div>
					</div>
				</div>

				{currentStep === 1 && (
					<>
						<Step1Form
							formData={formData}
							errors={errors}
							showPassword={showPassword}
							setShowPassword={setShowPassword}
							handleInputChange={handleInputChange}
						/>
						<div className="flex justify-end pt-4">
							<button
								onClick={handleNext}
								disabled={!isStep1Valid}
								className={`flex items-center rounded-lg px-8 py-3 font-semibold transition-all duration-200 ${
									isStep1Valid
										? "transform bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:-translate-y-0.5 hover:from-red-600 hover:to-red-700"
										: "cursor-not-allowed bg-gray-300 text-gray-500"
								}`}
							>
								Continue <ArrowRight className="ml-2" size={16} />
							</button>
						</div>
					</>
				)}

				{currentStep === 2 && (
					<>
						<Step2Form
							formData={formData}
							errors={errors}
							countries={countries}
							availableCities={availableCities}
							handleInputChange={handleInputChange}
						/>
						<div className="flex justify-between pt-4">
							<button
								onClick={() => setCurrentStep(1)}
								className="flex items-center rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-300"
							>
								<ArrowLeft className="mr-2" size={16} /> Back
							</button>
							<button
								onClick={handleSubmit}
								disabled={!isStep2Valid}
								className={`flex items-center rounded-lg px-8 py-3 font-semibold transition-all duration-200 ${
									isStep2Valid
										? "transform bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:-translate-y-0.5 hover:from-red-600 hover:to-red-700"
										: "cursor-not-allowed bg-gray-300 text-gray-500"
								}`}
							>
								Complete Registration <Check className="ml-2" size={16} />
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default SignupForm;