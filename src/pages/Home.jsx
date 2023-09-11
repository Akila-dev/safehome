import {
	Hero,
	AboutLikeSection,
	AffiliateCTA,
	Card,
	WhatWeOffer,
	WhyChooseUs,
} from "../components";

// IMPORTING ALL IMAGES START
import about from "../assets/about.png";
import membership from "../assets/membership.png";
import peopleIcon from "../assets/people-icon.png";
import walletIcon from "../assets/wallet-icon.png";
import investmentIcon from "../assets/investment-icon.png";
import about1 from "../assets/about-1.png";
import about2 from "../assets/about-2.png";
import about3 from "../assets/about-3.png";
import about4 from "../assets/about-4.png";
import accessIcon from "../assets/access-icon.png";
import portfolioIcon from "../assets/portfolio-icon.png";
// IMPORTING ALL IMAGES END

function Home() {
	return (
		<div className="App">
			{/* Hero Section */}
			<Hero />
			{/* About Us */}
			<AboutLikeSection
				bg={true}
				img={about}
				header="About Us"
				text="At Safe-home, we are more than just a financial platform; we are a community-driven Multipurpose Coorperative Society. Our vision is to empower young professionals and entrepreneurs by providing access to well curated wealth creation opportunities."
				btnText="Learn More"
				btnUrl="/about"
				imgSide="right"
			/>
			{/* Membership */}
			<AboutLikeSection
				img={membership}
				header="Membership"
				text="Joining Safehome is your gateway to financial empowerment. By paying a one-time fee, you become a valued member, gaining access to exclusive benefits and opportunities."
				btnText="Become a Member"
				btnUrl="/"
				imgSide="left"
			/>
			{/* Affiliate CTA */}
			<AffiliateCTA />
			{/* Our Products */}
			<div className="pt-[35px] pb-[60px] md:py-[100px] container">
				<div className="flex flex-col gap-[15px] max-w-[604px] mx-auto text-center">
					<h1>Our Products</h1>
					<p>
						Our Product range of offerings are designed to enhance your
						cooperative experience, reflect our commitment to quality,
						collaboration, and community growth.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] md:gap-[2rem] pt-[35px] md:pt-[50px]">
					<Card
						icon={peopleIcon}
						title="Investments"
						text="Explore carefully curated investment opportunities."
					/>
					<Card
						icon={walletIcon}
						title="Savings"
						text="Cultivate towards your financial goals with personalized savings plans."
					/>
					<Card
						icon={investmentIcon}
						title="Loans"
						text="Enjoy access to credit with competitive interest rates, tailored to suit your personal or business needs."
					/>
				</div>
			</div>
			{/* What we Offer */}
			<WhatWeOffer />
			{/* Why Choose Us */}
			<div className="pt-[35px] pb-[35px] md:py-[100px]">
				<h1 className="text-[var(--highlight)] text-center">Why Choose Us</h1>
				<div className="pt-[0px] lg:pt-[50px]">
					<WhyChooseUs
						img={about1}
						header="Online Accessibility"
						text="Access all the features of a cooperative society and much more online anytime and anywhere from your comfort Zone."
						imgSide="right"
					/>
					<WhyChooseUs
						img={about2}
						header="Expert Curation"
						text="Our team of real estate and finance experts handpick the best investment opportunities and offer valuable advice to our members."
						imgSide="left"
					/>
					<WhyChooseUs
						img={about3}
						header="Top-Notch Security"
						text="Your funds are safeguarded with the best-in-class security measures, ensuring peace of mind."
						imgSide="right"
					/>
					<WhyChooseUs
						img={about4}
						header="Community Focus"
						text="We prioritize community growth, providing easy-to-use tools for financial advancement."
						imgSide="left"
					/>
				</div>
			</div>

			{/* Our Products */}
			<div className="pb-[60px] md:pb-[100px] container">
				<div className="flex flex-col gap-[15px] max-w-[604px] mx-auto text-center">
					<h1>How Safe-Home Works</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-[1.3rem] md:gap-[2rem] pt-[35px] md:pt-[50px]">
					<Card
						icon={peopleIcon}
						title="Become a Member"
						text="Register on the web or download our app from the app store."
					/>
					<Card
						icon={accessIcon}
						title="Get Access"
						text="Access investment opportunities and savings plans available."
					/>
					<Card
						icon={portfolioIcon}
						title="Portfolio"
						text="After becoming a member and has access, then watch your portfolio grow."
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
