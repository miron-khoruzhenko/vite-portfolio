import Hero from "./Hero/Hero"
// import Coarusell from "./Coarusell/oldVersions/CarouselB"
import Feautres from "./Features1"
import AboutUs from "./About-us/AboutUs"
import ContactUs from "./Contact-form/ContactUs"
import FlickySlider from "./Coarusell"

import MiniFooter from "@common/2-footer/MiniFooter"
import Navbar from "@common/1-navbar/Navbar"
import { useEffect } from "react"
// import Carousel from "../../common/сoarusell/Carousel"

const Home = () => {
	useEffect(()=> {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className="">
			<Navbar/>
			<Hero/>
			<AboutUs />
			<Feautres/>
			{/* <Coarusell /> */}
			<FlickySlider />
			<ContactUs/>
			<MiniFooter/>
		</div>
	)
}

export default Home