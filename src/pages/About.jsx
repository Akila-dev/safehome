import React from "react";

import {
	Hero2,
	VisionMissionCard,
	TrackRecord,
	JoinUsCTA,
} from "../components";

// IMPORTING ALL IMAGES START
import about from "../assets/about.png";
import about1 from "../assets/real-estate.png";
import about2 from "../assets/mastery-of-finance.png";
import about3 from "../assets/strong-portfolio.png";
import about4 from "../assets/strategic-leadership.png";

const About = () => {
	return (
		<div className="pt-[80px]">
			<Hero2
				img={about}
				header1="About"
				header2="Safe-Home"
				text="At Safehome, we are more than just a financial platform; we are a community-driven  Multipurpose Cooperative Society. Our vision is to empower young professionals and entrepreneurs by providing access to well curated wealth creation opportunities."
				imgSide="right"
			/>
			{/* Mission and Vision Statement */}
			<div className="pt-[35px] pb-[60px] md:py-[50px] bg-[var(--light-bg)]">
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] lg:gap-[2rem]">
					<VisionMissionCard
						title="Our Mission Statement"
						text="Our mission is to build a reliable and inclusive platform that coordinates private funds, offering a secure source of credit and investment opportunities. We are committed to providing expert guidance, exceptional security, and user-friendly tools for our members' financial growth."
					/>
					<VisionMissionCard
						title="Our Vision Statement"
						text="At Safe-home Cooperative, our vision is to create a dynamic and united community of thriving  professionals and entrepreneurs, fostering financial empowerment, and enabling our members to realize their dreams through smart investments and collective strength."
					/>
				</div>
			</div>
			{/* CTA */}
			<JoinUsCTA />
			{/* Track Record */}
			<div className="pt-[35px] pb-[35px] md:pt-[100px] md:pb-[50px] container">
				<div className="flex flex-col gap-[15px] max-w-[836px] mx-auto text-center">
					<h1 className="text-[var(--highlight)] lg:scale-90">
						Our Track Record
					</h1>
					<p>
						At Safehome Cooperative, our founding team comprises seasoned
						professionals from the real estate and finance sectors, collectively
						boasting an impressive half-century of industry experience. With a
						wealth of knowledge and a proven track record, our experts have been
						at the forefront of the real estate and finance domains, steering
						successful ventures and managing a robust portfolio of diverse
						assets.
					</p>
				</div>
			</div>
			{/* Track record list */}
			<div className="">
				<TrackRecord
					img={about1}
					header="Expertise in Real Estate"
					text="Our real estate specialists bring unparalleled expertise in property analysis, market trends, and investment opportunities. Leveraging their extensive industry experience, they have navigated numerous successful real estate ventures, identifying high-potential properties and delivering exceptional returns to investors."
					imgSide="right"
					bg="yes"
				/>
				<TrackRecord
					img={about2}
					header="Mastery of Finance"
					text="Our finance team is equipped with a deep understanding of financial markets, investment strategies, and risk management. Their astute financial acumen has consistently enabled them to optimize investment decisions and safeguard our members' interests."
					imgSide="left"
				/>
				<TrackRecord
					img={about3}
					header="Strong Portfolio Management"
					text="With decades of combined experience, our founding team has accumulated and managed a diverse portfolio of real estate assets, ensuring the growth and stability of our cooperative's investments. This track record of portfolio management serves as a testament to their commitment to delivering financial success to our valued members."
					imgSide="right"
					bg="yes"
				/>
				<TrackRecord
					img={about4}
					header="Strategic Leadership"
					text="As industry veterans, our founding team provides strategic leadership, guiding the cooperative with a vision for sustained growth and prosperity. Their insights and foresight play a pivotal role in shaping the future of Safehome Cooperative and driving our collective success."
					imgSide="left"
				/>
			</div>
		</div>
	);
};

export default About;
