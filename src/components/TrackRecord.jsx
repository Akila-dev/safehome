import React from "react";

const TrackRecord = ({ img, header, text, imgSide, bg }) => {
	return (
		<div
			className={`w-full pt-[35px] pb-[60px] ${bg && "bg-[var(--light-bg)]"}`}
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[0px] justify-center items-center max-w-[1000px] mx-auto">
					{imgSide === "left" && (
						<div className="hidden md:block">
							<img
								src={img}
								alt=""
								className="hidden md:block w-full max-w-[400px] float-left"
							/>
						</div>
					)}
					<div
						className={`flex flex-col gap-[1rem] md:gap-[1.5rem] ${
							imgSide === "left" && "md:pl-[30px] xl:pl-0"
						} ${imgSide === "right" && "md:pr-[30px] lg:pr-0"}`}
					>
						<h2 className="text-xl md:text-3xl lg:text-4xl">{header}</h2>
						<p className={`pr-[30px`}>{text}</p>
					</div>

					{imgSide === "right" && (
						<div className="hidden md:block">
							<img
								src={img}
								alt=""
								className="hidden md:block w-full max-w-[400px] float-right"
							/>
						</div>
					)}

					{/* IMAGE FOR MOBILE SCREEN */}
					<div className="md:hidden pt-[30px]">
						<img
							src={img}
							alt=""
							className=" w-full max-w-[400px] float-right"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrackRecord;
