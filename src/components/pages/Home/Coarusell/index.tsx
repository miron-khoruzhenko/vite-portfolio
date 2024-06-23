import Flickity from "react-flickity-component"
// import Container from "../../common/Container"
import items from "./itemsB"
import global_styles from '../../../../assets/styles/global_styles'

import { Button } from '../../../features/Buttons/Button1'
import Pagination from "./DotPagination"
import NavButton from "./NavButton"

import { useState } from "react"

import './slider.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import localRoutes from "../../../../assets/data/localRoutes"

const FlickySlider = () => {
	const [flickity, setFlickity] = useState<Flickity | null>(null);

	const styles = {
		partners: "bg-main-indigo container overflow-hidden mx-auto py-4 dark:bg-transparent my-20",
		carousel: "max-h-[300px] w-full overflow-hidden ",
		subheading: global_styles.sectionSubHeading,
		heading: global_styles.combinedHeading + 'mb-12',

		carouselItem : 'bg-white w-[calc(33.333%-1.25rem)] h-[250px] min-h-min mr-5 ',
		carouselImg : 'object-contain min-w min-h-full',
	}


	return (
		<section className={styles.partners}>

			<h3 className={styles.subheading}>Some of</h3>
			<h2 className={styles.heading}>Our Works</h2>
			{/* <Coarusell /> */}
			
			<div className="flex items-center justify-center ">
			<NavButton direction="prev" flickity={flickity} />


				<Flickity
					flickityRef={c => setFlickity(c)}
					className={styles.carousel}
					elementType="div"

					options={{
						initialIndex: 2,
						contain: true,
						prevNextButtons: false,
						pageDots: false,
						wrapAround: true,
						
					}}
					disableImagesLoaded={false} // default false
					reloadOnUpdate
					static

				>
					{items.map((item) => {
						return (
							<div className={styles.carouselItem} key={item.index}>
								<img src={item.img} alt="" className={styles.carouselImg} />
							</div>
						)
					})}
				</Flickity>
				<NavButton direction="next" flickity={flickity} />
			</div>

			<div className="px-[65px]">

			<Pagination flickity={flickity} className="mt-6" />

				<div className="container mx-auto w-full flex justify-end">
					<Link to={localRoutes.projects.href}>
						<Button className="">Explore More <FontAwesomeIcon icon={faArrowRight} /></Button>
					</Link>
				</div>
			</div>

		</section>
	)
}




export default FlickySlider