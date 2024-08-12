import React from 'react'

const Testimonials = () => {
	return (
		<section id="testimonials" className="bg-testimonials bg-cover bg-top bg-no-repeat py-14 px-3 md:px-0">
		<div className="flex flex-col justify-center items-center container mx-auto text-center">
			<i className="icon-quote text-white text-3xl md:text-4xl mb-4" ></i>
			<h2
			className="text-center text-2xl md:text-4xl text-white font-semibold mb-14 relative
			after:content-[''] after:block after:h-px after:w-12 after:bg-gold
			after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-4
			before:content-[''] before:block before:h-px before:w-40 before:bg-neutral-600
			before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-4">
			Testimonials
			</h2>
			<p className="text-neutral-400 text-sm md:text-base font-light mb-8 max-w-5xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis iure temporibus minus dolor placeat maiores sapiente dolorum dicta harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, neque.
			</p>
			<div className="text-white flex justify-center items-center w-full gap-5">
				<span className="block w-full text-sm text-right">
					Alex Smith
				</span>
				<span className="">|</span>
				<span className="block w-full text-sm text-left">Envato Author</span>
			</div>
		</div>

		<div className="flex justify-center gap-2 mt-8">
			<span className="w-2 h-2 inline-block rounded-full bg-neutral-600 hover:bg-gold cursor-pointer transition-colors"></span>
			<span className="w-2 h-2 inline-block rounded-full bg-neutral-600 hover:bg-gold cursor-pointer transition-colors"></span>
			<span className="w-2 h-2 inline-block rounded-full bg-neutral-600 hover:bg-gold cursor-pointer transition-colors"></span>
		</div>

	</section>
	)
}

export default Testimonials