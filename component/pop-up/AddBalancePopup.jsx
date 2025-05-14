import React, { useState } from "react";

export function AddBalancePopup({ onClose, onAdd }) {
	const [amount, setAmount] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const parsedAmount = parseFloat(amount);

		if (!amount || isNaN(parsedAmount)) {
			setError("Please enter a valid amount");
			return;
		}

		if (parsedAmount <= 0) {
			setError("Amount must be greater than 0");
			return;
		}

		onAdd(parsedAmount);
		onClose();
	};

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-xl w-96 p-6">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					Add Balance
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-medium mb-2">
							Enter Amount
						</label>
						<div className="relative">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
								$
							</span>
							<input
								type="number"
								value={amount}
								onChange={(e) => {
									setAmount(e.target.value);
									setError("");
								}}
								className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder="0.00"
								step="0.01"
								min="0"
							/>
						</div>
						{error && <p className="mt-2 text-sm text-red-600">{error}</p>}
					</div>
					<div className="flex justify-end gap-3">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium rounded-lg transition-colors"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
						>
							Add Balance
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
