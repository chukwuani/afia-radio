import Image from "next/image";

import { MobileNav } from "@/components/layouts/mobile-nav";
import MainNav from "@/components/layouts/main-nav";
import SearchComboBox from "@/components/search-combobox";

export default function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-background">
			<div className="px-6 lg:px-14 py-2 flex  items-center">
				<Image
					src="/images/afia-indent.png"
					alt="Afia Radio Home"
					width={30}
					height={30}
				/>

				<MainNav />

				<SearchComboBox />

				<MobileNav />
			</div>
		</header>
	);
}
