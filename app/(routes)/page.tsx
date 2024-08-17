import Music from "@/components/music";
import News from "@/components/news";
import Podcasts from "@/components/podcasts";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<main className="relative flex flex-col gap-6 min-[1400px]:container">
			<Hero />

			<Podcasts />

			<Podcasts />

			<Music />

			<News />
		</main>
	);
}
