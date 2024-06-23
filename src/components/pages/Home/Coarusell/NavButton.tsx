import Flickity from "react-flickity-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"


const NavButton = ({ direction, flickity }: { direction: 'next'|'prev', flickity: Flickity | null }) => {
	const twistSlider = (direction: string, flickity: Flickity) => {
		if (direction === 'prev')
			flickity.previous();
		else if (direction === 'next')
			flickity.next();
	}
	if (!flickity) return null
	
	return (
		<div
			className="block text-white text-md sm:text-md rounded-full border p-3 sm:p-3 cursor-pointer mx-2 "
			onClick={() => twistSlider(direction, flickity)}
		>
			<FontAwesomeIcon className="block" icon={direction === 'next' ? faArrowRight : faArrowLeft} />
		</div>
	)
}

export default NavButton