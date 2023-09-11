import React from "react";

import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const DownloadCTA = () => {
	return (
		<div className="bg-[var(--light-highlight)] py-[35px] md:py-[50px]">
			<div className="container">
				<div className="max-w-[882px] mx-auto text-center flex flex-col gap-[20px] items-center">
					<h3 className="text-[32px] leading-[45.2px] sm:text-[35px] sm:leading-[48.2px] md:text-[40px] md:leading-[58.2px] lg:text-[45px] lg:leading-[60.2px] xl:text-[48px] xl:leading-[67.2px] text-[var(--highlight)] font-semibold">
						Download our mobile app on both PlayStore and AppStore
					</h3>
					<div className="py-5 flex flex-col md:flex-row gap-3">
						<button className="w-[175px] h-[58px] md:w-[185px] md:h-[63px] bg-[var(--secondary)] p-3 rounded-2xl text-center shadow">
							<img src={playstore} alt="" className="h-full inline" />
						</button>
						<button className="w-[175px] h-[58px] md:w-[185px] md:h-[63px] bg-[var(--highlight2)] p-3 rounded-2xl text-center shadow">
							<img src={appstore} alt="" className="h-full inline" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DownloadCTA;
