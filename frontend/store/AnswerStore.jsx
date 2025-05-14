import { create } from "zustand";

export const useAnswerStore = create((set) => ({
	answers: [],

	addAnswer: (answer) => {
		return set((state) => ({
			answers: [...state.answers, answer],
		}));
	},

	deleteAnswer: (answerId) => {
		return set((state) => ({
			answers: state.answers.filter((answer) => answer._id !== answerId),
		}));
	},
}));
