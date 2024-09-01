"use client";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

function SearchComboBox() {
	return (
		<Button
			variant="outline"
			className="relative rounded-full ml-auto size-9 p-0 md:h-10 md:w-60 md:justify-start md:px-3 md:py-2">
			<SearchIcon
				className="size-4 md:mr-2 text-muted-foreground"
				aria-hidden="true"
			/>
			<span className="hidden md:inline-flex text-muted-foreground">Search...</span>
			<span className="sr-only">Search</span>
		</Button>
	);
}

export default SearchComboBox;
