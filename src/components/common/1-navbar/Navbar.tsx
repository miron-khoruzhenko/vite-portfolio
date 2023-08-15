import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher.tsx'
// import Sigup from './Sigup.tsx'
import Loader from '../4-loader/Loader.tsx'
import SidebarScreen from './Sidebar/SidebarScreen.tsx'
import NavbarLinks from './NavbarLinks/NavbarLinks.tsx'


const Navbar = () => {

	const [isScrolledDown, setIsScrolledDown] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	// const [isBurgerPressed, setIsBurgerPressed] = useState(false)


	const styles = {
		nav : `w-full h-15 ${isScrolledDown ? ' bg-zin-100 bg-white dark:bg-zinc-800 shadow-lg' : ''} fixed top-0 z-50 transition-all duration-300 `,
		container : `container ${isScrolledDown ? 'py-2 px-4' : 'p-4' } transition-all mx-auto flex justify-between`,
		logo : 'flex justify-center items-center ',
		logoTitle : "uppercase font-bold text-xl text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors duration-300 cursor-pointer ",
		ul : "flex items-center space-x-1 ",
		themeSwitcher: "hidden sm:block select-none",
		user : "text-black hidden sm:block aspect-square h-[22px] text-sm rounded-full text-center bg-white cursor-pointer ",
		// hamburger: "block sm:hidden z-40",
	}
	

	const handleScroll = () => {
		if(window.scrollY >= 90){
			setIsScrolledDown(true)
		}else if(window.scrollY < 90){
			setIsScrolledDown(false)
		}
	}

	useEffect(() => {
		console.log('Navbar: Mounted')
		window.addEventListener('scroll', handleScroll);
		handleScroll()
		setIsLoaded(true)

		return () => {
			window.removeEventListener('scroll', handleScroll);
			console.log('Navbar: Unmounted')
		}

	},[])

  return (
		<>
		{isLoaded ? 
		(<nav className={styles.nav} onScroll={handleScroll}>
			<div className={styles.container}>

				{/* logo */}
				<div className={styles.logo}>
					<span className= {styles.logoTitle}> Orinium </span>
				</div>

				<NavbarLinks mode={'horizontal'}/>

				{/* Theme switcher and user icon */}
				<ul className={styles.ul}>

					{/* Theme switcher */}
					<li className={styles.themeSwitcher}><ThemeSwitcher /></li>

					{/* <Sigup/> */}
					<li className={styles.user}>
						<FontAwesomeIcon icon={faUser}/>
					</li>

				</ul>
				<SidebarScreen />
			</div>
		</nav>) : <Loader bg={''}/>
		}
		</>

  )

	
}


export default Navbar;