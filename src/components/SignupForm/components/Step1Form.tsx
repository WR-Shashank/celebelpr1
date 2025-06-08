import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormData, FormErrors } from "../domain/entities";

interface Step1FormProps {
	formData: FormData;
	errors: FormErrors;
	showPassword: boolean;
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
	setShowPassword: (show: boolean) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({
	formData,
	errors,
	showPassword,
	handleInputChange,
	setShowPassword,
}) => (
	<div className="space-y-6">
		{/* First Name & Last Name */}
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<label className="mb-2 block text-sm font-semibold text-gray-700">
					First Name *
				</label>
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleInputChange}
					placeholder="Enter your first name"
					className={`w-full rounded-lg border-2 px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 ${
						errors.firstName
							? "border-red-500 bg-red-50 focus:border-red-500"
							: "border-gray-200 focus:border-red-500 focus:bg-white"
					}`}
				/>
				{errors.firstName && (
					<p className="mt-1 flex items-center text-sm text-red-500">
						<span className="mr-1 h-4 w-4">⚠</span>
						{errors.firstName}
					</p>
				)}
			</div>
			<div>
				<label className="mb-2 block text-sm font-semibold text-gray-700">
					Last Name *
				</label>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleInputChange}
					placeholder="Enter your last name"
					className={`w-full rounded-lg border-2 px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 ${
						errors.lastName
							? "border-red-500 bg-red-50 focus:border-red-500"
							: "border-gray-200 focus:border-red-500 focus:bg-white"
					}`}
				/>
				{errors.lastName && (
					<p className="mt-1 flex items-center text-sm text-red-500">
						<span className="mr-1 h-4 w-4">⚠</span>
						{errors.lastName}
					</p>
				)}
			</div>
		</div>

		{/* Username */}
		<div>
			<label className="mb-2 block text-sm font-semibold text-gray-700">
				Username *
			</label>
			<input
				type="text"
				name="username"
				value={formData.username}
				onChange={handleInputChange}
				placeholder="Choose a unique username"
				className={`w-full rounded-lg border-2 px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 ${
					errors.username
						? "border-red-500 bg-red-50 focus:border-red-500"
						: "border-gray-200 focus:border-red-500 focus:bg-white"
				}`}
			/>
			{errors.username && (
				<p className="mt-1 flex items-center text-sm text-red-500">
					<span className="mr-1 h-4 w-4">⚠</span>
					{errors.username}
				</p>
			)}
		</div>

		{/* Email */}
		<div>
			<label className="mb-2 block text-sm font-semibold text-gray-700">
				Email Address *
			</label>
			<input
				type="email"
				name="email"
				value={formData.email}
				onChange={handleInputChange}
				placeholder="you@example.com"
				className={`w-full rounded-lg border-2 px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 ${
					errors.email
						? "border-red-500 bg-red-50 focus:border-red-500"
						: "border-gray-200 focus:border-red-500 focus:bg-white"
				}`}
			/>
			{errors.email && (
				<p className="mt-1 flex items-center text-sm text-red-500">
					<span className="mr-1 h-4 w-4">⚠</span>
					{errors.email}
				</p>
			)}
		</div>

		{/* Password */}
		<div>
			<label className="mb-2 block text-sm font-semibold text-gray-700">
				Password *
			</label>
			<div className="relative">
				<input
					type={showPassword ? "text" : "password"}
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					placeholder="Enter a strong password"
					className={`w-full rounded-lg border-2 px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 ${
						errors.password
							? "border-red-500 bg-red-50 focus:border-red-500"
							: "border-gray-200 focus:border-red-500 focus:bg-white"
					}`}
				/>
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
					className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-red-500"
				>
					{showPassword ? (
						<EyeOff size={20} />
					) : (
						<Eye size={20} />
					)}
				</button>
			</div>
			{errors.password && (
				<p className="mt-1 flex items-center text-sm text-red-500">
					<span className="mr-1 h-4 w-4">⚠</span>
					{errors.password}
				</p>
			)}
		</div>
	</div>
);

export default Step1Form;