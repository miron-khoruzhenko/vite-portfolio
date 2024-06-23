import { useState } from "react"
import counter_items_db, { db_size } from "./counter_items_db"

import CountUp from 'react-countup'

const Counter = () => {
	const styles = {
		container: '',
	}

	return (
		<section className="bg-count bg-fixed bg-counter_bg my-20">
		{/* <!-- content --> */}
		<div className="container m-auto flex flex-col justify-center text-center">
			{/* <!-- grid --> */}
			<div 
				className="grid grid-cols-3 gap-10 md:gap-6 my-10"
				style={{gridTemplateColumns: `repeat(${db_size}, minmax(200px, 1fr)`}}	
			>
				{
					counter_items_db.map((item) => {
						return (
							<CounterItem
								count={item.title}
								descr={item.descr}
								icon_name={item.icon_name}
								key={item.index}
							/>
						)
					})
				}				
			</div>
		</div>
	</section>
	)
}

const CounterItem = (
	{count, descr, icon_name} : 
	{count:string|number, descr:string, icon_name:string}) => 
{
	const [isSign, setIsSign] = useState(false)

	let countUp = null

	if (typeof count === 'string')
		countUp = null
	else if (count >= 9999)
		countUp = 9999
	else
		countUp = count

	const handleAnimEnd = () => {
		if (countUp === 9999)
			setIsSign(true)
	}

	return(
		<div className="col-span-3 md:col-span-1">
			<span className="flex justify-center text-center items-center text-gold text-3xl mb-px md:mb-4">
				<i className={"icon " + icon_name}/>
			</span>

			<h3 className="text-zinc-50 text-2xl md:text-4xl md:mb-2 uppercase font-light">
				{
					countUp === null ? 
						count : 
						<CountUp 
							end={countUp}
							enableScrollSpy={true}
							scrollSpyOnce={true}
							duration={3}
							onEnd={handleAnimEnd}
							/>
				}
				{isSign ? '+' : ''}
			</h3>
			<p className="text-zinc-400 capitalize">{descr}</p>
		</div>
	)
}

export default Counter