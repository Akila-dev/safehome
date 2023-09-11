import React from "react";

import checkmark from "../assets/checkmark.png";
import vector from "../assets/vector.png";

const Offer = ({ title, text, pos }) => (
	<div
		className={`${
			pos === "bottom" && "lg:pt-[50px]"
		} w-full lg:w-full flex justify-center z-[10] `}
	>
		<div
			className={`max-w-[235px] md:max-w-[100%] lg:max-w-[200px] flex flex-col items-center text-center bg-white lg:bg-transparent rounded-xl p-6 md:p-8 lg:p-0`}
		>
			<div>
				<img src={checkmark} alt="offer" className="w-[100px]" />
			</div>
			<h3 className="font-bold text-[20px] leading-[27px] py-[15px]">
				{title}
			</h3>
			<p>{text}</p>
		</div>
	</div>
);

const WhatWeOffer = () => {
	return (
		<div className="pt-[30px] pb-[60px] md:py-[100px] bg-[var(--light-bg)]">
			<div className="container">
				<div className="flex flex-col gap-[15px] max-w-[604px] mx-auto text-center text-[var(--highlight)]">
					<h1>What we Offer</h1>
				</div>
				<div className="pt-[35px] md:pt-[50px] gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:flex justify-between relative flex-wrap lg:flex-nowrap">
					<Offer
						title="Land Owners Club"
						text="Invest in land units across various locations for steady passive rental income."
						pos="top"
					/>
					<Offer
						title="Shop Owners Club"
						text="Own units in bustling commercial spaces and earn from vibrant retail markets."
						pos="bottom"
					/>
					<Offer
						title="Office Owners Club"
						text="Join a community of investors in prime office spaces, generating consistent rental returns."
						pos="top"
					/>
					<Offer
						title="Home Owners Club"
						text="Experience the pride and security of earning passively and owning units of residential properties across sought-after neighborhoods."
						pos="bottom"
					/>
					{/* Vector */}
					<div className="hidden lg:block absolute left-0 top-0 w-full h-full px-[150px] pt-[70px] lg:px-[100px] lg:pt-[80px] xl:px-[150px] xl:pt-[70px]">
						<img src={vector} alt="vector" className="w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeOffer;
