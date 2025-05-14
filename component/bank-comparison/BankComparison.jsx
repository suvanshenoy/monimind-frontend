import React from "react";
import { NavLink } from "react-router";

export function BankComparison() {
	return (
		<section className="font-[inter] sm:flex flex-col p-5 m-auto gap-y-10">
			<div className="px-6">
				<h3 className="font-bold text-3xl text-center text-nowrap mb-4">
					Bank Comparison
				</h3>
				<p className="sm:text-center text-pretty font-extralight text-lg">
					We make comparing banks simple and straightforward. Whether you're
					looking for the best interest rates and lowest fees.
				</p>
				<p className="sm:text-center text-pretty font-extralight text-lg">
					{" "}
					Our comparison tool helps you quickly identify the financial
					institution that meets your unique needs
				</p>
			</div>

			<div className="sm:flex grid justify-center sm:gap-30 gap-15 my-8">
				<NavLink to="/account-type">
					<div className="flex flex-col items-center w-60 h-70 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl gap-y-5 hover:scale-105">
						<img src="Money.png" alt="account" className="w-50 py-3 " />
						<button
							className="cursor-pointer bg-gradient-to-r from-[#5293FF] to-[#943CE1] text-white w-50 py-3 rounded-lg"
							type="button"
						>
							Account Types
						</button>
					</div>
				</NavLink>

				<NavLink to="/cc-type">
					<div className="flex flex-col items-center w-60 h-70 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl gap-y-5 hover:scale-105">
						<img src="CC.png" alt="card" className="w-60 py-5 " />
						<button
							className="cursor-pointer bg-gradient-to-r from-[#5293FF] to-[#943CE1] text-white w-50 py-3 rounded-lg"
							type="button"
						>
							Credit Cards
						</button>
					</div>
				</NavLink>
			</div>
		</section>
	);
}
