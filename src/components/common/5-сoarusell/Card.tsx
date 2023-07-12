type CardProps = {
	sliderPosition: number,
	img: string,
	title: string,
	link: string, 
	text: string, 
	sliderHeight: string,
	parentWidth: number,
	key: number,
}

const Card = (props : CardProps) => {
	const margin = 20, //px
				partCount =  props.parentWidth > 1024 ? 3 : props.parentWidth > 768 ? 2 : 1,
				cardWidth = Math.round(props.parentWidth / partCount) - margin;



	const styles = {
		li : `${props.sliderHeight} bg-neutral-500 top-0 left-0 list-none text-5xl relative inline-block transition-transform duration-300 `,
		container: 'absoulte w-full h-full inline-flex items-end justify-end relative ',
		img : 'w-full h-full object-cover ',
		descrBlock : "absolute w-full h-full bg-black/0 opacity-0 hover:bg-black/80 hover:opacity-100 transition-colors flex flex-col justify-center items-center gap-4 text-center text-white",
		descrHeading : 'text-xl ',
		descrText : 'text-sm',
		btn: 'px-4 py-2 bg-black block text-base '
	}

	return (
		<li 
			className={styles.li} 
			style={{width: `${cardWidth}px`, 
							margin: `0 ${Math.round(margin/2)}px`,
							transform: `translate(${(cardWidth + margin) * props.sliderPosition}px)`}} >
				<div className={styles.container}>
					<div className="w-full h-full">
						<img src={props.img} alt="" className={styles.img} />
					</div>
					<div className={styles.descrBlock}>
						<h5 className={styles.descrHeading}>Amazing Website</h5>
						<p className={styles.descrText}>{props.text}</p>
						<a href="" className={styles.btn}>Visit page</a>

					</div>
				</div>
		</li>
	)
}

export default Card