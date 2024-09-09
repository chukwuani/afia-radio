import Image from "next/image";

const Advert = () => {
	return (
		<section className="border-t border-b">
			<Image
				className="mx-auto my-4 px-6"
				src="/images/advert_banner.jpg"
				width={1200}
				height={250}
				alt="Advert"
			/>

			<span className="sr-only">Site Ad Banner</span>
		</section>
	);
};
export default Advert;
