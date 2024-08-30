import Image from "next/image";

const Advert = () => {
	return (
		<>
			<Image
				className="mx-auto my-4 px-6"
				src="/images/advert-banner.jpg"
				width={1200}
				height={250}
				alt="Advert"
			/>

			<span className="sr-only">Home</span>
		</>
	);
};
export default Advert;
