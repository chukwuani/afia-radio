import Music from "@/components/music";
import News from "@/components/news";
import Podcasts from "@/components/podcasts";
import Hero from "@/components/hero";
import Radio from "@/components/radio";
import Presenters from "@/components/presenters";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="relative flex flex-col min-[1400px]:container">
			<Hero />

			<Radio />
			<Separator />
			<Podcasts />
			<img
				className="mx-auto my-4"
				loading="lazy"
				decoding="async"
				src="https://popcentraltv.com/wp-content/uploads/2024/04/banner-gif.gif"
				width="1200"
				height="250"
				alt="Demo"></img>
			<Music />
			<Separator />
			<News />
			<Separator />
			<Presenters />
		</main>
	);
}
