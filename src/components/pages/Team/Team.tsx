import React from 'react'

import Hero from './Hero/Hero'
import Navbar from '../../common/1-navbar/Navbar'

const Team = () => {
	return (
		<div className=''>
			<Navbar isSwitcherActive={true}/>
			<Hero/>
		</div>
	)
}

export default Team