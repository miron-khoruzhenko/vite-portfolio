import global_styles from "../../../assets/styles/global_styles"
import CardContainer from "./CardContainer"

const AboutUs = () => {
	const styles = {
		abouUs : '',
		heading : global_styles.combinedHeading,
		subheading : global_styles.sectionSubHeading,

	}
	return (
		<div className="">
			<h3 className={styles.subheading}>Who are we?</h3>
			<h2 className={styles.heading}>Let me tell you</h2>
			<CardContainer />
		</div>
	)
}

export default AboutUs