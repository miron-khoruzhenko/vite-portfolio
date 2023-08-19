import Hero from "./Hero/Hero"
import Coarusell from "./Coarusell/CarouselB"
import Feautres from "./Features1/Feautres"
import AboutUs from "./About-us/AboutUs"
import ContactUs from "./Contact-form/ContactUs"
import MiniFooter from "../../common/2-footer/MiniFooter"
import Navbar from "../../common/1-navbar/Navbar"
// import Carousel from "../../common/сoarusell/Carousel"

const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Hero/>
			<AboutUs />
			<Feautres/>
			<Coarusell />
			<ContactUs/>
			<MiniFooter/>
		</div>
	)
}

export default Home