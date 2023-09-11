import "./App.css";
import { Home, About, Services } from "./pages";
import { Routes, Route } from "react-router-dom";
import {
	WebPageLayout,
	DashboardLayout,
	AuthLayout,
} from "./components/appWrapper";
import {
	Login,
	Signup,
	EmailVerification,
	KycVerification,
	VisualVerification,
	Reviewing,
} from "./pages/auth";
import {
	Account,
	DashboardHome,
	Investment,
	Loan,
	Savings,
} from "./pages/dashboard";

function App() {
	return (
		<div className="App">
			<div>
				<Routes>
					{/* Auth related Routes */}
					<Route element={<AuthLayout />}>
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/signup" element={<Signup />} />
						<Route
							exact
							path="/email-verification"
							element={<EmailVerification />}
						/>
						<Route
							exact
							path="/kyc-verification"
							element={<KycVerification />}
						/>
						<Route
							exact
							path="/visual-verification"
							element={<VisualVerification />}
						/>
						<Route exact path="/reviewing" element={<Reviewing />} />
					</Route>
					{/* Dashboard related Routes */}
					<Route element={<DashboardLayout />}>
						<Route exact path="/dashboard" element={<DashboardHome />} />
						<Route exact path="/account" element={<Account />} />
						<Route exact path="/investment" element={<Investment />} />
						<Route exact path="/loan" element={<Loan />} />
						<Route exact path="/savings" element={<Savings />} />
					</Route>
					{/* Web page related Routes */}
					<Route element={<WebPageLayout />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/services" element={<Services />} />
						<Route exact path="/products" element={<Home />} />
						<Route exact path="/membership" element={<Home />} />
						<Route exact path="/contact" element={<Home />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
