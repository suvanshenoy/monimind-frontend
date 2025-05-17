import React from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { Banks, Resources, Tools } from "../data";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
	return (
		<footer className="bg-[#1F2937] sm:flex flex-col justify-between m-auto font-[inter] px-15 py-5 ">
			<div className="sm:flex hidden justify-between py-3">
				<div className=" flex-col w-60 h-60">
					<div className="flex gap-3 items-center mb-6">
						<LiaUniversitySolid color="white" size="20" />
						<h4 className="text-white">MoniMind</h4>
					</div>
					<p className="text-[#9CA3AF] text-balance">
						Helping international students make smarter financial decisions in
						Canada
					</p>
				</div>

				<div className="sm:flex flex-col hidden">
					<h6 className="text-white mb-6">Banks</h6>
					<div className="gap-y-3 flex flex-col">
						{Banks.map((item) => {
							const { id, title, url } = item;
							return (
								<ul key={id} className="">
									<li className="cursor-pointer text-nowrap text-[#9CA3AF]">
										{title}
									</li>
								</ul>
							);
						})}
					</div>
				</div>

				<div className="sm:flex flex-col hidden">
					<h6 className="text-white mb-6 ">Tools</h6>
					<div className="gap-y-3 flex flex-col">
						{Tools.map((item) => {
							const { id, title, url } = item;
							return (
								<ul key={id} className="">
									<li className="cursor-pointer text-nowrap text-[#9CA3AF]">
										{title}
									</li>
								</ul>
							);
						})}
					</div>
				</div>

				<div className="sm:flex flex-col hidden">
					<h6 className="text-white mb-6 ">Resources</h6>
					<div className="gap-y-3 flex flex-col">
						{Resources.map((item) => {
							const { id, title, url } = item;
							return (
								<ul key={id} className="">
									<li className="cursor-pointer  text-[#9CA3AF]">{title}</li>
								</ul>
							);
						})}
					</div>
				</div>
			</div>

			<div className="sm:flex  items-center sm:justify-between justify-center sm:border-t-2 border-[#9CA3AF] py-5">
				<p className="text-[#9CA3AF] text-center text-nowrap mb-5">
					&copy;2025 MoniMind. All right reserved
				</p>
				<div className="flex gap-5  justify-center">
					<FaXTwitter size="20" className="fill-[#9CA3AF] " />
					<FaGithub size="20" className="fill-[#9CA3AF]" />
					<FaLinkedin size="20" className="fill-[#9CA3AF]" />
				</div>
			</div>
		</footer>
	);
}
