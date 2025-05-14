import React from "react";
// import { CCtypes } from "@/data";

export function CreditCard() {
	return (
		<section className="flex flex-col text-nowrap items-center justify-center m-auto py-6 font-[inter] sm:gap-y-22 gap-y-10 px-4">
			<div>
				<h3 className=" font-semibold text-center font-[inter] text-3xl">
					Types of Credit Cards
				</h3>
			</div>

			<div className="grid grid-cols-2 sm:gap-16 gap-8 justify-center items-center cursor-pointer">
				<div className="flex flex-col items-center sm:w-60 sm:h-60 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl  hover:scale-105">
					<img src="Airplane.png" alt="airplane" className="w-50 " />
					<button
						className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#5293FF] to-[#943CE1]"
						type="button"
					>
						Travel
					</button>
				</div>

				<div className="flex flex-col items-center sm:w-60 sm:h-60 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl  hover:scale-105">
					<img src="Casback.png" alt="cashback" className="w-50" />
					<button
						className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#5293FF] to-[#943CE1]"
						type="button"
					>
						Cash back
					</button>
				</div>

				<div className="flex flex-col items-center sm:w-60 sm:h-60 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl sm:gap-y-3 gap-y-2 hover:scale-105">
					<img src="Percent.png" alt="percent" className="sm:w-45  sm:py-1" />
					<button
						className="cursor-pointer  text-transparent bg-clip-text bg-gradient-to-r from-[#5293FF] to-[#943CE1]"
						type="button"
					>
						Low Interest
					</button>
				</div>

				<div className="flex flex-col items-center sm:w-60 sm:h-60 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl  hover:scale-105">
					<img src="Academic.png" alt="academic" className="w-50" />
					<button
						className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#5293FF] to-[#943CE1]"
						type="button"
					>
						Student
					</button>
				</div>
			</div>
		</section>
	);
}
