"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/siteConfig";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";

import { useTheme } from "next-themes";
import { SearchIcon } from "lucide-react";

export function MobileNav() {
	const pathname = usePathname();
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	const { resolvedTheme } = useTheme();
	const [open, setOpen] = React.useState(false);

	if (isDesktop) return null;

	return (
		<section className="flex lg:hidden gap-3 items-center justify-between w-full">
			<Image
				src="/images/afia-indent.png"
				alt="Afia Radio Home"
				width={30}
				height={30}
			/>

			<section className="flex items-center">
				<Button
					variant="outline"
					className="relative rounded-full ml-auto size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2">
					<SearchIcon
						className="size-4 xl:mr-2 text-muted-foreground"
						aria-hidden="true"
					/>
					<span className="hidden xl:inline-flex text-muted-foreground">Search...</span>
					<span className="sr-only">Search products</span>
				</Button>

				<Sheet
					open={open}
					onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="flex justify-end hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
							<Icons.menu aria-hidden="true" />
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>

					<SheetContent
						side="right"
						className="pl-1 pr-0 pt-9">
						<div className="w-fit px-7">
							<Link
								href="/"
								className="flex items-center space-x-2">
								<Image
									width={100}
									height={100}
									className="w-[100px]"
									src={
										resolvedTheme === "light"
											? "/images/afia-logo.png"
											: "/images/afia-logo-dark.png"
									}
									alt="Afia Radio Home"
									title="Afia Radio Home"
								/>

								<span className="sr-only">Home</span>
							</Link>
						</div>

						<ScrollArea className="my-4 h-[calc(100vh-8rem)] pl-6">
							<div className="pl-1 pr-7">
								<Accordion
									type="multiple"
									className="w-full">
									{siteConfig.mainNav.map((item, index) => (
										<MobileLink
											key={index}
											href={item.href}
											pathname={pathname}
											setOpen={setOpen}
											disabled={item.disabled}>
											{item.title}
										</MobileLink>
									))}
								</Accordion>
							</div>
						</ScrollArea>
					</SheetContent>
				</Sheet>
			</section>
		</section>
	);
}

interface MobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	disabled?: boolean;
	pathname: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
	children,
	href,
	disabled,
	pathname,
	setOpen,
	className,
	...props
}: MobileLinkProps) {
	return (
		<Link
			href={href}
			className={cn(
				"text-foreground/60 transition-colors hover:text-foreground text-sm capitalize py-4 border-b flex items-center gap-2",
				href === pathname && "text-brand hover:text-brand font-bold",
				disabled && "pointer-events-none hover:no-underline opacity-60",
				className
			)}
			onClick={() => setOpen(false)}
			{...props}>
			{children}
		</Link>
	);
}
