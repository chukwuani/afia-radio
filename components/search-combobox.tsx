"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";

import { SearchIcon } from "lucide-react";
import { NewsTypes } from "@/types";
import { filterNews } from "@/lib/actions/news";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

export default function SearchCombobox() {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const [query, setQuery] = React.useState("");
	const debouncedQuery = useDebounce(query, 300);
	const [data, setData] = React.useState<NewsTypes[] | null>(null);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		if (debouncedQuery.length <= 0) {
			setData(null);
			return;
		}

		async function fetchData() {
			setLoading(true);

			const news = await filterNews(debouncedQuery);

			setData(news);
			setLoading(false);
		}

		void fetchData();
	}, [debouncedQuery]);

	const onSelect = React.useCallback((callback: () => unknown) => {
		setOpen(false);
		callback();
	}, []);

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				variant="outline"
				className="relative rounded-full ml-auto size-9 p-0 md:h-10 md:w-60 md:justify-start md:px-3 md:py-2">
				<SearchIcon
					className="size-4 md:mr-2 text-muted-foreground"
					aria-hidden="true"
				/>
				<span className="hidden md:inline-flex text-muted-foreground">Search...</span>
				<span className="sr-only">Search</span>
			</Button>

			<CommandDialog
				open={open}
				onOpenChange={(open) => {
					setOpen(open);
					if (!open) {
						setQuery("");
					}
				}}>
				<CommandInput
					placeholder="Search news..."
					value={query}
					onValueChange={setQuery}
				/>
				<CommandList>
					<CommandEmpty className={cn(loading ? "hidden" : "py-6 text-center text-sm")}>
						<div className="font-semibold">No news found</div>

						<p className="text-muted-foreground">Search for the latest entertainment news</p>
					</CommandEmpty>
					{loading ? (
						<div className="space-y-1 overflow-hidden px-1 py-2">
							<Skeleton className="h-4 w-10 rounded" />
							<Skeleton className="h-8 rounded-sm" />
							<Skeleton className="h-8 rounded-sm" />
						</div>
					) : (
						<CommandGroup
							className="capitalize"
							heading={"News"}>
							<ScrollArea>
								{data?.map((item) => {
									return (
										<CommandItem
											key={item._id}
											className="p-2 flex gap-1 items-center overflow-hidden"
											value={item.title}
											onSelect={() => onSelect(() => router.push(`/news/${item.slug}`))}>
											<Image
												className="aspect-square object-cover"
												src={item.mainImage}
												width={50}
												height={50}
												alt={item.altText}
											/>
											<section className="flex flex-col w-fit gap-1">
												<section className="flex items-center ml-[10px]">
													<p className="text-foreground text-ellipsis text-[0.7rem] leading-[18px] font-semibold line-clamp-1">
														{item.title}
													</p>
												</section>

												<p className="text-xs font-normal ml-[10px] text-muted-foreground line-clamp-2">
													{item.description}
												</p>
											</section>
										</CommandItem>
									);
								})}
							</ScrollArea>
						</CommandGroup>
					)}
				</CommandList>
			</CommandDialog>
		</>
	);
}
