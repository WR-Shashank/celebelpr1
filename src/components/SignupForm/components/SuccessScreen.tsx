import React from "react";
import { User, Mail, MapPin, CreditCard, Check } from "lucide-react";
import { FormData } from "../domain/entities";

interface SuccessScreenProps {
	formData: FormData;
	onReset: () => void;
}


const InfoCard = ({ icon, title, children }) => (
	<div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
		<div className="mb-3 flex items-center">
			{icon}
			<h3 className="ml-3 text-lg font-semibold text-gray-700">{title}</h3>
		</div>
		<div className="space-y-2 text-sm text-gray-600">{children}</div>
	</div>
);

const SuccessScreen: React.FC<SuccessScreenProps> = ({ formData, onReset }) => (
	<div className="w-full max-w-5xl rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">

		<div className="mb-8 text-center">
	
			<div className="mb-4">
				<span className="text-xl font-bold tracking-wider text-red-600">
					Celebal Technologies
				</span>
			</div>
			<div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
				<Check className="h-10 w-10 text-green-600" />
			</div>
			<h2 className="mb-2 text-3xl font-bold text-gray-800">
				Registration Successful!
			</h2>
			<p className="text-gray-600">
				Your account has been created successfully. Here is a summary of your
				details.
			</p>
		</div>

		<div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
			{/* Personal Info Card */}
			<InfoCard
				icon={<User className="h-6 w-6 text-red-500" />}
				title="Personal Information"
			>
				<p>
					<strong>First Name:</strong> {formData.firstName}
				</p>
				<p>
					<strong>Last Name:</strong> {formData.lastName}
				</p>
			</InfoCard>


			<InfoCard
				icon={<Mail className="h-6 w-6 text-red-500" />}
				title="Contact Information"
			>
				<p>
					<strong>Email:</strong> {formData.email}
				</p>
				<p>
					<strong>Phone Number:</strong> {formData.phoneNumber}
				</p>
			</InfoCard>


			<InfoCard
				icon={<MapPin className="h-6 w-6 text-red-500" />}
				title="Location Details"
			>
				<p>
					<strong>Country:</strong> {formData.country}
				</p>
				<p>
					<strong>City:</strong> {formData.city}
				</p>
			</InfoCard>


			<InfoCard
				icon={<CreditCard className="h-6 w-6 text-red-500" />}
				title="Identity"
			>
				<p>
					<strong>PAN Number:</strong> {formData.panNo}
                    <br/>
                    <strong>Aadhar Number:</strong> {formData.aadharNo}
				</p>
			</InfoCard>
		</div>

        
		<div className="text-center">
			<button
				onClick={onReset}
				className="transform rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-red-600 hover:to-red-700"
			>
				Register Another Account
			</button>
		</div>
	</div>
);

export default SuccessScreen;