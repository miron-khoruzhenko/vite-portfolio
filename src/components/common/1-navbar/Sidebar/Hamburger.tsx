import { useEffect, useRef } from 'react';
import './hamburgers/hamburgers.scss'

type HamburgerProps = {
	setIsButtonPressed : React.Dispatch<React.SetStateAction<boolean>>,
	isButtonPressed : boolean,
}

const Hamburger = (props : HamburgerProps) => {
	
	const ref = useRef<HTMLButtonElement | null>(null);

	useEffect(()=>{

		if(props.isButtonPressed){
			ref?.current?.classList.add('is-active')
		}else{
			ref?.current?.classList.remove('is-active')
		}

	}, [props.isButtonPressed])

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()

		props.setIsButtonPressed(!props.isButtonPressed)
	}

	return (
		<button className="hamburger hamburger--collapse z-40" ref={ref} type="button" onClick={handleClick}>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
	</button>

	)
}

export default Hamburger