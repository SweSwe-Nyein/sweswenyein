import { Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from "@/components";
import Footer from "@/components/Footer";
import Test from "@/components/Test";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="relative z-0">
				<div className="fixed inset-0">
					<StarsCanvas />
				</div>
				<Navbar />
				<Hero />
				<Tech />
				<Experience />
				<Works />
				<Contact />
				<Footer />
				<Test />
			</div>
		</div>
	);
}
