import { useState } from "react";

export function StepOne({ onContinue, initialValue = "" }) {
	const [inputValue, setInputValue] = useState(initialValue);
	const [error, setError] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
		setError("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) {
			setError("Please enter your first name");
			return;
		}
		onContinue(inputValue);
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
			<form
				onSubmit={handleSubmit}
				className="bg-white w-[600px] rounded-3xl shadow-xl p-8"
			>
				<div className="flex items-center gap-3 mb-4">
					<span className="text-2xl">👋</span>
					<h2 className="text-2xl font-semibold text-gray-900">
						People call us Moni-Mind
					</h2>
				</div>

				<p className="text-gray-600 mb-8">What should we call you?</p>

				<div className="mb-8">
					<input
						className="w-full px-4 py-3 text-lg border-b-2 border-gray-200 outline-none transition-colors focus:border-blue-500"
						type="text"
						placeholder="Your first name"
						value={inputValue}
						onChange={handleInputChange}
					/>
					{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
				</div>

				<div className="flex justify-end">
					<button
						type="submit"
						className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
					>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
}
