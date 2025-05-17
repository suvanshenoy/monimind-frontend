import React from "react";
import { FaUniversity } from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export function Navbar() {
	const navItems = [
		{ id: 1, text: "Bank Comparison", url: "/bank-comparison" },
		{ id: 2, text: "Budgeting Tools", url: "/budgeting-tools" },
		{ id: 3, text: "Currency Calculator", url: "/currency-calculator" },
	];
	const [isOpen, setIsOpen] = useState(false);
	function handleClick() {
		setIsOpen(!isOpen);
	}
	return (
		<header className="bg-white w-[100%] h-[100px] flex  items-center  shrink-0 justify-between relative">
			<div>
				<div className="flex items-center gap-2">
					<FaUniversity className="text-[#2563EB] w-[32px] h-[32px] ml-6" />
					<Link to="/" className="text-xl font-bold xl:mr-80">
						MoniMind
					</Link>
					<nav className="hidden sm:block lg:block">
						<ul className="flex lg:justify-between items-center px-8 gap-20 text-[#4B5563]">
							{navItems.map((item) => (
								<li key={item.id}>
									<Link
										to={item.url}
										className=" hover:border-b-2 hover:border-b-[#2563EB]"
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className="hidden xl:visible xl:flex xl:items-center xl:justify-between xl:gap-6 xl:ml-64">
						<Link
							to="/sign-in"
							className="text-[#4B5563] hover:border-b-2 hover:border-b-[#2563EB]"
						>
							Sign In
						</Link>
						<Link
							to="/sign-up"
							className="px-4 py-2 bg-[#2563EB] text-white rounded hover:opacity-90"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
			<button className="block sm:hidden xl:hidden">
				<RxHamburgerMenu
					className="text-[#2563EB] w-[32px] h-[32px] mr-3"
					onClick={() => handleClick()}
				/>
			</button>
			{isOpen && (
				<ul className="flex flex-col gap-8 absolute top-20 right-0 bg-white rounded-[12px] px-8 py-6">
					{navItems.map((item) => (
						<li key={item.id}>
							<Link to={item.url} className="  text-[#4B5563] ">
								{item.text}
							</Link>
						</li>
					))}
					<Link to="/sign-in" className=" text-[#4B5563] ">
						Sign In
					</Link>
					<Link to="/sign-up" className=" text-[#4B5563]">
						Register
					</Link>
				</ul>
			)}
		</header>
	);
}
