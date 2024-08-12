import {useEffect} from 'react'

import Hero from './1.Hero/Hero'
import AboutMe from './2.About Me'
import Services from './3.MyServices/Services'
import Counter from './4.Counter'
import Portfolio from './5.Portfolio'

import Navbar from '@common/1-navbar/Navbar'
import Footer from '@common/2-footer/Footer'
import Testimonials from './6.Testimonials'
import Blog from './7.Blog'

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
			<Testimonials />
			<Blog />

			<Footer />
		</div>
	)
}



export default About