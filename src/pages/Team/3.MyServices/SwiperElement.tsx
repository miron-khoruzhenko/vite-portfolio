import { Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useState } from 'react';


import swiperItems from './swiperItems';

const SwiperElement = () => {

	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	const handleSlideChange = (swiper: SwiperClass) => {
		setActiveSlideIndex(swiper.realIndex)
	}

	return (

		<Swiper
		className='container mx-auto '
			effect='coverflow'

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
			modules={[Pagination, A11y, Autoplay, EffectCoverflow]}
			pagination={{ clickable: true }}
			// slidesPerView={2}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false
			}}
			onSlideChange={handleSlideChange}
			breakpoints={{

				768: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2
				}
			}}
		>
			{
				swiperItems.map((item) => {
					return (
						<SwiperSlide key={item.index} className=' bg-zinc-800 text-white rounded-none md:rounded-lg overflow-hidden min-h-full '>
							<div
								className="md:h-96 min-h-[250px] w-full flex flex-col justify-end items-center relative p-8 pb-12 "
								style={{ 
									background: `linear-gradient(to top, rgb(14, 14, 14, 1),  rgba(14,14,14,.2)), url(${item.img}) center no-repeat`, 
									backgroundSize: `cover`,
									backgroundBlendMode: 'luminosity',
									filter: 'grayscale(0.6) hue-rotate(200deg)'
								}}
							>
								<div className={"z-20 flex flex-col justify-center items-center md:items-start gap-4 transition-opacity " + (activeSlideIndex === item.index ? 'opacity-100' : 'opacity-0')} >
									<h2 className='font-extrabold text-xl uppercase'>{item.heading}</h2>
									<p className='text-xs md:text-base text-center md:text-left '>{item.descr}</p>
									<a href={item.link} className='uppercase px-5 py-1 bg-white rounded-full text-zinc-700 text-sm'>
										View
									</a>
								</div>
							</div>
						</SwiperSlide>
					)

				})
			}

		</Swiper>
	)
}

export default SwiperElement