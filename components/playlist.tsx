import { Ellipsis, EllipsisVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

const PlayList = () => {
	const images = [
		"https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/a5/59/1e/a5591eba-36e7-9aca-12a3-616449c3849b/aecf2603-8df7-4366-85e9-a74461232264.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/76/98/12/76981252-20c9-28de-71c7-1ae1c51cdb0b/83836a30-b4eb-4849-81d0-e904bd35ab83.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/3d/b7/fe/3db7fe57-24ed-01a5-6d7c-35f871ba1f0c/U0MtTVQtVEVSLVByaW1hcnlfVGl0bGUtU2Vjb25kYXJ5X1RpdGxlLTIucG5n.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/59/ad/c6/59adc6ab-c7c8-dc0c-6758-40fd304dac3c/U0MtTVMtV1ctTGl0dGxlX0JpdF9Db3VudHJ5LUFEQU1fSUQ9MTQ2NTI2NDQwNC5wbmc.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/5a/7b/d3/5a7bd3a4-27dd-f3e3-98a7-cfd677cca9ff/cf6c857b-fc8b-4073-bd16-f29902ce164f.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/a5/59/1e/a5591eba-36e7-9aca-12a3-616449c3849b/aecf2603-8df7-4366-85e9-a74461232264.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/76/98/12/76981252-20c9-28de-71c7-1ae1c51cdb0b/83836a30-b4eb-4849-81d0-e904bd35ab83.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/3d/b7/fe/3db7fe57-24ed-01a5-6d7c-35f871ba1f0c/U0MtTVQtVEVSLVByaW1hcnlfVGl0bGUtU2Vjb25kYXJ5X1RpdGxlLTIucG5n.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/59/ad/c6/59adc6ab-c7c8-dc0c-6758-40fd304dac3c/U0MtTVMtV1ctTGl0dGxlX0JpdF9Db3VudHJ5LUFEQU1fSUQ9MTQ2NTI2NDQwNC5wbmc.png/316x316SC.DN01.webp?l=en-GB",
		"https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/5a/7b/d3/5a7bd3a4-27dd-f3e3-98a7-cfd677cca9ff/cf6c857b-fc8b-4073-bd16-f29902ce164f.png/316x316SC.DN01.webp?l=en-GB",
	];
	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-14 lg:py-8">
			<CardContent className="flex flex-col gap-10 w-full px-0">
				<section className="flex flex-col items-center max-md:text-center md:flex-row md:items-end gap-4">
					{/* <img
						alt="Product image"
						className="rounded-md object-cover bg-black/30 size-[200px] aspect-square"
						height="300"
						src={
							"https://images.audacy.com/cms/music/motleycrue-contesting-editorial-1920x1080-2.jpg/motleycrue-contesting-editorial-1920x1080-2-wide.jpg"
						}
					/> */}

					<section className="flex flex-col">
						<h1 className="text-4xl font-bold text-brand">Weekly Top 10</h1>

						<p className="text-muted-foreground text-base">
							Check out this week&apos;s ranking of the most popular music.
						</p>
					</section>
				</section>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 w-full mx-auto">
					{Array.from({ length: 10 }).map((_, index) => (
						<div
							key={index}
							className={cn(
								"flex items-center gap-6 border-b pb-6 last-of-type:border-none",
								index === 8 && "md:border-none"
							)}>
							<p className="text-muted-foreground text-xs">{index + 1}</p>
							<img
								src={images[index]}
								alt="Album Cover"
								width={40}
								height={40}
								className="aspect-square object-cover"
							/>

							<div className="flex-1">
								<h3 className="font-medium text-sm">Active</h3>
								<p className="text-muted-foreground text-sm">Asake</p>
							</div>

							<div className="text-muted-foreground text-sm">3:45</div>

							<Button
								size="icon"
								variant="ghost">
								<PlayIcon className="w-4 h-4" />
							</Button>
							<Button
								size="icon"
								variant="ghost">
								<EllipsisVertical className="w-4 h-4" />
							</Button>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default PlayList;

function PlayIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="6 3 20 12 6 21 6 3" />
		</svg>
	);
}
