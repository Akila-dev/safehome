import React from "react";

const JoinUsCTA = () => {
	return (
		<div className="bg-[var(--light-highlight)] py-[35px] md:py-[50px]">
			<div className="container">
				<div className="md:max-w-[500px] xl:max-w-[639px] mx-auto text-center flex flex-col gap-[25px] items-center">
					<h3 className="text-[32px] leading-[45.2px] sm:text-[35px] sm:leading-[48.2px] md:text-[40px] md:leading-[58.2px] xl:text-[50px] xl:leading-[67.2px] font-semibold">
						Join us and be a part of Safe-Home today.
					</h3>
					<a
						href="/"
						className="bg-[var(--highlight)] text-white w-[256px] py-3 rounded-[2rem]"
					>
						Become an Affiliate
					</a>
				</div>
			</div>
		</div>
	);
};

export default JoinUsCTA;
