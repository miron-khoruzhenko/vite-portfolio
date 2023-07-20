import { links } from './links.ts'
import { Link } from 'react-router-dom'

type NavbarLinksProps = {
	mode: string,
}	

const NavbarLinks : React.FC<NavbarLinksProps> = ({mode}) => {
	const styles = {
		ul: "",
	}
	if (mode === 'vertical'){
		styles.ul = 'flex flex-col space-y-6 text-2xl '
	}else if(mode === 'horizontal'){
		styles.ul = "flex space-x-4 max-sm:hidden "
	}
	return (
		<ul className={styles.ul}>

		{links["to"].map((item, index) => {
			return (
				<li className="" key={index}>
					<Link 
						to={item.href} 
						className={links.classNames}>
							{item.name}
					</Link>
				</li>)
		})}
	</ul>
	)
}


export default NavbarLinks