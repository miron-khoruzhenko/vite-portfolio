import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher.tsx'
// import Sigup from './Sigup.tsx'
import Loader from '../4-loader/Loader.tsx'
import SidebarScreen from './Sidebar/SidebarScreen.tsx'
import NavbarLinks from './NavbarLinks/NavbarLinks.tsx'

type NavProps = {
	isSwitcherActive? : boolean,
	variant? : 'dark' | 'light' | 'inherit' | 'allLight',
	className? : string,
}

const Navbar = (props : NavProps) => {

	const [isScrolledDown, setIsScrolledDown] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	// const [isBurgerPressed, setIsBurgerPressed] = useState(false)


	const styles = {
		nav : `w-full h-15 fixed top-0 z-50 transition-all duration-300 ${props.className} `,
		container : `container transition-all mx-auto flex justify-between items-center `,
		logo : 'flex justify-center items-center ',
		logoTitle : "uppercase font-bold text-xl transition-colors duration-300 cursor-pointer ",
		ul : "flex items-center space-x-1  ",
		navbarLinks : {
			links : "relative transition-colors dark:text-zinc-200    ",
			linksAfter : `after:block after:h-[2px] after:w-full after:my-1 after:transition-opacity after:absolute after:opacity-0 after:bg-zinc-500 dark:after:bg-zinc-200 hover:after:opacity-100 after:-bottom-2  `,
			activeLink : 'dark:text-zinc-50  '
		},
		themeSwitcher: `hidden sm:block ${props.isSwitcherActive ? ' ' : '-z-40 opacity-0 '} select-none`,
		user : "text-black hidden sm:block aspect-square h-[22px] text-sm rounded-full  text-center bg-white cursor-pointer ",
	}

	// const styles = {
	// 	nav : `w-full h-15 ${isScrolledDown ? `bg-white ${props.mode === 'allLight' ? '' : "dark:bg-zinc-800 " } shadow-lg` : ''} fixed top-0 z-50 transition-all duration-300 ${props.className} `,
	// 	container : `container ${isScrolledDown ? 'py-2 px-4' : 'p-4' } transition-all mx-auto flex justify-between`,
	// 	logo : 'flex justify-center items-center ',
	// 	logoTitle : "uppercase font-bold text-xl text-zinc-700 hover:text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-200 transition-colors duration-300 cursor-pointer ",
	// 	ul : "flex items-center space-x-1 ",
	// 	navbarLinks : '',
	// 	themeSwitcher: `hidden ${props.isSwitcherActive ? 'sm:block ' : ''} select-none`,
	// 	user : "text-black hidden sm:block aspect-square h-[22px] text-sm rounded-full text-center bg-white cursor-pointer ",
	// }
	


	if (isScrolledDown){
		styles.nav += 'bg-white shadow-lg '
		styles.container += 'py-2 px-4 '

		switch (props.variant){
			case 'allLight': 
				styles.nav += 'text-zinc-900 dark:text-zinc-900 dark:bg-white '
				styles.navbarLinks.links += 'text-zinc-800 dark:text-zinc-800 hover:text-zinc-950 '
				styles.navbarLinks.activeLink += 'text-zinc-50 '
				styles.navbarLinks.linksAfter += 'after:bg-zinc-700 dark:after:bg-zinc-700 '
				
				break
			// case 'dark':
			// 	break
			// case 'light':
			// 	break

			default: 
				styles.nav += 'dark:bg-zinc-800 '
				styles.navbarLinks.linksAfter += 'after:bg-zinc-500 dark:after:bg-zinc-200 '
				break
		}
	}else{
		styles.container += 'p-4 '
		styles.nav += ' '

		switch (props.variant){
			case 'allLight': 
				styles.navbarLinks.links += 'text-zinc-200 dark:text-zinc-200 hover:text-zinc-100 !dark:hover:text-zinc-100 '
				styles.navbarLinks.activeLink += 'text-zinc-50 '
				styles.navbarLinks.linksAfter += 'after:bg-zinc-300 dark:after:bg-zinc-300 '
				styles.logoTitle += 'text-zinc-200 hover:text-zinc-50  '
				break
			// case 'dark':
			// 	break
			// case 'light':
			// 	break

			default: 
				styles.navbarLinks.links += 'hover:text-zinc-700 dark:hover:text-zinc-50 '
				styles.logoTitle += 'text-zinc-700 hover:text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-200 '
				break
		}
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

				<div className={styles.logo}>
					<span className= {styles.logoTitle}> Orinium </span>
				</div>

				<NavbarLinks mode={'horizontal'} linkStyles={styles.navbarLinks} className={''}/>

				<ul className={styles.ul}>
					<li className={styles.themeSwitcher}>
						<ThemeSwitcher />
					</li>

					{/* <li className={styles.user}>
						<FontAwesomeIcon icon={faUser}/>
					</li> */}
				</ul>

				<SidebarScreen />
			</div>
		</nav>) : <Loader bg={''}/>
		}
		</>

  )

	
}

Navbar.defaultProps = {
	isSwitcherActive : true,
	mode : 'inherit'
}

export default Navbar;