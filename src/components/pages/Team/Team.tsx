import {useEffect} from 'react'

import Hero from './Hero/Hero'
import Navbar from '../../common/1-navbar/Navbar'
import AboutMe from './About Me/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Services from './MyServices/Services'
import Footer from '../../common/2-footer/Footer'

const Team = () => {

	useEffect(()=> {
		if(document.body.classList.contains('dark')){
			document.body.classList.remove('dark')
			return(()=>{
				document.body.classList.add('dark')
			})
		}

	})
	
	return (
		<div className=''>
			<Navbar isSwitcherActive={false} className='' variant='allLight'/>
			<Hero/>
			<AboutMe/>
			<Services/>
			<Portfolio/>
			<Footer />
		</div>
	)
}



export default Team