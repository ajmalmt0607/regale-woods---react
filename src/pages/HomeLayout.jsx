import { Outlet } from "react-router-dom";
import { Header, Navbar, Footer } from "../components";

const HomeLayout = () => {
	return (
		<div className="">
			<Header />
			<Navbar />
			<section className="align-element py-20">
				<Outlet />
			</section>
			<Footer />
		</div>
	);
};

export default HomeLayout;
