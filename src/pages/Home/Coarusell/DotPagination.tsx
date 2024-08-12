import Flickity from "react-flickity-component";
import { useState, useEffect } from "react";

const Pagination = ({ flickity, className }: { flickity: Flickity | null, className?: string }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!flickity) return;

		const handleScroll = () => {
			setCurrentIndex(flickity.selectedIndex);
		};

		flickity.on("scroll", handleScroll);

		return () => {
			flickity.off("scroll", handleScroll);
		};
	}, [flickity]);

	if (!flickity) return null;

	const dots = Array.from({ length: flickity.slides.length }, (_, i) => i);


	const handleClick = (index: number) => {
		flickity.select(index);
		setCurrentIndex(index);
	};


	return (
		<div className={"flex justify-start items-center gap-2 " + className}>
			{dots.map((index) => (
				<span
					key={index}
					className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? "bg-white" : "bg-[#8D8D8D]"
						}`}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};

export default Pagination;