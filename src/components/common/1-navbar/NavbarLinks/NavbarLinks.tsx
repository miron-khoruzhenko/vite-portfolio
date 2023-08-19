import { useEffect } from 'react'
import { links } from './links.ts'
import { Link, useLocation } from 'react-router-dom'

type NavbarLinksProps = {
	mode: string,
}	

const NavbarLinks : React.FC<NavbarLinksProps> = (props) => {
	const {mode} = props
	const location = useLocation()

	const styles = {
		ul: `${mode === 'vertical' ? 'flex flex-col space-y-6 text-2xl ' : mode === 'horizontal' ? "flex space-x-4 max-sm:hidden " : '' }`,
		links : "relative transition-colors text-zinc-900 dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50   ",
		linksAfter : `after:block after:h-[2px] after:w-full after:my-1 after:transition-opacity after:absolute after:opacity-0 after:bg-zinc-500 dark:after:bg-zinc-200 hover:after:opacity-100 `,
		linkActive : 'dark:text-zinc-50 '
	}

	return (
		<ul className={styles.ul}>

		{links["to"].map((item, index) => {
			return (
				<li className="" key={index}>
					<Link 
						to={item.href} 
						className={styles.links + styles.linksAfter + (item.href === location.pathname ? styles.linkActive : '')}>
							{item.name}
					</Link>
				</li>)
		})}
	</ul>
	)
}


export default NavbarLinks