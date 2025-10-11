import axios from "axios";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScheduleTabs from "@/components/schedule-tabs";

import { ScheduleWithShowAndHost } from "@/types";
import { Suspense } from "react";

export default async function RadioSchedule() {
	const { data: schedule } = await axios.get<ScheduleWithShowAndHost[]>(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/shows/schedule`
	);

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-0 bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand font-anton text-[36px] md:text-[50px] leading-[1.1em] font-normal tracking-[.5px]">
						Daily Radio Schedule
					</CardTitle>
					<CardDescription className="font-dm-sans text-muted-foreground text-sm md:text-base">
						Stay tuned to your favorite shows and never miss a beat.
					</CardDescription>
				</CardHeader>
			</section>

			<Suspense fallback={<p>...</p>}>
				<ScheduleTabs data={schedule} />
			</Suspense>
		</Card>
	);
}
