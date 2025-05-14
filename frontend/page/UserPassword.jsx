import { Footer } from "@layout/Footer";
import React from "react";
import { FaUniversity } from "react-icons/fa";
import { NavLink } from "react-router";

export function UserPassword() {
	return (
		<section className="bg-[#F8FAFC] flex flex-col  py-3 font-[inter]">
			<NavLink to="/">
				<div className="flex gap-2 items-center border-b-1 border-gray-300 pb-2">
					<FaUniversity className="text-[#2563EB] w-[32px] h-[32px] ml-5" />
					<h4 className="font-bold text-4xl">MoniMind</h4>
				</div>
			</NavLink>

			<form className="flex flex-col justify-center m-auto gap-y-5 py-20 px-4 font-[inter]  sm:w-190 max-h-screen ">
				<div className=" border-b-1 border-gray-300 pb-2">
					<h5 className=" text-3xl font-semibold mb-4 text-nowrap">
						Forgot your password ?
					</h5>
					<p className="font-extralight text-gray-500">
						No sweat. Enter the email address you signed up with and we'll send
						you instructions to reset your password.
					</p>
				</div>

				<div className="flex flex-col gap-y-4 sm:w-100">
					<div className="flex flex-col gap-y-2">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							className="p-2 sm:w-80 border-1 rounded-lg border-gray-300"
						></input>
					</div>

					<button
						type="button"
						className="px-4 py-3 bg-[#2563EB] text-nowrap  text-white sm:w-50 rounded-lg hover:opacity-90 cursor-pointer"
					>
						Send Reset Instructions{" "}
					</button>
					<NavLink to="/sign-in">
						<p className="text-[#2563EB] font-extralight ">Return to log in</p>
					</NavLink>
				</div>
			</form>
			<footer />
		</section>
	);
}
