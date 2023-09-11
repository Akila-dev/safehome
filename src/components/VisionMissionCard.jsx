import React from "react";
const Card = ({ icon, title, text }) => {
	return (
		<div className="bg-[var(--card-bg)] rounded-xl px-5 py-8 shadow">
			<p className="font-semibold pt-5 pb-8 flex items-center text-[1.05rem] md:text-xl lg:text-2xl ">
				<span className="w-[60px] h-[60px] border-[3px] border-[var(--highlight)] inline-block rounded-full"></span>
				<span className="inline-block bg-[var(--card-bg)] translate-x-[-25px]">
					{title}
				</span>
			</p>
			<p className="">{text}</p>
		</div>
	);
};

export default Card;
