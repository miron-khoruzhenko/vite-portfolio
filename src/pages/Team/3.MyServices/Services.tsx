import global_styles from '@assets/styles/global_styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import SwiperElement from './SwiperElement';
import Button from '@components/features/Buttons/Button2';

const Services = () => {
	const styles = {
		section : 'flex flex-col-reverse md:flex-row justify-center items-center container mx-auto pt-20 md:py-20 gap-12',
		heading : 'text-left capitalize text-zinc-800 font-bold text-4xl relative mb-12',
		leftSide : 'w-full md:w-2/5 h-full flex-1 flex flex-col items-start justify-center px-12 text-zinc-600 ',
		rightSide : 'w-full md:w-3/5 h-ful flex-1 h-96 ',
		btn : {
			style:{
				btn: 'fontsemibold text-sm ',
				// before: 'border border-blue-800 bg-blue-900 text-white ',
				before: 'border border-zinc-800 bg-zinc-900 text-white ',
				after: 'border border-zinc-900 text-zinc-950 ',
			},
		}

	}
	return (
		<section className={styles.section}>
			<div className={styles.leftSide}>
				<h2 className={global_styles.leftPseudo + styles.heading}>Some of <br /> my services...</h2>
				<p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur expedita excepturi sit veniam nobis ea odit neque vel ex architecto doloribus illum, maiores fuga voluptatem veritatis rem, nihil officia. Corrupti!</p>
				
				<Button backContent={<FontAwesomeIcon icon={faMagnifyingGlass} />} frontContent={'Explore More'} href='#' styles={styles.btn.style} />

			</div>

			<div className={styles.rightSide}>
				<SwiperElement/>
			</div>
		</section>

	)
}

export default Services