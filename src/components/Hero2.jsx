import React from "react";

import blueDots from "../assets/blue-dots.png";
import orangeDots from "../assets/orange-dots.png";

const Hero2 = ({ bg, img, header1, header2, text, imgSide }) => {
	return (
		<div className={`${bg} w-full pt-[35px] pb-[60px] md:py-[100px]`}>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[100px] items-center max-w-[1000px] mx-auto">
					{imgSide === "left" && (
						<div className="hidden md:block pt-[15px] md:pt-0 relative">
							<img src={img} alt="" className="w-full" />
							{/* Dots */}
							<img
								src={blueDots}
								alt=""
								className="absolute left-0 top-0 w-[138px] translate-x-[-65px] translate-y-[-45px] -z-[1]"
							/>
							<img
								src={orangeDots}
								alt=""
								className="absolute right-0 bottom-0 w-[128px] translate-y-[85px] -z-[1]"
							/>
						</div>
					)}
					<div className="flex flex-col gap-[1.5rem]">
						<h1>
							<span className="text-[var(--header)] inline-block">
								{header1}
							</span>{" "}
							<span className="text-[var(--highlight)] inline-block">
								{header2}
							</span>
						</h1>
						<p className="">{text}</p>
						{/* <a
							href={btnUrl}
							className="button bg-[var(--highlight)] text-white w-[197px] text-center block"
						>
							{btnText}
						</a> */}
					</div>

					{imgSide === "right" && (
						<div className="hidden md:block pt-[15px] md:pt-0 relative">
							<img src={img} alt="" className="w-full" />
							{/* Dots */}
							<img
								src={blueDots}
								alt=""
								className="absolute left-0 top-0 w-[138px] translate-x-[-65px] translate-y-[-45px] -z-[1]"
							/>
							<img
								src={orangeDots}
								alt=""
								className="absolute right-0 bottom-0 w-[128px] translate-y-[85px] -z-[1]"
							/>
						</div>
					)}

					{/* IMAGE ON MOBILE SCREEN */}
					<div className="md:hidden pt-[15px] md:pt-0 relative">
						<img src={img} alt="" className="w-full" />
						{/* Dots */}
						<img
							src={blueDots}
							alt=""
							className="absolute left-0 top-0 w-[100px] translate-x-[-1rem] translate-y-[-15px] -z-[1]"
						/>
						<img
							src={orangeDots}
							alt=""
							className="absolute right-0 bottom-0 w-[100px] translate-y-[45px] -z-[1]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
