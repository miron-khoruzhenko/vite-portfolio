import { useEffect, useState } from "react";

type CardProps = {
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
		li : `${props.sliderHeight} bg-neutral-500 top-0 left-0 list-none text-5xl relative inline-block `,
		liHover : 'group-hover:something s'	
	}

	return (
		<li 
			className={styles.li + styles.liHover} 
			style={{width: `${cardWidth}px`, 
							margin: `0 ${Math.round(margin/2)}px`}} >
				<div className="absoulte w-full h-full inline-flex items-end justify-end	">
					{props.text}
				</div>
		</li>
	)
}

export default Card