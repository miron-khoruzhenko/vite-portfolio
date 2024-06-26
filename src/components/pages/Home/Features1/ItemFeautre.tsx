import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// Интерфейс для пропсов компонента ItemFeature
interface ItemFeatureProps {
  icon: IconDefinition;
  title: string;
  descr: string;
}

const styles = {
	li : 'flex justify-center items-start gap-6 group mb-8',
	icon : "bg-blue-800/80  dark:bg-violet-800 transition-colors text-white aspect-square w-10 rounded-md flex items-center justify-center",
	title : "font-bold mb-2 text-lg text-zinc-800 dark:text-inherit",
	descr : "text-md text-zinc-500 dark:text-zinc-400 transition-colors",
	
}

const ItemFeautre = (props : ItemFeatureProps) => {
	return (
		<li className={styles.li}>
			<div className={styles.icon}>
				<FontAwesomeIcon icon={props.icon} className='' />
			</div>
			<div className="w-9/12 md:w-11/12 ">
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.descr}>{props.descr}</p>
			</div>
		</li>
	)
}

export default ItemFeautre