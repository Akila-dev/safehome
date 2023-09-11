import React from "react";

import hero from "../assets/hero.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const Hero = () => {
	return (
		<div className="w-full h-screen">
			{/* Image */}
			<div>
				<img src={hero} alt="hero" className="w-full h-screen object-cover" />
			</div>
			{/* Content */}
			<div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
				<div className="container text-center flex justify-center items-center flex-col gap-[15px] pt-[80px]">
					<h1 className="text-white max-w-[868px]">
						Welcome to <span className="text-[--highlight]">Safe-Home</span>, A{" "}
						<span className="text-[--highlight]">multipurpose</span>{" "}
						Cooperative  Society Limited
					</h1>
					<p className="text-white max-w-[488px]">
						With our strong foundation of trust, support, and shared values,
						we're here to provide you with the financial solutions and
						opportunities you need.
					</p>
					<div className="py-5 flex flex-col md:flex-row gap-3">
						<button className="w-[175px] h-[58px] md:w-[185px] md:h-[63px] bg-black p-3 rounded-2xl text-center shadow">
							<img src={playstore} alt="" className="h-full inline" />
						</button>
						<button className="w-[175px] h-[58px] md:w-[185px] md:h-[63px] bg-[var(--appstore-bg)] p-3 rounded-2xl text-center shadow">
							<img src={appstore} alt="" className="h-full inline" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
