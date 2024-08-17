import { MobileNav } from "@/components/layouts/mobile-nav";
import MainNav from "./main-nav";

export default function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-background">
			<div className="px-8 py-2 flex  items-center">
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
}
