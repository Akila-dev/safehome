import React from "react";

// import gradient from "../../assets/particles/gradient-bg.png";
import pattern from "../../assets/particles/pattern-bg.png";
import cross from "../../assets/particles/cross.png";
import triangle from "../../assets/particles/triangle.png";
import sphere from "../../assets/particles/sphere.png";
import wriggle from "../../assets/particles/wriggle.png";
import logo from "../../assets/auth-logo.png";

const Login = () => {
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
			<div className="z-[10] left-0 right-0 min-h-screen h-full flex items-center justify-center py-[80px]">
				<div className="container z-[10]">
					<div className="w-full max-w-[450px] mx-auto text-center flex flex-col gap-8 items-center">
						<a href="/" className="pb-2">
							<img src={logo} alt="" className="w-[91.48px] h-[40px]" />
						</a>
						<div className="bg-white rounded-2xl shadow px-[1.5rem] py-[2.5rem] md:p-[2.5rem] w-full">
							<h3 className="text-[var(--highlight)] font-semibold">
								Login to your Account
							</h3>
							<p>Securely login to your safeHome</p>
							<form
								action=""
								className="signin-form pt-7 flex flex-col gap-7 w-full"
							>
								<div>
									<label htmlFor="">Full Name</label>
									<input type="text" placeholder="Individual" />
								</div>
								<div>
									<label htmlFor="">Email</label>
									<input type="text" placeholder="Individual" />
								</div>
								<div className="pt-3">
									<button>Log In</button>
								</div>
							</form>
						</div>
						<div className="text-white flex flex-col gap-4 drop-shadow-md shadow-white">
							<button>Don't have an account? Create account</button>
							<button>Forgot Password?</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
