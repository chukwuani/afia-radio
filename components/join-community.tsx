import React from "react";
import Link from "next/link";

import { buttonVariants } from "./ui/button";

import { cn } from "@/lib/utils";

function JoinCommunity() {
	return (
		<section className="px-[30px] pt-[85px] pb-[60px]">
			<section className="bg-brand mx-auto rounded-[40px] flex flex-col items-center justify-center gap-[30px] lg:gap-20 max-w-[1140px] pt-10 lg:pt-[100px] px-5 lg:px-10 pb-5 lg:pb-10 relative overflow-hidden">
				<section className="w-[72%]">
					<h3 className="font-anton text-center text-[36px] tracking-[1px] lg:text-[80px] lg:tracking-[-1.5px] leading-[100%] uppercase">
						Be part of the Afia movement — where sound meets culture.
					</h3>
				</section>

				<section className="flex items-center justify-between w-full gap-5 flex-col lg:flex-row">
					<section className="w-full max-w-[450px] h-auto relative">
						<p className="font-dm-sans text-[14px] text-center lg:text-start lg:text-[16px] font-normal tracking-normal leading-[170%]">
							Whether you&apos;re launching a product, hosting an event, or building awareness, Afia Radio helps you connect through authentic media with targeted campaigns.
						</p>
					</section>

					<Link
						href="https://8kvl2urisy.ufs.sh/f/BxfEHnSVCZL4SuGJF57ybrm3XPNhkdKwcO8ITp9lt4ufUMQg"
						target="_blank"
						rel="noreferrer"
						className={cn(
							buttonVariants({ variant: "outline" }),
							"inline-flex font-normal rounded-full text-xs lg:text-base w-fit py-3 px-6 lg:py-5 lg:px-8 h-auto uppercase tracking-[2.4px]"
						)}>
						View Rate Card
					</Link>
				</section>
			</section>
		</section>
	);
}

export default JoinCommunity;
