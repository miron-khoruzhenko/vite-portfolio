import Hero from "./3-hero/Hero"
import Coarusell from "./5-coarusell/CarouselB"
import CardContainer from "./6-about-us/CardContainer"
import Feautres from "./7-features1/Feautres"
import AboutUs from "./6-about-us/AboutUs"
import ContactUs from "./8-contact-form/ContactUs"
import MiniFooter from "../../common/2-footer/MiniFooter"
// import Carousel from "../../common/сoarusell/Carousel"

const Home = () => {
	return (
		<div className="">
			<Hero/>
			<AboutUs />
			{/* <CardContainer /> */}
			<Feautres/>
			<Coarusell />
			{/* <Carousel /> */}
			<ContactUs/>
			<MiniFooter/>
		</div>
	)
}

export default Home