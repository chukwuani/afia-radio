import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/siteConfig";

import { ModeToggle } from "@/components/layouts/mode-toggle";
import { Shell } from "./shell";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Input } from "../ui/input";
import JoinNewsletterForm from "../join-newsletter-form";

export default function Footer() {
	return (
		<footer className="w-full bg-[#0f0f11]">
			<Shell>
				<section
					id="footer-content"
					aria-labelledby="footer-content-heading"
					className="flex flex-col gap-10 lg:flex-row lg:gap-20 mb-4">
					<section
						className="max-w-[300px] w-full"
						id="footer-branding"
						aria-labelledby="footer-branding-heading">
						<Link
							href="/"
							className="flex w-full h-auto max-w-[200px] items-center space-x-2">
							<Image
								width={200}
								height={200}
								className="w-auto h-auto "
								src={"/images/afia-logo-dark.png"}
								alt="Afia Radio"
								title="Afia Radio"
							/>

							<span className="sr-only">Home</span>
						</Link>
					</section>

					<section
						id="footer-links"
						aria-labelledby="footer-links-heading"
						className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-3">
						{siteConfig.footerNav.map((item) => (
							<div
								key={item.title}
								className="space-y-3">
								<h4 className="text-base font-medium">{item.title}</h4>
								<ul className="space-y-2.5">
									{item.items.map((link) => (
										<li key={link.title}>
											<Link
												href={link.href}
												target={link?.external ? "_blank" : undefined}
												rel={link?.external ? "noreferrer" : undefined}
												className="text-sm text-muted-foreground transition-colors hover:text-foreground">
												{link.title}
												<span className="sr-only">{link.title}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</section>

					<JoinNewsletterForm />
				</section>
				<section
					id="footer-bottom"
					aria-labelledby="footer-bottom-heading"
					className="flex items-center space-x-4">
					<div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
						© 2024 Afia Network. All Rights Reserved
					</div>

					<div className="flex items-center space-x-1">
						<Link
							href={siteConfig.links.x}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({
									size: "icon",
									variant: "ghost",
								})
							)}>
							<Icons.x
								className="size-4"
								aria-hidden="true"
							/>
							<span className="sr-only">Twitter</span>
						</Link>

						<Link
							href={siteConfig.links.facebook}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({
									size: "icon",
									variant: "ghost",
								})
							)}>
							<Icons.facebook
								className="size-4"
								aria-hidden="true"
							/>
							<span className="sr-only">Facebook</span>
						</Link>

						<Link
							href={siteConfig.links.instagram}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({
									size: "icon",
									variant: "ghost",
								})
							)}>
							<Icons.instagram
								className="size-5"
								aria-hidden="true"
							/>
							<span className="sr-only">Instagram</span>
						</Link>

						<Link
							href={siteConfig.links.youtube}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({
									size: "icon",
									variant: "ghost",
								})
							)}>
							<Icons.youtube
								className="size-5"
								aria-hidden="true"
							/>
							<span className="sr-only">Youtube</span>
						</Link>
					</div>
				</section>
			</Shell>
		</footer>
	);
}

{
	/* <footer className="w-full bg-[#0f0f11] border-t-0 border-[hsla(240deg,5.9%,90%,47%)] dark:border-border mt-16">
	<Shell>
		<section
			id="footer-content"
			aria-labelledby="footer-content-heading"
			className="flex flex-col gap-10 lg:flex-row lg:gap-20 mb-4">
			<section
				id="footer-as"
				aria-labelledby="footer-as-heading"
				className="w-full flex flex-col md:flex-row md:items-center gap-10">
				<section className="max-w-[300px] w-full">
					<Link
						href="/"
						className="flex w-full h-auto max-w-[200px] items-center space-x-2">
						<Image
							width={200}
							height={200}
							className="w-auto h-auto dark:hidden"
							src={"/images/afia-logo.png"}
							alt="Afia Radio Home"
							title="Afia Radio Home"
						/>
						<Image
							width={200}
							height={200}
							className="w-auto h-auto hidden dark:flex"
							src={"/images/afia-logo-dark.png"}
							alt="Afia Radio"
							title="Afia Radio"
						/>

						<span className="sr-only">Home</span>
					</Link>
				</section>

				<section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{siteConfig.footerNav.map((item) => (
						<div
							key={item.title}
							className="space-y-3">
							<h4 className="text-[17px] mb-3 font-medium">{item.title}</h4>

							<ul className="space-y-3">
								{item.items.map((a) => (
									<li key={a.title}>
										<a
											href={a.href}
											target={a.external ? "_blank" : undefined}
											rel={a.external ? "noreferrer" : undefined}
											className="text-sm text-muted-foreground transition-colors hover:text-foreground">
											{a.title}
											<span className="sr-only">{a.title}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</section>
			</section>
		</section>

		<section
			id="footer-bottom"
			aria-labelledby="footer-bottom-heading"
			className="flex items-center mt-16 flex-wrap">
			<div className="text-left text-sm text-muted-foreground">
				© 2024 Afia Network. All Rights Reserved
			</div>

			<ModeToggle />
		</section>
	</Shell>
</footer>; */
}
