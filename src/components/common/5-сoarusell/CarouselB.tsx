import Card from "./Card"
import { useEffect, useRef, useState } from "react"
import items from "./itemsB"

const sliderHeight = 'h-60'
// * Не все h- работают. Например h-15

const Coarusell = () => {

	const ulContainerRef = useRef<HTMLInputElement>(null);

	const [ulWidth, setUlWitdth] = useState(0);
	const [sliderPosition, setSliderPosition] = useState(0)
	const [isTicking, setIsTicking] = useState(false)
	// const [disableTransition, setDisableTransition] = useState(false)



		const twistSlider = (direction : string | null) => {
			if(!isTicking){
			console.log(direction)

			// TODO: сделай обработку негативных чисел и округление
			let position = sliderPosition

			if(direction === 'prev'){
				position += 1;
			}else if(direction === 'next'){
				position -= 1;
			}
			// Что бы не было перебора но и небыло начала с нуля
			position = position % items.length + 1
			setSliderPosition(position)
			setIsTicking(true)
		}
	}

	const handleResize = () => {
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
			console.log(ulContainerRef.current.clientWidth)
		}
	}

	const sleep = (ms = 0) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	useEffect(()=>{
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
		}
		addEventListener('resize', handleResize)

		console.log('Coarusell rendered')

		return ()=>{
			removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(()=>{
		if(isTicking){
			sleep(300).then(()=>{
				setIsTicking(false)
			})
		}
	},[isTicking])

	useEffect(()=>{
		console.log('sliderPosition:', sliderPosition)
		console.log('sliderPosition % items.length + 1:', sliderPosition % items.length + 1)
	}, [sliderPosition])

	return (
		<div className={styles.container}>
			{/* Стрелка налево */}
			<div className="">
				<button 
					data-direction="prev"
					className={styles.btn + styles.btnLeft} 
					// onClick={handleSliderLeftBtn}/>
					onClick={e => twistSlider(e.currentTarget.getAttribute('data-direction'))}/>
			</div>

			<div className={styles.div} ref={ulContainerRef}>

				<ul className={styles.ul}>
					{items.map((item) => {
						return (
							<Card 
								sliderPosition={sliderPosition}
								img={item.img} 
								title={item.title} 
								link={item.link}
								text={item.text}
								sliderHeight={sliderHeight}
								parentWidth={ulWidth}
								key={item.index} />)
					})}
				</ul>

				<div className="text-center space-x-2">
					{
						items.map((item)=>{
							
							return(
								<span 
									className={styles.dot + (sliderPosition % items.length  === item.index ? 'bg-white ' : 'bg-zinc-400 ')} 
									key={item.index + 'dot'}
									data-index={item.index}></span>
							)
						})
					}
				</div>

			</div>

			{/* Стрелка направо */}
			<div>
				<button 
					data-direction="next"
					className={styles.btn + styles.btnRight}
					onClick={e => twistSlider(e.currentTarget.getAttribute('data-direction'))}/>
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
	btnRight : " border-t-4 border-r-4 -ml-6 ",
	dot : "inline-block w-2 h-2 rounded-full cursor-pointer ",
}

export default Coarusell


