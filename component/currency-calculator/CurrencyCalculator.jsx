import { CurrencyDropdown } from "@component/currency-calculator/CurrencyDropdown";
import { Products } from "@component/currency-calculator/Products";
import { Footer, Navbar } from "@layout/index";
import React, { useEffect } from "react";
import { useState } from "react";
import { VscArrowSwap } from "react-icons/vsc";

const currencies = "https://api.frankfurter.dev/v1/currencies";

export function CurrencyCalculator() {
	const [currency, setCurrency] = useState([]);
	const [amount, setAmount] = useState(1000);

	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("USD");
	const [convertedAmount, setConvertedAmount] = useState(null);
	const [converting, setConverting] = useState(false);

	const fetchCurrency = async () => {
		try {
			const res = await fetch(currencies);
			const data = await res.json();
			setCurrency(Object.keys(data));
		} catch (error) {
			console.log("Fetching Error", error);
		}
	};

	useEffect(() => {
		fetchCurrency();
	}, []);

	const swapCurrency = (e) => {
		e.preventDefault();
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
	};

	const convertCurrency = async () => {
		setConverting(true);

		try {
			const response = await fetch(
				`https://api.frankfurter.dev/v1/latest?from=${fromCurrency.trim()}&to=${toCurrency.trim()}`,
			);
			const data = await response.json();
			const result = (amount * data.rates[toCurrency]).toFixed(2);
			setConvertedAmount(result);
		} catch (error) {
			console.error("Conversion Error", error);
			setConvertedAmount("Error");
		} finally {
			setConverting(false);
		}
	};

	return (
		<>
			<Navbar />
			<section className="font-[inter] grid grid-cols-1 sm:flex justify-between py-8 px-7 gap-10">
				<div className=" sm:w-150 sm:h-90 gap-y-7 px-5 py-4 rounded-lg  shadow-xl">
					<div>
						<h3 className=" font-semibold text-3xl text-nowrap">
							Currency Converter
						</h3>
					</div>

					<div className="my-4">
						<label htmlFor="Amount" className="block text-sm font-medium mb-1">
							Amount
						</label>

						<input
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className=" border p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
						/>
					</div>

					<div className="grid grid-col-1 sm:grid-cols-3 gap-3 items-end ">
						<CurrencyDropdown
							currencies={currency}
							title="From :"
							currency={fromCurrency}
							setCurrency={setFromCurrency}
						/>

						<div className="flex justify-center items-center -mb-6 sm:mb-0">
							<button
								onClick={swapCurrency}
								className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 hover:scale-105"
							>
								<VscArrowSwap />
							</button>
						</div>

						<CurrencyDropdown
							currencies={currency}
							title="To :"
							currency={toCurrency}
							setCurrency={setToCurrency}
						/>
					</div>

					<div>
						<button
							onClick={convertCurrency}
							className="px-5 py-2 my-7 bg-gradient-to-r from-[#5293FF] to-[#943CE1] rounded-md cursor-pointer text-white focus:outline-none focus:ring-2 hover:bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-2 "
						>
							Convert
						</button>
					</div>

					<div>
						<p className="font-extralight text-left">
							Converted Amount : {convertedAmount} {toCurrency}
						</p>
					</div>
				</div>

				<Products />
			</section>
			<Footer />
		</>
	);
}
