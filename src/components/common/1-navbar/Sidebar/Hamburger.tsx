import './hamburgers/hamburgers.scss'

type HamburgerProps = {
	// setIsButtonPressed : React.Dispatch<React.SetStateAction<boolean>>,
	isButtonPressed : boolean,
}

const Hamburger = (props : HamburgerProps) => {

	return (
		<button className={`hamburger hamburger--collapse z-40 ${props.isButtonPressed ? "is-active" : "" } `} type="button">
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
	</button>

	)
}

export default Hamburger