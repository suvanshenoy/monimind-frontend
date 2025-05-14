import React from "react";

export function AccountType() {
	return (
		<section className="flex flex-col items-center justify-center m-auto py-6 font-[inter] sm:gap-y-22  gap-y-10">
			<div className="">
				<h3 className="font-semibold font-[inter] text-2xl text-center">
					Choose the type of account to compare with
				</h3>
			</div>

			<div className="sm:flex grid justify-center sm:gap-40 gap-15 cursor-pointer">
				<div className="flex flex-col items-center w-60 h-70 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl gap-y-4 hover:scale-105">
					<img src="ATM.png" alt="chequing" className="w-50 py-1" />
					<button
						className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#5293FF] to-[#943CE1]"
						type="button"
					>
						Chequing Accounts
					</button>
				</div>

				<div className="flex flex-col items-center w-60 h-70 rounded-lg border-gray-500 bg-[#D9D9D9] shadow-xl gap-y-4 hover:scale-105">
					<img src="Investment.png" alt="saving" className="w-50 py-1 " />
					<button
						className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#5293FF] to-[#943CE1]"
						type="button"
					>
						Saving Accounts
					</button>
				</div>
			</div>
		</section>
	);
}
