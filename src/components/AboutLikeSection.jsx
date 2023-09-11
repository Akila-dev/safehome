import React from "react";

const AboutLikeSection = ({
	bg,
	img,
	header,
	text,
	btnText,
	btnUrl,
	imgSide,
}) => {
	return (
		<div
			className={`${
				bg && "bg-[var(--light-bg)]"
			} w-full pt-[35px] pb-[60px] md:pt-[50px] md:pb-[100px]`}
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[100px] items-center max-w-[1000px] mx-auto">
					{imgSide === "left" && (
						<div className="hidden md:block pt-[15px] md:pt-0">
							<img src={img} alt="" className="w-full" />
						</div>
					)}
					<div className="flex flex-col gap-[1.5rem]">
						<h1>{header}</h1>
						<p className="">{text}</p>
						<a
							href={btnUrl}
							className="button bg-[var(--highlight)] text-white w-[197px] text-center block"
						>
							{btnText}
						</a>
					</div>

					{imgSide === "right" && (
						<div className="hidden md:block pt-[15px] md:pt-0">
							<img src={img} alt="" className="w-full" />
						</div>
					)}

					{/* IMAGE ON MOBILE SCREEN */}
					<div className="md:hidden pt-[15px] md:pt-0">
						<img src={img} alt="" className="w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutLikeSection;
