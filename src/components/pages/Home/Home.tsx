import Hero from "../../common/3-hero/Hero"
import Coarusell from "../../common/5-сoarusell/Coarusell"
import CardContainer from "../../common/6-cards/CardContainer"
// import Carousel from "../../common/сoarusell/Carousel"

const Home = () => {
	return (
		<div className="">
			<Hero/>
			<Coarusell />
			<CardContainer />
			{/* <Carousel /> */}
		</div>
	)
}

export default Home