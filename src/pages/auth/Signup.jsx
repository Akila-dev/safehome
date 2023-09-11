import React from "react";
import { useNavigate } from "react-router-dom";

// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

// import gradient from "../../assets/particles/gradient-bg.png";
import pattern from "../../assets/particles/pattern-bg.png";
import cross from "../../assets/particles/cross.png";
import triangle from "../../assets/particles/triangle.png";
import sphere from "../../assets/particles/sphere.png";
import wriggle from "../../assets/particles/wriggle.png";
import logo from "../../assets/auth-logo.png";

const Signup = () => {
	const navigate = useNavigate();

	return (
		<div className="relative w-full min-h-screen orange-gradient-bg">
			{/* Background */}
			<img
				src={pattern}
				alt=""
				className="absolute top-0 left-0 h-full w-full object-cover opacity-[0.035]"
			/>
			<img
				src={sphere}
				alt=""
				className="absolute top-0 left-0 w-[100px] md:w-[250px]"
			/>
			<img
				src={wriggle}
				alt=""
				className="absolute top-0 right-0 w-[100px] md:w-[150px]"
			/>
			<img
				src={triangle}
				alt=""
				className="absolute bottom-0 left-0 w-[100px] md:w-[180px]"
			/>
			<img
				src={cross}
				alt=""
				className="absolute bottom-0 right-0 w-[100px] md:w-[180px]"
			/>

			{/* Content */}
			<div className="z-[10] left-0 right-0 min-h-screen h-full flex items-center justify-center py-[50px] md:py-[80px]">
				<div className="container z-[10]">
					<div className="w-full max-w-[750px] mx-auto text-center flex flex-col gap-8 items-center">
						<a href="/" className="pb-2">
							<img src={logo} alt="" className="w-[100px]" />
						</a>
						<div className="bg-white rounded-2xl shadow px-[1rem] py-[2.5rem] md:p-[2.5rem] w-full">
							<h3 className="text-[var(--highlight)] font-semibold">
								Login to your Account
							</h3>
							<p>Securely login to your safeHome</p>
							<form
								action=""
								className="signin-form pt-7 flex flex-col items-center gap-7 w-full"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
									<div>
										<label htmlFor="">Firstname</label>
										<input type="text" placeholder="Individual" />
									</div>
									<div>
										<label htmlFor="">Surname</label>
										<input type="text" placeholder="Individual" />
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
									<div>
										<label htmlFor="">Email</label>
										<input type="text" placeholder="Individual" />
									</div>
									<div>
										<label htmlFor="">Phone Number</label>
										<input type="text" placeholder="Individual" />
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
									<div>
										<label htmlFor="">Password</label>
										<input type="password" placeholder="Individual" />
									</div>
									<div>
										<label htmlFor="">Confirm Password</label>
										<input type="password" placeholder="Individual" />
									</div>
								</div>
								<div className="pt-3 w-full max-w-[300px]">
									<button>Log In</button>
								</div>
							</form>
						</div>
						<div className="text-white flex flex-col gap-4 drop-shadow-md shadow-white">
							<button onClick={() => navigate("/login")}>
								Already have an account? Log In
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
