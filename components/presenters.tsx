import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Presenters = () => {
	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none shadow-none">
			<CardHeader className="px-6 lg:px-8">
				<CardTitle>Presenters</CardTitle>
				<CardDescription>Find your favorite artists across our most popular genres</CardDescription>
			</CardHeader>

			<CardContent className="flex items-center gap-6 w-auto px-6 lg:px-8 overflow-scroll no-scrollbar">
				{Array.from({ length: 6 }).map((_, index) => (
					<div
						key={index}
						className="group cols-span-1 min-w-[200px] gap-2 w-full text-center">
						<section className="flex flex-col items-center justify-center">
							<img
								alt="Product image"
								className="aspect-square rounded-full object-cover size-[150px]"
								height="150"
								src="https://ichef.bbci.co.uk/images/ic/288x288/p0d820zg.jpg.webp"
							/>

							<p className="text-base font-bold mt-6 mb-1 leading-none">DJ Rabbit</p>
							<p className="text-sm text-muted-foreground"> Cool Nigerian Vibes</p>
						</section>
					</div>
				))}
			</CardContent>
		</Card>
	);
};

export default Presenters;
