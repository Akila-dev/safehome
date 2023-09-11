import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, About, Services } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";

import AppWrapperComp from "./components/appWrapper";
import Sidebar from "./components/appWrapper/sidebar";
import AccountPage from "./pages/account";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import Dashboard from "./pages/dashboard";
import KycPage from "./pages/kycPage";

function App() {
	let location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<div className="App">
			<AppWrapperComp>
				{splitLocation[1] === "login" ||
				splitLocation[1] === "signup" ||
				splitLocation[1] === "completeKYC" ? (
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/completeKYC" element={<KycPage />} />
					</Routes>
				) : (
					<div className="d-lg-flex">
						<div className="col-lg-2">
							<Sidebar />
						</div>
						<div className="col-lg-10">
							<div className="pages pt-4">
								<Routes>
									<Route path="/" element={<Dashboard />} />
									<Route path="/Account" element={<AccountPage />} />
								</Routes>
							</div>
						</div>
					</div>
				)}
			</AppWrapperComp>
			{/* Navigation */}
			<div className="fixed w-full z-[10000000]">
				<Navbar />
			</div>
			{/* Page Content Start */}
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/services" element={<Services />} />
			</Routes>
			{/* Page Content End */}

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
