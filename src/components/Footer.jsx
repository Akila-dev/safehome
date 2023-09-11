import React from "react";

import { DownloadCTA } from "../components";

import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/safehome-logo.png";

const Footer = () => {
	return (
		<div>
			<DownloadCTA />
			<div>
				<div className="bg-[var(--secondary)] py-[50px] text-white">
					<div className="container flex flex-col lg:flex-row justify-between gap-6 lg:gap-[2rem] xl:gap-[3.5rem]">
						<div className="max-w-[200px]">
							<img
								src={logo}
								alt="logo"
								className="w-[150.9px] h-[66px] mb-7"
							/>
							<p className="footer-link">
								Lorem ipsum dolor sit amet consectetur. Elit viverra dignissim
								et in varius at ut mattis.
							</p>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 lg:gap-2">
							<div>
								<h5 className="footer-header">ABOUT</h5>
								<a className="footer-link" href="/about">
									Vision & Mission
								</a>
								<a className="footer-link" href="/about">
									Objectives
								</a>
							</div>
							<div>
								<h5 className="footer-header">SERVICES</h5>
								<a className="footer-link" href="/services">
									Investment
								</a>
								<a className="footer-link" href="/services">
									Savings
								</a>
								<a className="footer-link" href="/services">
									Credit
								</a>
							</div>
							<div>
								<h5 className="footer-header">MEMBERSHIP</h5>
								<a className="footer-link" href="/">
									Silver
								</a>
								<a className="footer-link" href="/">
									Gold
								</a>
							</div>
							<div>
								<h5 className="footer-header">LEGAL</h5>
								<a className="footer-link" href="/">
									Privacy Policy
								</a>
								<a className="footer-link" href="/">
									Terms of Use
								</a>
								<a className="footer-link" href="/">
									Disclaimer
								</a>
							</div>
						</div>
						<div className="lg:text-right max-w-[200px]">
							<h5 className="footer-header">CONTACT</h5>
							<div className="flex lg:justify-end gap-3 pt-2 pb-6">
								<a className="icon-link" href="/">
									<img src={facebook} alt="facebook" />
								</a>
								<a className="icon-link" href="/">
									<img src={twitter} alt="twitter" />
								</a>
								<a className="icon-link" href="/">
									<img src={linkedin} alt="linked in" />
								</a>
							</div>
							<a className="footer-link" href="/">
								+234 907 000 0000
							</a>
							<a className="footer-link" href="/">
								Hello@safehome.com
							</a>
						</div>
					</div>
				</div>
				<div className="h-[50px] bg-[var(--highlight)]"></div>
			</div>
		</div>
	);
};

export default Footer;
