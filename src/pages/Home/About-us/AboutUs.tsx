import global_styles from "@assets/styles/global_styles"
import CardContainer from "./CardContainer"

const AboutUs = () => {
	const styles = {
		abouUs : 'py-10 px-4 container mx-auto mb-28 my-14',
		heading : global_styles.combinedHeading + 'mb-14 ',
		subheading : global_styles.sectionSubHeading,
		descr : 'text-center max-w-4xl mx-auto my-14 text-zinc-400',

	}
	return (
		<section className={styles.abouUs}>
			<h3 className={styles.subheading}>Who we are?</h3>
			<h2 className={styles.heading}>Let Me Tell You</h2>
			{/* <p className={styles.descr}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nobis ad nemo praesentium sed voluptatum! Quaerat voluptate expedita consequatur est culpa ullam ratione suscipit recusandae doloremque laudantium nisi asperiores blanditiis nobis minima, unde facilis sed aliquid animi iure in aut illo quisquam nam laboriosam. Voluptatibus, magnam odio. Voluptatibus, inventore optio!</p> */}
			<CardContainer />
		</section>
	)
}

export default AboutUs