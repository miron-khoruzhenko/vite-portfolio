import { useEffect, useState } from 'react'
import { twMerge as cn } from 'tailwind-merge'

import testimonial_items from './items'

const Testimonials = () => {
	const [isVisible, setIsVisible] = useState(true)
	const [active_index, setActiveIndex] = useState(0)
	const [interval_id, setIntervalId] = useState(-1)
	// const [testimonial, setTestimonial] = useState(testimonial_items[0])


	useEffect(() => {
		const inter_id = (
			setInterval(() => {
			setIsVisible(false)

			updateTestimonial()
		}, 3000))
		setIntervalId(inter_id)
		return () => clearInterval(inter_id)
	}, [])



	const updateTestimonial = () => {
		setIsVisible(!isVisible)
		setTimeout(() => {
			setActiveIndex(active_index => (active_index + 1) % testimonial_items.length)
			setIsVisible(true)
		}, 600)
	}

	return (
		<section id="testimonials" className="bg-testimonials bg-cover bg-top bg-no-repeat py-14 px-3 md:px-0">
			<div className="flex flex-col justify-center items-center container mx-auto text-center ">
				<i className="icon-quote text-white text-3xl md:text-4xl mb-4" ></i>
				<h2
					className="text-center text-2xl md:text-4xl text-white font-semibold mb-14 relative
			after:content-[''] after:block after:h-px after:w-12 after:bg-gold
			after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-4
			before:content-[''] before:block before:h-px before:w-40 before:bg-neutral-600
			before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-4">
					Testimonials
				</h2>
				<p className={cn("text-neutral-400 text-sm md:text-base font-light mb-8 max-w-5xl min-h-[80px] transition-opacity duration-500 h-36 flex items-center justify-center ", isVisible ? "opacity-100" : "opacity-0")}>
					{testimonial_items[active_index].text}
				</p>
				<div className={cn("text-white flex justify-center items-center w-full gap-5 transition-all duration-500 ", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full")}>
					<span className="block w-full text-sm text-right">{testimonial_items[active_index].name}</span>
					<span className="">|</span>
					<span className={"block w-full text-sm text-left "}>{testimonial_items[active_index].position}</span>
				</div>
			</div>

			<div className="flex justify-center gap-2 mt-8">
				{testimonial_items.map((item, index) => (
					<span
						key={item.id}
						onClick={() => {
							setIsVisible(false)
							clearInterval(interval_id)
							setTimeout(() => {
								setActiveIndex(index)
								setIsVisible(true)
							}, 600)
						}}
						className={cn("w-2 h-2 inline-block rounded-full  hover:bg-gold/60 cursor-pointer transition-colors", index === active_index ? "bg-gold" : "bg-neutral-600")} />
				))}
			</div>

		</section>
	)
}

export default Testimonials