import { useEffect, useState } from "react"

import NavbarLinks from "../NavbarLinks/NavbarLinks";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Hamburger from "./Hamburger";

// type SidebarProps = {
// 	isButtonPressed : boolean,
// }
const SidebarScreen = () => {

	const closeMode = "opacity-0 translate-x-full",
				openMode = "opacity-100 translate-x-0 ";

	const styles = {
		container : ` flex flex-col sm:hidden w-screen h-screen absolute top-0 left-0 justify-center items-center transition-all duration-700 z-10 `,
		containerBg : ' dark:bg-black backdrop-blur-sm dark:bg-opacity-80 bg-opacity-80 ',
		div : "absolute bottom-5 right-5 scale-125",
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


	useEffect(()=>{
		let timeoutId : NodeJS.Timeout;
		if(isBurgerPressed){
			setModeStyles(openMode)
		}else{
			setModeStyles(closeMode)
		}

		return () => {
			clearTimeout(timeoutId)
		}
	}, [isBurgerPressed])


	return (
		<>
		<div className="block sm:hidden z-20">
			<Hamburger isButtonPressed={isBurgerPressed} setIsButtonPressed={setIsBurgerPressed}/>
		</div>

		<div 
			className={styles.container + styles.containerBg + modeStyles}
			onClick={handleClick}
			>
			<NavbarLinks mode={'y'}/>
			<div className={styles.div}>
				<ThemeSwitcher/>
			</div>
		</div>
		</>
	)
}

export default SidebarScreen