import React from 'react'

import Hero from './Hero/Hero'
import Navbar from '../../common/1-navbar/Navbar'
import AboutMe from './About Me/AboutMe'

const Team = () => {
	return (
		<div className=''>
			<Navbar isSwitcherActive={false} className='' variant='allLight'/>
			<Hero/>
			<AboutMe/>
		</div>
	)
}

export default Team