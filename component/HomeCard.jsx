import React from "react";

export function HomeCard({ icon: IconComponent, title, description }) {
	return (
		<div className="bg-white rounded-[12px] xl:w-[384px] h-[196px] px-8 py-4 mx-2">
			<IconComponent className="text-[#2563EB] w-[32px] h-[32px] mb-[0.56rem]" />
			<h6 className="text-[1.25rem] mb-[0.56rem]">{title}</h6>
			<p className="text-[#4B5563]">{description}</p>
		</div>
	);
}
