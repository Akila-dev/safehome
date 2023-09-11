import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/logo-colored.png";

import { IoCloseSharp } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Navlink = ({ nav, link }) => {
	const location = useLocation();

	return (
		<div
			className={`${
				location.pathname === link
					? "text-[var(--highlight)]"
					: "text-[var(--header)]"
			} hover:text-[var(--highlight)] font-[500] border-b lg:border-0 border-[var(--card-bg)] w-full lg:w-auto pb-3 px-1 lg:p-0`}
		>
			<a href={link}>{nav}</a>
		</div>
	);
};

const Navbar = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="h-[80px] w-full bg-white shadow">
			<div className="px-[1.3rem] md:px-[3rem] lg:px-[6rem] flex items-center justify-between h-full">
				<div className="z-[1]">
					<a href="/">
						<img src={logo} alt="logo" className="w-[91.48px] h-[40px]" />
					</a>
				</div>
				<div className="hidden lg:flex w-full items-center justify-center gap-8">
					<Navlink nav="About Us" link="/about" />
					<Navlink nav="Services" link="/services" />
					<Navlink nav="Products" link="/products" />
					<Navlink nav="Membership" link="/membership" />
					<Navlink nav="Contact" link="/contact" />
				</div>
				<div>
					<div className="py-5 hidden lg:flex flex-col md:flex-row gap-3 items-center">
						<button
							className="w-[109px] h-[40px] bg-white text-[var(--highlight)] border border-[var(--highlight)] p-1 rounded-[2rem] text-center shadow"
							onClick={() => navigate("/login")}
						>
							Log in
						</button>
						<button
							className="w-[109px] h-[40px] text-white bg-[var(--highlight)] border border-[var(--highlight)] p-1 rounded-[2rem] text-center shadow"
							onClick={() => navigate("/signup")}
						>
							Sign Up
						</button>
					</div>
				</div>
				<div className="z-[1]">
					<button
						className="lg:hidden text-3xl pt-1 "
						onClick={() => setNavIsOpen((prev) => !prev)}
					>
						{navIsOpen ? (
							<IoCloseSharp className="text-white " />
						) : (
							<HiMiniBars3CenterLeft />
						)}
					</button>
				</div>
			</div>

			{/* Mobile screen navigation */}
			{navIsOpen && (
				<div className="fixed lg:hidden top-0 right-0 h-screen w-full bg-[rgba(0,0,0,0.5)]">
					{/* <div className="w-full fixed top-0 right-0 py-4 px-2 text-center text-gray-400">
						<button
							className="text-[2rem] p-2"
							onClick={() => setNavIsOpen(false)}
						>
							<IoCloseSharp />
						</button>
					</div> */}
					<div className="flex w-[215px] h-full flex-col items-start justify-between bg-white pt-[100px] pb-[2rem] px-[1.5rem] shadow">
						<div className="flex flex-col items-start gap-4 w-full">
							<Navlink nav="About Us" link="/about" />
							<Navlink nav="Services" link="/services" />
							<Navlink nav="Products" link="/products" />
							<Navlink nav="Membership" link="/membership" />
							<Navlink nav="Contact" link="/contact" />
						</div>
						<div className="py-5 flex lg:hidden flex-col gap-3 items-center w-full">
							<button
								className="w-full h-[40px] bg-white text-[var(--highlight)] border border-[var(--highlight)] p-1 rounded-[2rem] text-center shadow"
								onClick={() => navigate("/login")}
							>
								Log in
							</button>
							<button
								className="w-full h-[40px] text-white bg-[var(--highlight)] border border-[var(--highlight)] p-1 rounded-[2rem] text-center shadow"
								onClick={() => navigate("/signup")}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
