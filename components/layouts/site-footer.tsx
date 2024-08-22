import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/siteConfig";

import { ModeToggle } from "@/components/layouts/mode-toggle";

export default function Footer() {
	return (
		<footer className="w-full bg-[#F6F8F9] border-t-0 border-[hsla(240deg,5.9%,90%,47%)] dark:border-border mt-16">
			<section className="px-8 pt-16 pb-16 min-[1400px]:container">
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
									src={"/afia-logo.png"}
									alt="Afia Radio"
									title="Afia Radio"
								/>
								<Image
									width={200}
									height={200}
									className="w-auto h-auto hidden dark:flex"
									src={"/afia-logo-dark.png"}
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

					{/* <ModeToggle /> */}
				</section>
			</section>
		</footer>
	);
}
