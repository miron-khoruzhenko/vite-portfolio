import Hero from "../../common/3-hero/Hero"
import Coarusell from "../../common/5-сoarusell/CarouselB"
import CardContainer from "../../common/6-cards/CardContainer"
import Feautres from "../../common/7-features1/Feautres"
// import Carousel from "../../common/сoarusell/Carousel"

const Home = () => {
	return (
		<div className="">
			<Hero/>
			<CardContainer />
			<Feautres/>
			<Coarusell />
			{/* <Carousel /> */}
		</div>
	)
}

export default Home