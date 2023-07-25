import Hero from "../../common/3-hero/Hero"
import Coarusell from "../../common/5-coarusell/CarouselB"
import CardContainer from "../../common/6-about-us/CardContainer"
import Feautres from "../../common/7-features1/Feautres"
import AboutUs from "../../common/6-about-us/AboutUs"
import ContactUs from "../../common/8-contact-form/ContactUs"
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
		</div>
	)
}

export default Home