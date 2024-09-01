"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/siteConfig";

import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden lg:flex items-center w-full relative">
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
