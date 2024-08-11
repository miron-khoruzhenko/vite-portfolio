// import Container from "../../common/Container"
import items from "./itemsB"
import global_styles from '../../../../assets/styles/global_styles'

import { Button } from '../../../features/Buttons/Button1'
// import Pagination from "./DotPagination"
// import NavButton from "./NavButton"



import { useState, useRef } from "react"

import './slider.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import localRoutes from "../../../../assets/data/localRoutes"

import { Navigation, A11y, Autoplay, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import { twMerge as cn } from "tailwind-merge"


const FlickySlider = () => {
	// const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const sliderRef = useRef<SwiperRef>(null);

	// * Кнопки с использованием контроллера, работали но был баг при присваивании контроллера свайперу
	// const handleClickPrev = () => controlledSwiper?.slidePrev();
	// const handleClickNext = () => controlledSwiper?.slideNext();

	//* Работали без проблем
	// const handleClickPrev = () => sliderRef.current?.swiper?.slidePrev();
	// const handleClickNext = () => sliderRef.current?.swiper?.slideNext();

	const handleSlideChange = () => {
		const activeIndex = sliderRef.current?.swiper?.realIndex;
		setActiveIndex(activeIndex || 0);
	};

	// const handleClickPagination : React.MouseEventHandler<HTMLDivElement> = (e) => {
	//* баг с фризом слайда из за функции slideToLoop
	// 	const target = e.target as HTMLDivElement;
	// 	const index = parseInt(target.dataset.index || '0');
	// 	if (activeIndex === index) return
	// 	sliderRef.current?.swiper?.slideToLoop(index, 200, false)
	// }

	const styles = {
		partners: "bg-main-indigo container overflow-hidden mx-auto py-4 dark:bg-transparent my-20",
		subheading: global_styles.sectionSubHeading,
		heading: global_styles.combinedHeading + 'mb-12',

		// carouselItem: 'bg-white w-[calc(33.333%-1.25rem)] h-[250px] min-h-min mr-5 ',

		carousel: "max-h-[250px] w-full overflow-hidden ",
		carouselItem: 'bg-black  min-h-min !h-[250px] relative',
		carouselImg: '!object-cover min-w min-h-full min-w-full',
		
		descrBlock : "absolute top-0 w-full h-full bg-black/0 opacity-0 hover:bg-black/80 hover:opacity-100 transition-all flex flex-col justify-center items-center gap-4 text-center text-white px-2 ",
		descrHeading : 'text-xl ',
		descrText : 'text-sm ',
		btn: 'px-4 py-2 bg-black block text-base '
	}


	return (
		<section className={styles.partners}>

			<h3 className={styles.subheading}>Some of</h3>
			<h2 className={styles.heading}>Our Works</h2>
			{/* <Coarusell /> */}

			<div className="sliderr flex items-center justify-center ">


				<Swiper
					className='container mx-auto home_swiper'
					effect='slide'
					ref={sliderRef}

					grabCursor={true}
					centeredSlides={true}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 3,
						slideShadows: true
					}}
					loop={true}
					// loopedSlides={2}


					modules={[A11y, Autoplay, Controller, Navigation]}
					// controller={{ control: controlledSwiper }}
					// onSwiper={setControlledSwiper}

					onSlideChange={handleSlideChange}
					navigation={true}
					// pagination={{ clickable: true }}
					// slidesPerView={3}
					// loopAdditionalSlides={1}

					spaceBetween={20}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false
					}}
				breakpoints={{
					768: {
						slidesPerView: 1
					},
					900: {
						slidesPerView: 2

					},
					1200: {
						slidesPerView: 3
					}
				}}
				>			{
						items.map((item) => {
							return (
								<SwiperSlide className={styles.carouselItem} key={item.index}>
									<img src={item.img} alt="" className={cn(styles.carouselImg, (item.index === activeIndex ? 'opacity-100' : 'opacity-50'))} />
									<div className={styles.descrBlock}>
										<h5 className={styles.descrHeading}>{item.title}</h5>
										<p className={styles.descrText}>{item.text}</p>
										<a href={item.link} className={styles.btn}>Visit page</a>

									</div>
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			</div>

			{/* //* Ручные кнопки навигации и стрелки  */}
			<div className="mt-4 flex justify-center items-center">

				{/* <div className="flex ">
					<NavButton className=".swiper-button-prev" onClick={handleClickPrev} />
					<NavButton className=".swiper-button-next" onClick={handleClickNext} />
				</div> */}


				<div className="flex gap-2 justify-center">
					{
						items.map((item) => {
							return (
								<div 
								data-index={item.index}
								className={"w-2 h-2 bg-white rounded-full " + (item.index === activeIndex ? 'bg-white' : 'bg-zinc-700')} 
								// onClick={handleClickPagination}
								/>
							)
						})
					}
				</div>
			</div>

			<div className="container mx-auto w-full flex justify-end mt-8">
				<Link to={localRoutes.projects.href} className="">
					<Button className="">Explore More <FontAwesomeIcon icon={faArrowRight} /></Button>
				</Link>
			</div>
		</section>
	)
}




export default FlickySlider