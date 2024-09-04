import { Skeleton } from "../ui/skeleton";

const PodcastCardSkeleton = () => {
	return (
		<section className="group cols-span-1 gap-2 w-full">
			<section className="flex flex-col items-end gap-2">
				<Skeleton className="w-full aspect-square rounded-md object-cover" />

				<section className="gap-2 flex flex-col py-2 w-full">
					<Skeleton className="h-[10px] w-3/4 rounded-none mt-3 mb-3" />

					<Skeleton className="h-[10px] w-[90%] rounded-none mb-1" />

					<Skeleton className="h-[10px] w-[90%] rounded-none mb-2" />
				</section>
			</section>
		</section>
	);
};

export default PodcastCardSkeleton;
