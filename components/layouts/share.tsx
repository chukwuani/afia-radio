"use client";

import { usePathname } from "next/navigation";

import {
	FacebookShareButton,
	FacebookIcon,
	RedditShareButton,
	RedditIcon,
	TelegramShareButton,
	TelegramIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
	EmailIcon,
	EmailShareButton,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	PinterestShareButton,
	PinterestIcon,
} from "next-share";
import { absoluteUrl } from "@/lib/utils";

const Share = () => {
	const pathname = usePathname();
	const url = absoluteUrl(pathname);

	console.log(pathname, url);

	return (
		<section className="flex flex-col gap-4">
			<p className="text-sm font-medium uppercase">Share :</p>

			<section className="flex gap-2">
				<FacebookShareButton
					url={url}
					quote={"next-share is a social share buttons for your next React apps."}
					hashtag={"#nextshare"}>
					<FacebookIcon
						size={32}
						round
					/>
				</FacebookShareButton>

				<PinterestShareButton
					url={url}
					media={"next-share is a social share buttons for your next React apps."}>
					<PinterestIcon
						size={32}
						round
					/>
				</PinterestShareButton>

				<RedditShareButton
					url={url}
					title={"next-share is a social share buttons for your next React apps."}>
					<RedditIcon
						size={32}
						round
					/>
				</RedditShareButton>

				<TelegramShareButton
					url={url}
					title={"next-share is a social share buttons for your next React apps."}>
					<TelegramIcon
						size={32}
						round
					/>
				</TelegramShareButton>

				<TwitterShareButton
					url={url}
					title={"next-share is a social share buttons for your next React apps."}>
					<TwitterIcon
						size={32}
						round
					/>
				</TwitterShareButton>

				<WhatsappShareButton
					url={url}
					title={"next-share is a social share buttons for your next React apps."}
					separator=":: ">
					<WhatsappIcon
						size={32}
						round
					/>
				</WhatsappShareButton>

				<LinkedinShareButton url={url}>
					<LinkedinIcon
						size={32}
						round
					/>
				</LinkedinShareButton>

				<EmailShareButton
					url={url}
					subject={"Next Share"}
					body="body">
					<EmailIcon
						size={32}
						round
					/>
				</EmailShareButton>

				<FacebookMessengerShareButton
					url={url}
					appId={""}>
					<FacebookMessengerIcon
						size={32}
						round
					/>
				</FacebookMessengerShareButton>
			</section>
		</section>
	);
};
export default Share;
