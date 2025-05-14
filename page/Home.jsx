import React from "react";
import { Navbar } from "@layout/Navbar";
import { HomeCard } from "@component/HomeCard";
import { GiPieChart } from "react-icons/gi";
import { FaUniversity, FaArrowsAltH } from "react-icons/fa";

const cardsData = [
	{
		icon: FaUniversity,
		title: "Bank Comparison",
		description: "Compare student accounts, credit cards, and banking services",
	},
	{
		icon: GiPieChart,
		title: "Smart Budgeting",
		description: "Track your spending and set financial goals",
	},
	{
		icon: FaArrowsAltH,
		title: "Currency Calculator",
		description: "Convert currencies and see real-world value comparisons",
	},
];

export function Home() {
	return (
		<main className="bg-[#F8FAFC] w-screen min-h-[100vh] md:h-screen  flex flex-col items-center overflow-x-hidden">
			<Navbar />
			<h1 className="text-xl md:text-3xl lg:text-4xl font-bold mt-20 mb-10  text-center xl:w-[900px]">
				Compare Canadian Banks for Students
			</h1>
			<p className="text-[#4B5563] mb-20 text-center xl:w-[900px] ">
				Make informed financial decisions with our comprehensive comparison
				tools
			</p>
			<div className="flex flex-col xl:flex-row  gap-10 xl:gap-4 mb-6">
				{cardsData.map((card, index) => (
					<HomeCard key={index} {...card} />
				))}
			</div>
		</main>
	);
}
