import {useEffect} from 'react'

import Hero from './1.Hero/Hero'
import Navbar from '../../common/1-navbar/Navbar'
import AboutMe from './2.About Me'
import Portfolio from './4.Portfolio/Portfolio'
import Services from './3.MyServices/Services'
import Footer from '../../common/2-footer/Footer'
import Counter from './5.Counter'

const About = () => {

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
			<Counter />
			<Portfolio/>
			<Footer />
		</div>
	)
}



export default About