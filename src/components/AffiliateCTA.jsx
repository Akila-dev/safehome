import React from "react";

const AffiliateCTA = () => {
	return (
		<div className="bg-[var(--light-bg)] py-[35px] md:py-[70px]">
			<div className="container">
				<div className="max-w-[599px] mx-auto flex flex-col items-center text-center gap-[20px]">
					<h1 className="text-[var(--highlight)]">Be an Affiliate</h1>
					<h3>
						Join Safe-Home as an affiliate today and earn up to 20% per
						referral.
					</h3>
					<a
						href="/"
						className="bg-[var(--header)] text-white w-[256px] py-3 rounded-[2rem]"
					>
						Become an Affiliate
					</a>
				</div>
			</div>
		</div>
	);
};

export default AffiliateCTA;
