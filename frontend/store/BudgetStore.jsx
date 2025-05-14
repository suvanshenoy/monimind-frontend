import { create } from "zustand";

export const useBudgetStore = create((set, get) => ({
	budgets: [],
	totalBalance: 1800,
	targets: {},
	assigned: {},

	addBudget: (budget) => {
		return set((state) => ({
			budgets: [...state.budgets, budget],
		}));
	},

	updateBudget: (budgetId, updatedBudget) => {
		return set((state) => ({
			budgets: state.budgets.map((budget) =>
				budget._id === budgetId ? { ...budget, ...updatedBudget } : budget,
			),
		}));
	},

	deleteBudget: (budgetId) => {
		return set((state) => ({
			budgets: state.budgets.filter((budget) => budget._id !== budgetId),
		}));
	},

	setTarget: (category, item, amount) =>
		set((state) => {
			const newTargets = { ...state.targets };
			if (!newTargets[category]) newTargets[category] = {};
			newTargets[category][item] = amount;
			return { targets: newTargets };
		}),

	setAssigned: (category, item, amount) =>
		set((state) => {
			const newAssigned = { ...state.assigned };
			if (!newAssigned[category]) newAssigned[category] = {};
			const oldAmount = newAssigned[category][item] || 0;
			newAssigned[category][item] = amount;
			return {
				assigned: newAssigned,
				totalBalance: state.totalBalance + oldAmount - amount,
			};
		}),

	addToBalance: (amount) =>
		set((state) => ({
			totalBalance: state.totalBalance + amount,
		})),

	getAvailable: (category, item) => {
		const state = get();
		const target = state.targets[category]?.[item] || 0;
		const assigned = state.assigned[category]?.[item] || 0;
		return target - assigned;
	},

	autoAssign: () => {
		const state = get();
		const remainingBalance = state.totalBalance;
		let totalNeeded = 0;

		const categories = ["bills", "needs", "wants"];
		categories.forEach((category) => {
			Object.entries(state.targets[category] || {}).forEach(
				([item, target]) => {
					const assigned = state.assigned[category]?.[item] || 0;
					if (assigned < target) {
						totalNeeded += target - assigned;
					}
				},
			);
		});

		if (totalNeeded === 0) return;

		let availableToAssign = remainingBalance;
		const priorityOrder = [
			{ category: "bills", weight: 0.5 },
			{ category: "needs", weight: 0.3 },
			{ category: "wants", weight: 0.2 },
		];

		priorityOrder.forEach(({ category, weight }) => {
			if (availableToAssign <= 0) return;

			const categoryTargets = state.targets[category] || {};
			const totalCategoryNeeded = Object.entries(categoryTargets).reduce(
				(sum, [item, target]) => {
					const assigned = state.assigned[category]?.[item] || 0;
					return sum + Math.max(0, target - assigned);
				},
				0,
			);

			if (totalCategoryNeeded === 0) return;

			const categoryAllocation = Math.min(
				availableToAssign * weight,
				totalCategoryNeeded,
			);
			Object.entries(categoryTargets).forEach(([item, target]) => {
				const currentAssigned = state.assigned[category]?.[item] || 0;
				const needed = target - currentAssigned;
				if (needed > 0) {
					const allocation = Math.min(
						needed,
						(needed / totalCategoryNeeded) * categoryAllocation,
					);
					if (allocation > 0) {
						get().setAssigned(category, item, currentAssigned + allocation);
					}
				}
			});

			availableToAssign -= categoryAllocation;
		});
	},

	resetAssignments: () =>
		set((state) => {
			const totalAssigned = Object.values(state.assigned).reduce(
				(sum, category) =>
					sum +
					Object.values(category).reduce(
						(catSum, amount) => catSum + amount,
						0,
					),
				0,
			);

			return {
				assigned: {},
				totalBalance: state.totalBalance + totalAssigned,
			};
		}),
}));
