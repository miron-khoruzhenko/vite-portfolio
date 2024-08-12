import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import {twMerge as cn } from 'tailwind-merge'

const NavButton = ({ className, onClick } : React.HTMLAttributes<HTMLDivElement>) => {
	
	return (
		<div
			className={cn("block text-white text-md sm:text-md rounded-full border p-3 sm:p-3 cursor-pointer mx-2 ", className)}
			onClick={onClick}
		>
			<FontAwesomeIcon className="block" icon={true? faArrowRight : faArrowLeft} />
		</div>
	)
}

export default NavButton