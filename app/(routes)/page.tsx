import Music from "@/components/music";
import News from "@/components/news";
import Podcasts from "@/components/podcasts";
import Hero from "@/components/hero";
import Radio from "@/components/radio";
import { Separator } from "@/components/ui/separator";
import Countdown from "@/components/countdown";
import PlayList from "@/components/playlist";
import Advert from "@/components/layouts/advert";

export default function Home() {
	return (
		<main className="relative flex flex-col min-[1400px]:container">
			{process.env.NEXT_PUBLIC_NODE_ENV === "development" ? (
				<>
					<Hero />

					<Radio />

					<Podcasts />

					<Advert />

					<Separator />

					<Music />

					<PlayList />

					<News />
				</>
			) : (
				<section className="w-dvw h-dvh flex items-center justify-center">
					<Countdown />
				</section>
			)}
		</main>
	);
}
