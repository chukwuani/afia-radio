"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import qs from "query-string";

const useInfinteQuery = (url: string, key: string) => {
	const fetchData = async ({ pageParam }: { pageParam: string }) => {
		const cursor = pageParam.replace("lastPublishedAt=", ",").split(",")[0];
		const lastPublishedAt = pageParam.replace("lastPublishedAt=", ",").split(",")[1];

		const query = qs.stringifyUrl(
			{
				url,
				query: {
					cursor,
					lastPublishedAt,
				},
			},
			{ skipNull: true }
		);

		const res = await fetch(query);
		return res.json();
	};

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
		queryKey: [key],
		queryFn: fetchData,
		initialPageParam: "",
		getNextPageParam: (lastPage) => lastPage?.nextCursor,
	});

	return {
		data,
		hasNextPage,
		isFetchingNextPage,
		status,
		fetchNextPage,
	};
};

export default useInfinteQuery;
