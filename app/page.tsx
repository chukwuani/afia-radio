import News from "@/components/news";
import Hero from "@/components/hero";
import Shows from "@/components/shows";
import WeeklyCountdown from "@/components/weekly-countdown";
import Advert from "@/components/layouts/advert";

export default async function Home() {
	return (
		<main className="relative flex flex-col min-[1400px]:container">
			<Hero />

			<Shows />

			<Advert />

			<WeeklyCountdown />

			<News />
		</main>
	);
}
