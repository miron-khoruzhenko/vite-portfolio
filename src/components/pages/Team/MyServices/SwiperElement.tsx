import { Navigation, Pagination, A11y, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide,  } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

import swiperItems from './swiperItems';

const SwiperElement = () => {
	const styles = {
		Swiper : '',

	}
	return (
		
		<Swiper
			className='container max-w-[1200px] mx-auto '
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
			loopedSlides={2}
			modules={[Pagination, A11y, Autoplay]}
			pagination={{clickable: true}}
			slidesPerView={3}
			autoplay={{
				delay: 3000
			}}
		>
		{
			swiperItems.map((item) => {
				return (
					<SwiperSlide className=' bg-red-700 text-white '>
						<div 
							className="h-full w-full flex flex-col justify-center items-center relative p-2" 
							style={{background: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${item.img}) center no-repeat`}} 
>

							{/* <div className="absolute h-full w-full ">
								<img src={item.img} alt="" className="w-full h-full object-cover top-0 left-0 " />
								<div className="abo bg-gradient-to-r from-black to-black/5 w-full h-full "></div>
							</div> */}
							
							<div className="z-20">
								<h2 className=''>{item.heading}</h2>
								<p className=''>{item.descr}</p>
								<a href={item.link} className=''>
									explore
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