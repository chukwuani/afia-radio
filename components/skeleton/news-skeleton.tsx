import { Skeleton } from "../ui/skeleton";

const NewsLoading = () => {
	return (
		<section className="group cols-span-1 gap-2 w-full">
			<section className="flex items-end gap-4">
				<Skeleton className="w-full max-w-[120px] aspect-square rounded-md object-cover" />

				<section className="gap-3 flex flex-col py-2 px-3 w-full">
					<Skeleton className="h-[10px] w-3/4 rounded-none mt-3 mb-2" />

					<Skeleton className="h-[10px] w-full rounded-none" />

					<Skeleton className="h-[10px] w-full rounded-none mb-2" />

					<Skeleton className="h-[10px] w-20 rounded-none" />
				</section>
			</section>
		</section>
	);
};
export default NewsLoading;
