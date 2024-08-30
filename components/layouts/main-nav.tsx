"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/siteConfig";

import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

export default function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden lg:flex items-center w-full relative">
			<Image
				src="/images/afia-indent.png"
				alt="Afia Radio Home"
				width={30}
				height={30}
			/>

			<NavigationMenu className="ml-[50px] w-full">
				<NavigationMenuList>
					{siteConfig.mainNav.map((navItems, index) => (
						<NavLink
							key={index}
							href={navItems.href}
							pathname={pathname}
							disabled={navItems.disabled}
							className="inline-flex h-10 w-max items-center justify-center px-4 py-2 transition-colors focus:text-brand focus:outline-none">
							{navItems.title}
						</NavLink>
					))}
				</NavigationMenuList>
			</NavigationMenu>

			<Button
				variant="outline"
				className="relative rounded-full ml-auto size-9 p-0 md:h-10 md:w-60 md:justify-start md:px-3 md:py-2">
				<SearchIcon
					className="size-4 mr-2 text-muted-foreground"
					aria-hidden="true"
				/>
				<span className="inline-flex text-muted-foreground">Search...</span>
				<span className="sr-only">Search products</span>
			</Button>
		</div>
	);
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	disabled?: boolean;
	pathname: string;
}

function NavLink({ children, href, disabled, pathname, className, ...props }: NavLinkProps) {
	return (
		<a
			href={href}
			className={cn(
				"text-foreground/60 transition-colors hover:text-foreground text-[0.775rem] font-medium capitalize py-4 flex items-center gap-2  ",
				href === pathname && "text-brand hover:text-brand font-medium",
				disabled && "pointer-events-none opacity-60",
				className
			)}
			{...props}>
			{children}
		</a>
	);
}
