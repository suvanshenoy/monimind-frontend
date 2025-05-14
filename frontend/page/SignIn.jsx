import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router";

export function SignIn() {
	return (
		<section className="flex justify-center min-h[100vh] ">
			<form className="flex flex-col gap-y-5 p-5 font-[inter] sm:w-150 min-h-screen  ">
				<div>
					<h5 className="text-center font-bold text-4xl py-4">Sign In</h5>
					<p className="text-gray-600  text-center mb-3">
						New to MoniMind ?
						<NavLink to="/sign-up" className="text-[#2563EB] ml-2">
							Sign up today
						</NavLink>
					</p>
				</div>

				<div className="flex gap-4 items-center relative bg-gray-100  border rounded-lg">
					<MdOutlineEmail className="absolute left-2 " />
					<input
						type="email"
						required
						placeholder="Email address"
						className="py-2  pr-3 pl-10 w-full placeholder-gray-500  ring-gray-200  focus:ring-gray-500"
					></input>
				</div>

				<div className="flex gap-2 items-center relative border rounded-lg">
					<RiLockPasswordLine className="absolute left-2" />
					<input
						type="password"
						required
						placeholder="Password"
						className="py-2  pr-3 pl-10 w-full placeholder-gray-500 ring-gray-200  focus:ring-gray-500"
					></input>
				</div>

				<div className="flex justify-between gap-20 text-nowrap">
					<div className="flex items-center gap-2">
						<input type="checkbox" required></input>
						<p>Keep me signed in</p>
					</div>
					<NavLink to="/user-password">
						<p className="cursor-pointer text-[#2563EB]">Forgot password ?</p>
					</NavLink>
				</div>

				<div className="text-center py-4">
					<button className="px-4 py-2 bg-[#2563EB] w-full text-white rounded-lg hover:opacity-90 cursor-pointer">
						Sign In
					</button>
				</div>

				<div className="flex flex-col justify-between">
					<p className="text-gray-500 text-lg text-center mb-2">or</p>
					<div className="flex flex-col justify-between gap-6 cursor-pointer ">
						<button
							className="flex items-center p-3 gap-2 rounded-lg justify-center cursor-pointer hover:bg-gradient-to-r  from-blue-300 via-slate-400 to-blue-400 border-gray-400 border "
							type="button"
						>
							<FaGoogle />
							Continue with Google
						</button>
						<button className="flex items-center gap-2 rounded-lg justify-center p-3 hover:bg-gradient-to-r  from-blue-300 via-slate-400 to-blue-400 cursor-pointer">
							<FaApple size="20" />
							Continue with Apple
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}
