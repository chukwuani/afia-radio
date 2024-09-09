const LiveIndicator = () => {
	return (
		<section className="flex gap-2 items-center">
			<svg
				className="size-4"
				viewBox="0 0 16 16"
				version="1.1"
				aria-hidden="true">
				<title>blinking-dot</title>
				<g>
					<circle
						className="fill-background"
						cx="8"
						cy="8"
						r="7.16"
						stroke="#fa6400"
						strokeWidth="1.68"
						fill="currentColor"></circle>
					<circle
						cx="8"
						cy="8"
						r="4"
						fill="#fa6400">
						<animate
							attributeName="opacity"
							values="1;1;1;1;0;1"
							dur="2.5s"
							repeatCount="indefinite"></animate>
					</circle>
				</g>
			</svg>

			<p className="text-sm text-brand font-medium uppercase">LIVE</p>
		</section>
	);
};
export default LiveIndicator;
