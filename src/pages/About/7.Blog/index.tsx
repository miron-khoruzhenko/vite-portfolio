import blog_items from './blog_items'
import { Link } from 'react-router-dom'


const Blog = () => {
	return (
		<section id="blog" className="bg-white py-14 my-24 px-3 md:px-0">
			<div className="container mx-auto">
				<h2
					className="text-center text-4xl text-zinc-900 font-semibold mb-24 relative
			after:content-[''] after:block after:h-px after:w-12 after:bg-gold
			after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-4
			before:content-[''] before:block before:h-px before:w-40 before:bg-neutral-200
			before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-4">
					My Blog
				</h2>
				<div className="flex gap-8">

					{blog_items.map((item) => {
						return (
							<div key={item.id} className=" hidden first:block md:flex flex-col  shadow-xl shadow-zinc-300 basis-1/1 md:basis-1/2 lg:basis-1/3">
								<img src={item.img} alt="" className="" />
								<div className="p-4">
									<h3 className="mt-8 font-bold text-neutral-600 text-xl">{item.title}</h3>
									<p className="text-zinc-400 text-sm mt-4 pb-4">{item.descr}</p>
									<div className="flex justify-between border-t border-neutral-100 pt-4 text-xs">
										<Link to={item.href} className="text-gold">Read More</Link>
										<span className="text-zinc-400">By: Admin</span>
									</div>
								</div>
							</div>
						)
					})}


				</div>

				<div className=" hidden justify-center gap-2 mt-12 ">
					<span className="w-2 h-2 inline-block rounded-full bg-neutral-300 hover:bg-gold cursor-pointer transition-colors"></span>
					<span className="w-2 h-2 inline-block rounded-full bg-neutral-300 hover:bg-gold cursor-pointer transition-colors"></span>
					<span className="w-2 h-2 inline-block rounded-full bg-neutral-300 hover:bg-gold cursor-pointer transition-colors"></span>
				</div>

			</div>
		</section>
	)
}

export default Blog