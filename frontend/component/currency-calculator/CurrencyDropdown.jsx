import React from "react";
import { CiStar } from "react-icons/ci";

export function CurrencyDropdown({
	currencies,
	currency,
	setCurrency,
	title = " ",
}) {
	return (
		<div>
			<label htmlFor={title} className=" block text-sm font-medium mb-1">
				{title}
			</label>

			<div className="mt-1 relative">
				<select
					value={currency}
					onChange={(e) => setCurrency(e.target.value)}
					className="border p-2 border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 cursor-pointer focus:ring-indigo-400 bg-[#D9D9D9]"
				>
					<hr />
					{currencies.map((item) => {
						return (
							<option key={item} value={item}>
								{item}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
