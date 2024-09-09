import Countdown from "@/components/countdown";

export default async function Home() {
	return (
		<main className="relative flex flex-col min-[1400px]:container">
			<Countdown />
		</main>
	);
}
