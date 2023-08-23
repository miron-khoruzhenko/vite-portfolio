import { useEffect } from 'react'
import { links } from './links.ts'
import { Link, useLocation } from 'react-router-dom'

type LinkStyles = {
  links: string;
  linksAfter: string;
  activeLink: string;
};

type NavbarLinksProps = {
	mode: string,
	className?: string,
	linkStyles: LinkStyles,
}	

const NavbarLinks : React.FC<NavbarLinksProps> = (props) => {
	const {mode, linkStyles} = props
	const location = useLocation()

	const styles = {
		ul: `${mode === 'vertical' ? 
			'flex flex-col space-y-6 text-2xl ' : 
			mode === 'horizontal' ? 
				"flex space-x-4 max-sm:hidden " : 
				'' }`,
	}

	return (
		<ul className={styles.ul + props.className}>

		{links["to"].map((item, index) => {
			return (
				<li className="" key={index}>
					<Link 
						to={item.href} 
						className={linkStyles.links + linkStyles.linksAfter + (item.href === location.pathname ? linkStyles.activeLink : '')}>
							{item.name}
					</Link>
				</li>)
		})}
	</ul>
	)
}


export default NavbarLinks