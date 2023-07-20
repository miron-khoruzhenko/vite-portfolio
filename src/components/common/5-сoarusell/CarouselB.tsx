import Card from "./Card"
import { useEffect, useRef, useState } from "react"
import items from "./itemsB"

const sliderHeight = 'h-60'
// * Не все h- работают. Например h-15

const Coarusell = () => {

	const itemsClone = [ ...items.slice(-2), ...items, ...items.slice(0,2)]
	const cloneLen = itemsClone.length

	const ulContainerRef = useRef<HTMLInputElement>(null);

	const [ulWidth, setUlWitdth] = useState(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timer  | string | number | undefined>(0);
	const [sliderPosition, setSliderPosition] = useState(items.length + 1)
	const [isTicking, setIsTicking] = useState(false)
	const [disableTransition, setDisableTransition] = useState(false)

	// ==== Functions ====================================

		const twistSlider = (direction : string | null = 'next', toPosition : null | number = null) => {
			if(!isTicking){
				let position = toPosition || sliderPosition

				if(!toPosition){
					if(direction === 'prev'){
						position += 1;
					}else if(direction === 'next'){
						position -= 1;
					}
					// Что бы не было перебора но и небыло начала с нуля
					if(position < 0){
						position += cloneLen
					}
					position = position % cloneLen
				}

			setSliderPosition(position)
			setIsTicking(true)
		}
	}


	const handleResize = () => {
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
		}
	}

	const handleDotClick : React.MouseEventHandler<HTMLSpanElement> = (e) => {
		const index : number | null = parseInt(e.currentTarget?.getAttribute('data-index') || '')

		const cardPosition = items.length + 1 - (index || 0)
		twistSlider('', cardPosition)
	}

	const getRationalIndex = (parentWidth = 1024) => {

		let rationalIndex = (items.length - sliderPosition + (parentWidth >= 1024 ? 1 : 0)) % items.length
						

		if (rationalIndex < 0){
			rationalIndex += items.length
		}

		return rationalIndex;
	}

	const sleep = (ms = 0) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};


	// ==== useEffects ====================================

	useEffect(()=>{
		if(ulContainerRef?.current?.offsetWidth){
			setUlWitdth(ulContainerRef.current.clientWidth)
		}
		addEventListener('resize', handleResize)

		console.log('==== Coarusell Mounted ====================')

		return ()=>{
			removeEventListener('resize', handleResize)
			console.log('xxxx Coarusell Unmounted xxxxxxxxxxxxxxxxxxxx')

		}
	}, [])

	useEffect(() => {
		const id = setInterval(()=>{
				twistSlider('next')
			}, 3000)
		setIntervalId(id)

		return()=>{
			clearInterval(id)
			clearInterval(intervalId);
		}
	
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sliderPosition, isTicking])
	

	useEffect(()=>{
		if(isTicking){
			sleep(350).then(()=>{
				if(sliderPosition === 1 || sliderPosition === cloneLen - 2){
					const isLastCopy = sliderPosition === cloneLen - 2;

					setDisableTransition(true)
					
					if (isLastCopy) {
						setSliderPosition(2);
					} else {
						setSliderPosition(items.length + 1);
					}
				}
					
				// setIsTicking(false)
			})
		}
	},[isTicking, cloneLen, sliderPosition])


	// ====================================================

	return (
		<div className={styles.carousel}>
			<h4 className={styles.subheading}>Some of</h4>
			<h3 className={styles.heading + styles.headingAfter}>Our Works</h3>
			<div className={styles.container}>
				{/* Стрелка налево */}
				<div className="">
					<button 
						data-direction="prev"
						className={styles.btn + styles.btnLeft} 
						onClick={e => twistSlider(e.currentTarget.getAttribute('data-direction'))}/>
				</div>

				<div className={styles.div} ref={ulContainerRef}>

					<ul className={styles.ul}>
						{itemsClone.map((item, index) => {
							return (
								<Card 
									sliderPosition={sliderPosition - cloneLen + 2}
									disableTransition={disableTransition}
									setDisableTransition={setDisableTransition}
									setIsTicking={setIsTicking}
									itemCount={cloneLen}
									getRationalIndex={getRationalIndex}
									
									img={item.img} 
									title={item.title} 
									// title={String(sliderPosition)} 
									link={item.link}
									text={item.text}
									sliderHeight={sliderHeight}
									parentWidth={ulWidth}
									index={item.index}
									
									key={index > 1 && index < cloneLen - 2 ? item.index : item.index + 'clone'} 
								/>)
						})}
					</ul>
				</div>

				{/* DIV нужен что бы стрелка не обрезалась  */}
				<div>
					{/* Стрелка направо */}
					<button 
						data-direction="next"
						className={styles.btn + styles.btnRight}
						onClick={e => twistSlider(e.currentTarget.getAttribute('data-direction'))}/>
				</div>
			</div>

			{/* Slider Dots */}
			<div className="text-center space-x-2">
				{
					items.map((item)=>{
						const rationalIndex = getRationalIndex()
						
						return(
							<span 
								className={styles.dot + ( rationalIndex === item.index ? 'bg-zinc-800 dark:bg-zinc-300 border-0 ' : 'bg-zinc-300 dark:bg-zinc-700 ')}
								onClick={handleDotClick}
								key={item.index + 'dot'}
								data-index={item.index}></span>
						)
					})
				}
			</div>
		</div>
	)
}


const styles = {
	carousel: 'bg-zinc-100 py-4 dark:bg-transparent ',
	subheading : 'text-center ',
	heading : "text-center text-3xl font-bold dark:text-zinc-100 mb-6 ",
	headingAfter : "after:block after:h-[2px] after:w-12 after:bg-zinc-300 after:my-2 after:mx-auto after:rounded-full ",
	container : "my-2 mx-auto flex justify-center items-center gap-0 px-5 ",
	div : "w- mx- overflow-hidden w-full lg:text-black ",
	ul : "gap-8 relative overflow-hidden w-max " + sliderHeight,
	btn : " hidden md:block text-white text-5xl font-bold w-10 h-10 rotate-45 z-10 border-zinc-500 dark:border-zinc-100",
	btnLeft : " border-l-4 border-b-4 -mr-0 ",
	btnRight : " border-t-4 border-r-4 -ml-0 ",
	dot : "inline-block w-2 h-2 rounded-full cursor-pointer border border-zinc-300 dark:border-0 ",
}

export default Coarusell


