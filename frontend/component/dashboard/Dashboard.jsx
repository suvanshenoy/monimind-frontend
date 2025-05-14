import React, { useState } from "react";
import { Link } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TableRow } from "@component/dashboard/component/TableRow";
import { useAnswerStore } from "@store/AnswerStore";
import { useBudgetStore } from "@store/BudgetStore";
import { AddBalancePopup } from "@component/pop-up/AddBalancePopup";

export function Dashboard() {
	const answers = useAnswerStore((state) => state.answers);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const { totalBalance, autoAssign, resetAssignments, addToBalance } =
		useBudgetStore();
	const [showAddBalance, setShowAddBalance] = useState(false);

	const handleAddBalance = (amount) => {
		addToBalance(amount);
	};

	const handleAutoAssign = () => {
		autoAssign();
	};

	const handleReset = () => {
		if (window.confirm("Are you sure you want to reset all assignments?")) {
			resetAssignments();
		}
	};

	const categorizeAnswers = (answers) => {
		const categories = {
			bills: [],
			needs: [],
			wants: [],
		};

		answers.forEach((answer) => {
			const lowerAnswer = answer.toLowerCase();

			// Housing & Living Situation (from step 1, 8)
			if (lowerAnswer.includes("i rent")) {
				categories.bills.push("rent");
			} else if (lowerAnswer.includes("mortgage")) {
				categories.bills.push(answer);
			}
			// Regular Monthly Bills (from step 4)
			else if (
				lowerAnswer.includes("phone") ||
				lowerAnswer.includes("internet")
			) {
				categories.bills.push(answer);
			}
			// Subscriptions (from step 3)
			else if (
				lowerAnswer.includes("music") ||
				lowerAnswer.includes("tv streaming") ||
				lowerAnswer.includes("fitness") ||
				lowerAnswer.includes("online courses") ||
				lowerAnswer.includes("audio or ebooks") ||
				lowerAnswer.includes("news") ||
				lowerAnswer.includes("meal delivery")
			) {
				categories.bills.push(answer);
			}
			// Debt & Loans (from step 7)
			else if (
				lowerAnswer.includes("credit card") ||
				lowerAnswer.includes("student loans") ||
				lowerAnswer.includes("auto loans") ||
				lowerAnswer.includes("personal loans") ||
				lowerAnswer.includes("medical debt")
			) {
				categories.bills.push(answer);
			}
			// Transportation (from step 5)
			else if (
				lowerAnswer.includes("car") ||
				lowerAnswer.includes("public transit") ||
				lowerAnswer.includes("rideshare") ||
				lowerAnswer.includes("motorcycle")
			) {
				categories.needs.push(answer);
			}
			// Basic Needs (from step 4)
			else if (
				lowerAnswer.includes("groceries") ||
				lowerAnswer.includes("personal care") ||
				lowerAnswer.includes("clothing")
			) {
				categories.needs.push(answer);
			}
			// Savings & Emergency (from step 10)
			else if (
				lowerAnswer.includes("emergency fund") ||
				lowerAnswer.includes("retirement") ||
				lowerAnswer.includes("investments")
			) {
				categories.needs.push(answer);
			}
			// Annual Expenses (from step 11)
			else if (
				lowerAnswer.includes("annual credit card fees") ||
				lowerAnswer.includes("medical expenses") ||
				lowerAnswer.includes("taxes or other fees")
			) {
				categories.needs.push(answer);
			} else if (lowerAnswer.includes("yes")) {
				categories.needs.push("mortage");
			}
			// Discretionary/Wants (from step 9)
			else if (
				lowerAnswer.includes("dining out") ||
				lowerAnswer.includes("entertainment") ||
				lowerAnswer.includes("video games") ||
				lowerAnswer.includes("hobbies") ||
				lowerAnswer.includes("charity") ||
				lowerAnswer.includes("gifts") ||
				lowerAnswer.includes("celebrations")
			) {
				categories.wants.push(answer);
			}
			// Future Goals/Wants (from step 10)
			else if (
				lowerAnswer.includes("new home") ||
				lowerAnswer.includes("new car") ||
				lowerAnswer.includes("vacation") ||
				lowerAnswer.includes("baby") ||
				lowerAnswer.includes("wedding")
			) {
				categories.wants.push(answer);
			}
			// Everything else
			else {
				categories.wants.push(answer);
			}
		});

		return categories;
	};

	const categorizedAnswers = categorizeAnswers(answers);

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
			{showAddBalance && (
				<AddBalancePopup
					onClose={() => setShowAddBalance(false)}
					onAdd={handleAddBalance}
				/>
			)}
			<nav className="bg-blue-600 shadow-lg text-white p-4">
				<div className="container mx-auto">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<h1 className="text-2xl font-bold">Budget Dashboard</h1>
						<div className="flex flex-wrap justify-center gap-2 sm:gap-4">
							<button
								onClick={handleAutoAssign}
								className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
							>
								Auto-Assign
							</button>
							<button
								onClick={handleReset}
								className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
							>
								Reset
							</button>
							<button
								onClick={() => setShowAddBalance(true)}
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
							>
								Add Balance
							</button>
						</div>
					</div>
				</div>
			</nav>

			<main className="container mx-auto p-4 sm:p-6">
				<div className="bg-white rounded-xl shadow-2xl p-4 sm:p-8 mb-6 backdrop-blur-sm backdrop-filter">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8">
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
							<DatePicker
								selected={selectedDate}
								onChange={(date) => setSelectedDate(date)}
								dateFormat="MMMM yyyy"
								showMonthYearPicker
								className="text-xl sm:text-2xl font-bold border-none focus:ring-2 focus:ring-blue-500 rounded-lg w-full sm:w-auto"
							/>
							<div className="text-sm text-gray-600 bg-gray-50 p-3 sm:p-4 rounded-lg shadow-inner w-full sm:w-auto">
								<h3 className="font-semibold mb-2">Auto-assign Distribution</h3>
								<ul className="space-y-1">
									<li className="flex items-center gap-2">
										<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										Bills: 50%
									</li>
									<li className="flex items-center gap-2">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										Needs: 30%
									</li>
									<li className="flex items-center gap-2">
										<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
										Wants: 20%
									</li>
								</ul>
							</div>
						</div>
						<div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 sm:p-4 rounded-xl shadow-md w-full sm:w-auto">
							<div className="text-sm text-gray-600 font-medium">
								Ready to Assign
							</div>
							<div
								className={`text-xl sm:text-2xl font-bold ${totalBalance < 0 ? "text-red-600" : "text-green-600"}`}
							>
								${totalBalance.toFixed(2)}
							</div>
						</div>
					</div>

					<div className="relative overflow-hidden rounded-xl shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
						<div className="overflow-x-auto">
							<table className="w-full relative z-10">
								<thead>
									<tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
										<th className="text-left p-3 sm:p-4 text-gray-600 font-semibold text-sm sm:text-base">
											Category
										</th>
										<th className="text-right p-3 sm:p-4 text-gray-600 font-semibold text-sm sm:text-base">
											Assigned
										</th>
										<th className="text-right p-3 sm:p-4 text-gray-600 font-semibold text-sm sm:text-base">
											Target
										</th>
										<th className="text-right p-3 sm:p-4 text-gray-600 font-semibold text-sm sm:text-base">
											Available
										</th>
									</tr>
								</thead>
								<TableRow categorizedAnswers={categorizedAnswers} />
							</table>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
