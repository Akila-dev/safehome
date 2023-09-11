import React from "react";

// import { Card, VisionMissionCard, TrackRecord, JoinUsCTA } from "../components";
import { TrackRecord, Card, JoinUsCTA } from "../components";

// IMPORTING ALL IMAGES START
import goalbased from "../assets/goal-based.png";
import lockedsavings from "../assets/locked-savings.png";
import realEstateOppurtunities from "../assets/real-estate-oppurtunities.png";

import switchIcon from "../assets/switchIcon.png";
import documentsIcon from "../assets/switchIcon.png";
import marketplaceIcon from "../assets/marketplaceIcon.png";
import officeIcon from "../assets/officeIcon.png";

const Services = () => {
	return (
		<div className="pt-[80px]">
			<div className="bg-[var(--light-highlight2)] pt-[70px] pb-[35px] md:pt-[100px] md:pb-[50px]">
				<div className="container">
					<div className="md:max-w-[500px] mx-auto md:text-center flex flex-col gap-[25px] md:items-center">
						<h1 className="text-[var(--header)]">Savings</h1>
						<p>
							At Safe-home Cooperative, we offer two types of savings plans to
							suit your financial objectives.
						</p>
					</div>
				</div>
			</div>

			<div className="pt-[25px] md:pt-[50px]">
				<TrackRecord
					img={goalbased}
					header="Goal Based Savings"
					text="With our goal-based savings plan, you can set specific financial targets and save towards achieving them. Whether it's a dream vacation, buying a car, or creating an emergency fund, this plan allows you to stay focused on your objectives. If you withdraw funds before reaching your goal, you will forfeit all earned interests and incur a small fine/fee."
					imgSide="right"
				/>
				<TrackRecord
					img={lockedsavings}
					header="Locked Savings"
					text="Our time-based savings plan provides flexibility by allowing you to set a savings duration. Whether it's short-term or long-term, this plan offers attractive interest rates to boost your savings. Similar to the goal-based plan, early withdrawals will result in the loss of accrued interests and a small fine/fee."
					imgSide="left"
				/>
			</div>

			<div className="bg-[var(--light-highlight2)] pt-[70px] pb-[35px] md:pt-[100px] md:pb-[50px]">
				<div className="container">
					<div className="md:max-w-[500px] mx-auto md:text-center flex flex-col gap-[25px] md:items-center">
						<h1 className="text-[var(--header)]">Investments</h1>
						<p>
							Explore our diverse and carefully selected real estate investment
							opportunities with high yields.
						</p>
					</div>
				</div>
			</div>

			<div className="pt-[25px] md:pt-[50px]">
				<TrackRecord
					img={realEstateOppurtunities}
					header="Real Estate Opportunities"
					text="Our cooperative specializes in real estate investments known for their lucrative returns. Partnering with industry experts, we identify properties with great potential, ensuring a secure and rewarding investment journey for our members. As we grow, we'll continue to introduce other exciting investment opportunities. These opportunities include:"
					imgSide="right"
				/>
			</div>

			<div className="py-[35px] bg-[var(--light-bg)]">
				<div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[1.5rem] md:gap-[2rem]">
					<Card
						icon={switchIcon}
						title="Land Owners Club"
						text="Invest in land units across various locations for steady passive rental income."
					/>
					<Card
						icon={marketplaceIcon}
						title="Shop Owners Club"
						text="Own units in bustling commercial spaces and earn from vibrant retail markets."
					/>
					<Card
						icon={officeIcon}
						title="Office Owners Club"
						text="Join a community of investors in prime office spaces, generating consistent rental returns."
					/>
					<Card
						icon={documentsIcon}
						title="Home Owners Club"
						text="Experience the pride and security of earning passively and owning units of residential properties across sought-after neighborhoods."
					/>
				</div>
			</div>

			<div className="bg-[var(--light-highlight2)] pt-[70px] pb-[35px] md:pt-[100px] md:pb-[50px]">
				<div className="container">
					<div className="md:max-w-[500px] mx-auto md:text-center flex flex-col gap-[25px] md:items-center">
						<h1 className="text-[var(--header)] flex gap-4 items-center">
							Loans{" "}
							<span className="text-xl md:text-3xl text-gray-400 inline-block">
								(Coming Soon)
							</span>
						</h1>
						<p>
							Stay tuned for future updates! Soon, we will introduce a loan
							system to our members, offering additional financial opportunities
							and services to further enrich your cooperative experience.
						</p>
					</div>
				</div>
			</div>

			{/* CTA */}
			<JoinUsCTA />

			<div className="container py-[35px] md:py-[80px]">
				<h3 className="multi-color-text text-center md:text-[2rem] md:leading-[3.3rem] xl:text-[2.5rem] xl:leading-[3.8rem] max-w-[850px] mx-auto">
					At Safe-home <span>Cooperative</span>, we prioritize <span>your</span>{" "}
					financial growth <span>and</span> security. <span>Our</span> savings{" "}
					<span>and</span> investment <span>plans are</span> tailored{" "}
					<span>to</span> empower <span>you in</span> achieving{" "}
					<span>your</span> goals while <span>promoting</span> financial
					discipline. Join <span>us today</span> and embark <span>on a</span>{" "}
					journey <span>of</span> prosperity <span>and</span> success.
				</h3>
			</div>
		</div>
	);
};

export default Services;
