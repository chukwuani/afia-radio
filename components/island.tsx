import Music from "@/components/music";
import News from "@/components/news";
import Hero from "@/components/hero";
import Radio from "@/components/radio";

import PlayList from "@/components/playlist";
import Advert from "@/components/layouts/advert";

const Island = () => {
	return (
		<>
			<Hero />

			<Radio />

			<Advert />

			<PlayList />

			<News />
		</>
	);
};
export default Island;
