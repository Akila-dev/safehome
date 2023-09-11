import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

const DashboardLayout = () => {
	return (
		<div className="App">
			{/* Navigation */}
			<div className="fixed w-full z-[10000000]">
				<Navbar />
			</div>

			<Outlet />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default DashboardLayout;
