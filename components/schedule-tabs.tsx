"use client";

import Link from "next/link";

import { Tabs, Tab } from "@nextui-org/react";

import { CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { ScheduleWithShow } from "@/types";

const ScheduleTabs = ({ data }: { data: ScheduleWithShow[] }) => {
	return (
		<Tabs
			variant="underlined"
			size="lg"
			fullWidth
			aria-label="Schedule Tabs">
			<Tab
				key="Sunday"
				title="Sunday">
				<section className="flex flex-col gap-5">
					<CardContent className="flex flex-col gap-6 lg:gap-8 w-full px-0">
						{data
							.filter((item) => item.day === "SUNDAY")
							.map((item, index) => (
								<Link
									key={index}
									href={`/radio/${item.showId}`}
									className="group flex gap-2 w-full text-left">
									<div className="flex items-center gap-4">
										<Avatar className="size-32 md:size-40 rounded-sm">
											<AvatarImage
												src={item.show.coverArt}
												alt={item.show.title}
											/>
										</Avatar>

										<div className="grid gap-1 max-w-[500px]">
											<p className="text-sm text-muted-foreground font-medium">
												{item.startTime} - {item.endTime}
											</p>
											<p className="text-sm  leading-none  font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
												{item.show.title}
											</p>
											<p className="text-sm text-muted-foreground line-clamp-3">
												{item.show.description}
											</p>
										</div>
									</div>
								</Link>
							))}
					</CardContent>
				</section>
			</Tab>

			<Tab
				key="Monday"
				title="Monday">
				<section className="flex flex-col gap-5">
					<CardContent className="flex flex-col gap-6 lg:gap-8 w-full px-0">
						{data
							.filter((item) => item.day === "MONDAY")
							.map((item, index) => (
								<Link
									key={index}
									href={`/radio/${item.showId}`}
									className="group flex gap-2 w-full text-left">
									<div className="flex items-center gap-4">
										<Avatar className="size-32 md:size-40 rounded-sm">
											<AvatarImage
												src={item.show.coverArt}
												alt={item.show.title}
											/>
										</Avatar>

										<div className="grid gap-1 max-w-[500px]">
											<p className="text-sm text-muted-foreground font-medium">
												{item.startTime} - {item.endTime}
											</p>
											<p className="text-sm  leading-none  font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
												{item.show.title}
											</p>
											<p className="text-sm text-muted-foreground line-clamp-3">
												{item.show.description}
											</p>
										</div>
									</div>
								</Link>
							))}
					</CardContent>
				</section>
			</Tab>

			<Tab
				key="Tuesday"
				title="Tuesday">
				<section className="flex flex-col gap-5">
					<CardContent className="flex flex-col gap-6 lg:gap-8 w-full px-0">
						{data
							.filter((item) => item.day === "TUESDAY")
							.map((item, index) => (
								<Link
									key={index}
									href={`/radio/${item.showId}`}
									className="group flex gap-2 w-full text-left">
									<div className="flex items-center gap-4">
										<Avatar className="size-32 md:size-40 rounded-sm">
											<AvatarImage
												src={item.show.coverArt}
												alt={item.show.title}
											/>
										</Avatar>

										<div className="grid gap-1 max-w-[500px]">
											<p className="text-sm text-muted-foreground font-medium">
												{item.startTime} - {item.endTime}
											</p>
											<p className="text-sm  leading-none  font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
												{item.show.title}
											</p>
											<p className="text-sm text-muted-foreground line-clamp-3">
												{item.show.description}
											</p>
										</div>
									</div>
								</Link>
							))}
					</CardContent>
				</section>
			</Tab>

			<Tab
				key="Wednesday"
				title="Wednesday">
				<section className="flex flex-col gap-5">
					<CardContent className="flex flex-col gap-6 lg:gap-8 w-full px-0">
						{data
							.filter((item) => item.day === "WEDNESDAY")
							.map((item, index) => (
								<Link
									key={index}
									href={`/radio/${item.showId}`}
									className="group flex gap-2 w-full text-left">
									<div className="flex items-center gap-4">
										<Avatar className="size-32 md:size-40 rounded-sm">
											<AvatarImage
												src={item.show.coverArt}
												alt={item.show.title}
											/>
										</Avatar>

										<div className="grid gap-1 max-w-[500px]">
											<p className="text-sm text-muted-foreground font-medium">
												{item.startTime} - {item.endTime}
											</p>
											<p className="text-sm  leading-none  font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
												{item.show.title}
											</p>
											<p className="text-sm text-muted-foreground line-clamp-3">
												{item.show.description}
											</p>
										</div>
									</div>
								</Link>
							))}
					</CardContent>
				</section>
			</Tab>

			<Tab
				key="Thursday"
				title="Thursday">
				<section className="flex flex-col gap-5">
					<CardContent className="flex flex-col gap-6 lg:gap-8 w-full px-0">
						{data
							.filter((item) => item.day === "THURSDAY")
							.map((item, index) => (
								<Link
									key={index}
									href={`/radio/${item.showId}`}
									className="group flex gap-2 w-full text-left">
									<div className="flex items-center gap-4">
										<Avatar className="size-32 md:size-40 rounded-sm">
											<AvatarImage
												src={item.show.coverArt}
												alt={item.show.title}
											/>
										</Avatar>

										<div className="grid gap-1 max-w-[500px]">
											<p className="text-sm text-muted-foreground font-medium">
												{item.startTime} - {item.endTime}
											</p>
											<p className="text-sm  leading-none  font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
												{item.show.title}
											</p>
											<p className="text-sm text-muted-foreground line-clamp-3">
												{item.show.description}
											</p>
										</div>
									</div>
								</Link>
							))}
					</CardContent>
				</section>
			</Tab>

			<Tab
				key="Friday"
				title="Friday">
				<section className="flex flex-col gap-5">
					<CardContent className="flex flex-col gap-6 lg:gap-8 w-full px-0">
						{data
							.filter((item) => item.day === "FRIDAY")
							.map((item, index) => (
								<Link
									key={index}
									href={`/radio/${item.showId}`}
									className="group flex gap-2 w-full text-left">
									<div className="flex items-center gap-4">
										<Avatar className="size-32 md:size-40 rounded-sm">
											<AvatarImage
												src={item.show.coverArt}
												alt={item.show.title}
											/>
										</Avatar>

										<div className="grid gap-1 max-w-[500px]">
											<p className="text-sm text-muted-foreground font-medium">
												{item.startTime} - {item.endTime}
											</p>
											<p className="text-sm  leading-none  font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
												{item.show.title}
											</p>
											<p className="text-sm text-muted-foreground line-clamp-3">
												{item.show.description}
											</p>
										</div>
									</div>
								</Link>
							))}
					</CardContent>
				</section>
			</Tab>

			<Tab
				key="Saturday"
				title="Saturday">
				<section className="flex flex-col gap-5">
					<CardContent className="flex flex-col gap-6 lg:gap-8 w-full px-0">
						{data
							.filter((item) => item.day === "SATURDAY")
							.map((item, index) => (
								<Link
									key={index}
									href={`/radio/${item.showId}`}
									className="group flex gap-2 w-full text-left">
									<div className="flex items-center gap-4">
										<Avatar className="size-32 md:size-40 rounded-sm">
											<AvatarImage
												src={item.show.coverArt}
												alt={item.show.title}
											/>
										</Avatar>

										<div className="grid gap-1 max-w-[500px]">
											<p className="text-sm text-muted-foreground font-medium">
												{item.startTime} - {item.endTime}
											</p>
											<p className="text-sm  leading-none  font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
												{item.show.title}
											</p>
											<p className="text-sm text-muted-foreground line-clamp-3">
												{item.show.description}
											</p>
										</div>
									</div>
								</Link>
							))}
					</CardContent>
				</section>
			</Tab>
		</Tabs>
	);
};

export default ScheduleTabs;
