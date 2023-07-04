import Card from "./Card"
import { useEffect, useRef, useState } from "react"
import items from "./itemsB"

const sliderHeight = 'h-60'
// * Не все h- работают. Например h-15

const Coarusell = () => {

	const ulContainerRef = useRef<HTMLInputElement>(null);

	const [ulWidth, setUlWitdth] = useState(0);

	useEffect(()=>{
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
		}
		addEventListener('resize', handleResize)

		console.warn('Coarusell rendered')

		return ()=>{
			removeEventListener('resize', handleResize)
		}
	}, [])

	const handleResize = () => {
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
			console.log(ulContainerRef.current.clientWidth)
		}
	}

	return (
		<div className={styles.container}>
			{/* Стрелка налево */}
			<div className="">
				<button className={styles.btn + styles.btnLeft}/>
			</div>

			<div className={styles.div} ref={ulContainerRef}>

				<ul className={styles.ul}>
					{items.map((item) => {
						return (
							<Card 
								img={item.img} 
								title={item.title} 
								link={item.link}
								text={item.text}
								sliderHeight={sliderHeight}
								parentWidth={ulWidth}
								key={item.index} />)
					})}
				</ul>

			</div>

			{/* Стрелка направо */}
			<div>
				<button className={styles.btn + styles.btnRight}/>
			</div>
			
		</div>
	)
}

const styles = {
	container : "container my-4 mx-auto flex justify-center items-center gap-4 px-5",
	div : "w- mx-4 overflow-hidden w-full lg:text-black ",
	ul : "gap-8 relative overflow-hidden w-max " + sliderHeight,
	btn : " text-white text-5xl font-bold w-10 h-10 rotate-45 z-10",
	btnLeft : " border-l-4 border-b-4 -mr-6 ",
	btnRight : " border-t-4 border-r-4 -ml-6 "
}

export default Coarusell


