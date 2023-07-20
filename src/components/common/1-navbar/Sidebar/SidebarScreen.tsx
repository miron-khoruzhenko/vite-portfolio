import { useEffect, useState } from "react"

import NavbarLinks from "../NavbarLinks/NavbarLinks";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Hamburger from "./Hamburger";

const SidebarScreen = () => {

	const closeMode = "opacity-0 translate-x-full",
				openMode = "opacity-100 translate-x-0 ";

	const styles = {
		container : ` flex flex-col sm:hidden w-screen h-[100svh] absolute top-0 left-0 justify-center items-center transition-all duration-700 z-10 `,
		containerBg : ' dark:bg-black backdrop-blur-sm dark:bg-opacity-80 bg-opacity-80 ',
		div : "absolute bottom-5 right-5 scale-125",
		hamburger : "block sm:hidden z-20 -mb-2 relative ",
		hamburgerPsu : "after:block after:absolute after:w-14 after:h-14 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
	}

	const [modeStyles, setModeStyles] = useState('')
	const [isBurgerPressed, setIsBurgerPressed] = useState(false)


	const handleClick : React.MouseEventHandler<HTMLDivElement> = e => {
		const target = e.target as HTMLElement

		if ('A' === target.tagName){
			setIsBurgerPressed(false)
			setModeStyles(closeMode)
		}
	}

	const handleBurgerClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault()

		setIsBurgerPressed(!isBurgerPressed)
	}


	useEffect(()=>{
		let timeoutId : NodeJS.Timeout;
		if(isBurgerPressed){
			setModeStyles(openMode)
			document.body.style.position = 'fixed'
		}else{
			setModeStyles(closeMode)
			document.body.style.position = 'static'
		}

		return () => {
			clearTimeout(timeoutId)
		}
	}, [isBurgerPressed])


	return (
		<>
		<div className={styles.hamburger + styles.hamburgerPsu} onClick={handleBurgerClick}>
			<Hamburger isButtonPressed={isBurgerPressed}/>
		</div>

		<div 
			className={styles.container + styles.containerBg + modeStyles}
			onClick={handleClick}
			>
			<NavbarLinks mode={'vertical'}/>
			<div className={styles.div}>
				<ThemeSwitcher/>
			</div>
		</div>
		</>
	)
}

export default SidebarScreen