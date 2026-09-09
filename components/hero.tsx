"use client";

import { Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";
import { Heading } from "./heading";

const Hero = () => {
	const { onOpen, updateAudioInfo } = useAudioPlayerStore((state) => state);

	const images = [
		{
			src: "/images/mixer-2.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/tape-2.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/mixer-3.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/record.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/vinyl-2.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/tape.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/mic.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/vinyl.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/tape-3.jpg",
			alt: "",
			name: "",
		},
		{
			src: "/images/tape.jpg",
			alt: "",
			name: "",
		},
	];

	const ImageItem = ({ src, alt, name }: { src: string; alt: string; name: string }) => (
		<li className="flex-shrink-0">
			<div className="relative w-80 h-48 overflow-hidden">
				<img
					width={2400}
					height={1350}
					title={name}
					src={src}
					alt={alt}
					className="block w-full h-full object-cover object-center"
				/>
			</div>
		</li>
	);

	const CarouselRow = ({ imageSet, offset = 0 }: { imageSet: typeof images; offset: number }) => (
		<div className="relative overflow-hidden">
			<section className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none opacity-100 overflow-hidden">
				<ul
					className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none gap-1 relative flex-row"
					style={{
						willChange: "transform",
						transform: `translateX(${offset}px)`,
					}}>
					{imageSet.map((img, index) => (
						<ImageItem key={index} {...img} />
					))}
					{/* Duplicate items for seamless scrolling */}
					{imageSet.map((img, index) => (
						<ImageItem key={`duplicate-${index}`} {...img} aria-hidden="true" />
					))}
				</ul>
			</section>
		</div>
	);

	// Define different image sets for each row
	const row1Images = images.slice(0, 5);
	const row2Images = images.slice(5, 10);
	const row3Images = images.slice(0, 5);

	return (
		<>
			<section className="flex flex-col items-center pt-28 md:pt-[180px] pb-6 lg:pb-12 relative w-full overflow-hidden">
				<section
					className="absolute top-[-320px] right-[-240px] left-[-80px]"
					style={{
						willChange: "transform",
						opacity: 1,
						transform: "rotate(20deg) skewX(-20deg) skewY(-10deg)",
						mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%) add",
					}}>
					<div className="space-y-1">
						<CarouselRow imageSet={row1Images} offset={-1620} />
						<CarouselRow imageSet={row2Images} offset={0} />
						<CarouselRow imageSet={row3Images} offset={-1620} />
					</div>
				</section>

				<div className="flex flex-col text-start items-start w-full justify-center px-6 md:px-14 gap-[50px] py-0 relative">
					<div className="flex flex-col">
						<Heading className="text-[44px] leading-[4rem] -tracking-[.053rem] lg:text-[70px] lg:leading-[1.2em] lg:-tracking-[1.5px] font-anton font-normal max-w-[600px]">
							24hrs Radio, Hit Music, Podcasts, All in One Place
						</Heading>

						{/* Subheading text */}
						<div className="flex flex-col max-w-[480px] w-full items-center relative mt-6">
							<p className="font-dm-sans font-medium text-muted-foreground text-sm md:text-base leading-[28px]">
								Your go-to spot for Igbo vibes, anywhere in the world. Enjoy non-stop music, news,
								and pure entertainment. Listen live now.
							</p>
						</div>
					</div>

					{/* Call to action buttons */}
					<div className="flex items-center justify-center">
						<Button
							onClick={() => {
								onOpen();
								updateAudioInfo({
									isPlaying: true,
									audioUrl: process.env.NEXT_PUBLIC_STREAM_URL!,
									isLive: true,
									audioId: "live",
								});
							}}
							className="group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-brand hover:bg-brand/90 px-5 text-base/7 font-medium text-white transition-all duration-300 h-12">
							<span className="relative z-10 flex items-center gap-2">
								<span className="text-[0.75rem] tracking-[2.4px] uppercase font-dm-sans">
									Listen Live
								</span>

								<Radio className="ml-2" />
							</span>

							<div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
						</Button>
					</div>
				</div>
			</section>

			<section className="mx-auto w-full flex flex-col items-center justify-center pb-6 lg:pb-12">
				<iframe
					style={{ maxWidth: "100%" }}
					src="https://player.twitch.tv/?channel=afiatv_official&parent=afia993.com&parent=www.afia993.com"
					frameBorder="0"
					allowFullScreen={true}
					scrolling="no"
					height="480"
					width="853"></iframe>
			</section>
		</>
	);
};

export default Hero;
