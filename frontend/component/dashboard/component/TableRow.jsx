import React, { useState } from "react";
import { useBudgetStore } from "@store/BudgetStore";

export function ProgressBar({ assigned, target }) {
	const percentage = target > 0 ? (assigned / target) * 100 : 0;
	const color = percentage >= 100 ? "bg-green-500" : "bg-blue-500";

	return (
		<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
			<div
				className={`h-full ${color} transition-all duration-300 shadow-sm`}
				style={{ width: `${Math.min(100, percentage)}%` }}
			/>
		</div>
	);
}

export function TableRow({ categorizedAnswers }) {
	const [editedValues, setEditedValues] = useState({});
	const [isEditing, setIsEditing] = useState({});
	const [isEditingTarget, setIsEditingTarget] = useState({});
	const { setTarget, setAssigned, getAvailable, assigned, targets } =
		useBudgetStore();

	const handleChange = (category, index, value) => {
		const newValues = { ...editedValues };
		newValues[category] = newValues[category] || {};
		newValues[category][index] = value;
		setEditedValues(newValues);
	};

	const handleAssignedBlur = (category, index) => {
		const value = parseFloat(editedValues[category]?.[index]) || 0;
		setAssigned(category, index, value);
		setIsEditing((prev) => ({
			...prev,
			[category]: { ...prev[category], [index]: false },
		}));
	};

	const handleTargetBlur = (category, index) => {
		const value = parseFloat(editedValues[category]?.[index]) || 0;
		setTarget(category, index, value);
		setIsEditingTarget((prev) => ({
			...prev,
			[category]: { ...prev[category], [index]: false },
		}));
	};

	const handleAssignedClick = (category, index) => {
		setIsEditing((prev) => ({
			...prev,
			[category]: { ...prev[category], [index]: true },
		}));
	};

	const handleTargetClick = (category, index) => {
		setIsEditingTarget((prev) => ({
			...prev,
			[category]: { ...prev[category], [index]: true },
		}));
	};

	const getCategoryColor = (category) => {
		switch (category) {
			case "bills":
				return "from-blue-500/10 to-blue-500/5";
			case "needs":
				return "from-green-500/10 to-green-500/5";
			case "wants":
				return "from-purple-500/10 to-purple-500/5";
			default:
				return "from-gray-500/10 to-gray-500/5";
		}
	};

	return (
		<tbody className="divide-y divide-gray-200">
			{Object.entries(categorizedAnswers).map(([category, items]) => (
				<React.Fragment key={category}>
					<tr className={`bg-gradient-to-r ${getCategoryColor(category)}`}>
						<td
							colSpan="4"
							className="font-semibold text-left px-3 sm:px-4 py-2 sm:py-3 text-gray-700 text-sm sm:text-base"
						>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</td>
					</tr>
					{items.map((item, index) => (
						<tr
							key={index}
							className="hover:bg-gray-50/50 transition-colors duration-150"
						>
							<td className="px-3 sm:px-4 py-2 sm:py-3">
								<div className="flex flex-col gap-1 sm:gap-2">
									<span className="text-gray-700 text-sm sm:text-base">
										{item}
									</span>
									<ProgressBar
										assigned={assigned[category]?.[index] || 0}
										target={targets[category]?.[index] || 0}
									/>
								</div>
							</td>
							<td className="px-3 sm:px-4 py-2 sm:py-3 text-right">
								{isEditing[category]?.[index] ? (
									<input
										type="number"
										value={editedValues[category]?.[index] || ""}
										onChange={(e) =>
											handleChange(category, index, e.target.value)
										}
										onBlur={() => handleAssignedBlur(category, index)}
										className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 w-20 sm:w-28 text-right text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										autoFocus
									/>
								) : (
									<span
										onClick={() => handleAssignedClick(category, index)}
										className="cursor-pointer hover:text-blue-600 transition-colors px-2 py-1 rounded hover:bg-blue-50 text-sm sm:text-base"
									>
										${assigned[category]?.[index] || 0}
									</span>
								)}
							</td>
							<td className="px-3 sm:px-4 py-2 sm:py-3 text-right">
								{isEditingTarget[category]?.[index] ? (
									<input
										type="number"
										value={editedValues[category]?.[index] || ""}
										onChange={(e) =>
											handleChange(category, index, e.target.value)
										}
										onBlur={() => handleTargetBlur(category, index)}
										className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 w-20 sm:w-28 text-right text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										autoFocus
									/>
								) : (
									<span
										onClick={() => handleTargetClick(category, index)}
										className="cursor-pointer hover:text-blue-600 transition-colors px-2 py-1 rounded hover:bg-blue-50 text-sm sm:text-base"
									>
										${targets[category]?.[index] || 0}
									</span>
								)}
							</td>
							<td className="px-3 sm:px-4 py-2 sm:py-3 text-right">
								<span
									className={`font-medium text-sm sm:text-base ${getAvailable(category, index) < 0 ? "text-red-600" : "text-green-600"}`}
								>
									${getAvailable(category, index)}
								</span>
							</td>
						</tr>
					))}
				</React.Fragment>
			))}
		</tbody>
	);
}
