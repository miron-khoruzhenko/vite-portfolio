import {rightFeatureItems, leftFeatureItems } from './featuresDB'
import ItemFeautre from './ItemFeautre'
import teamImg from '../../../assets/imgs/team.jpg'
import global_styles from '../../../assets/styles/global_styles'

const styles = {
	features : 'container text-center my-28 mx-auto overflow-hidden ',
	subheading : global_styles.sectionSubHeading,
	heading : global_styles.combinedHeading,
	contentBox : 'flex flex-col md:flex-row gap-8 mt-16',
	img : 'hidden lg:block opacity-80 hover:opacity-100 transition-opacity w-full h-full object-contain rounded-2xl',
	ul : 'flex flex-col gap-10 lg:gap-0 mx-4 justify-between text-left',
}
const Feautres = () => {
	return (
		// 
		<section className={styles.features}>
			<h3 className={styles.subheading}>Our Features</h3>
			<h2 className={styles.heading}>Have a dream? Digitize it with us!</h2>

			<div className={styles.contentBox}>
				<ul className={styles.ul}>
					{leftFeatureItems.map((item)=>{
						return (
							<ItemFeautre icon={item.icon} title={item.title} descr={item.descr} key={item.index} />
						)
					})}
				</ul>
				<div className="hidden xl:block overflow-hidden w-full">
					<img src={teamImg} alt="" className={styles.img} />
				</div>

				<ul className={styles.ul}>
					{rightFeatureItems.map((item)=>{
						return (
							<ItemFeautre icon={item.icon} title={item.title} descr={item.descr} key={item.index}  />
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Feautres