import React, { useRef, useState, useEffect } from 'react'

import Isotope from 'isotope-layout'; //  нужен для типов
import 'isotope-layout'; 

import global_styles from '../../../../assets/styles/global_styles'
import buttons from './btnList';
import portfolioItems from './portfolioItems';

// import img1 from '../../../../assets/imgs/portfolio/1.jpg'
// import img2 from '../../../../assets/imgs/portfolio/2.jpg'
// import img3 from '../../../../assets/imgs/portfolio/3.jpg'
// import img4 from '../../../../assets/imgs/portfolio/4.jpg'
// import img5 from '../../../../assets/imgs/portfolio/5.jpg'
// import img6 from '../../../../assets/imgs/portfolio/6.jpg'

const Portfolio = () => {

	const isotope = useRef<Isotope | null>(null)
  const [filterKey, setFilterKey] = useState('*')
  const [activeBtn, setActiveBtn] = useState(0)
	const [isoImgLoadedCount, setIsoImgLoadedCount] = useState(0)



	useEffect(() => {
		if (isotope.current)
      isotope.current.destroy()

    isotope.current = new Isotope('#isotope-grid', {
      itemSelector: '[data-portfolio-item]',
      layoutMode: 'masonry',
			percentPosition: true,
      // layoutMode: 'fitRows',
    })

    // cleanup
    return () => {
			if (isotope.current)
        isotope.current.destroy()
		}

  }, [isoImgLoadedCount])



	useEffect(() => {
		if (isotope.current)
			isotope.current.arrange({filter: `${filterKey}`})
  }, [filterKey])



	const handleClick : React.MouseEventHandler<HTMLButtonElement>  = e => {
		const data = e.currentTarget.dataset

		const filter = data.filter || ''
		const btnIndex = data.index ? parseInt(data.index) : 0

		setFilterKey(filter)
		setActiveBtn(btnIndex)
	}

	return (
		<section className='bg-white py-28 my-1'>
			<div className="container mx-auto">
				<h2
					className={global_styles.combinedHeading + styles.h2}>
					My Portfolio
				</h2>

				<ul className={styles.ulBtns} id="portfolio-btns">
					{buttons.map((btn)=> {
						return (
							<li className="" key={btn.index}>
								<button 
									data-filter={btn.filter}
									data-index={btn.index}
									onClick={handleClick}
									className={styles.btn + (activeBtn === btn.index ? 'bg-zinc-900 text-zinc-200 hover:text-white ' : 'hover:text-zinc-900 ')}
								>
									{btn.name}
								</button>
							</li>
						)
					})}
				</ul>

            <IsotopeComponent 
							setIsoImgLoadedCount={setIsoImgLoadedCount} 
							isoImgLoadedCount={isoImgLoadedCount}
						/>
					
			</div>

		</section>
	)
}

type IsoPropsType = {
	setIsoImgLoadedCount : React.Dispatch<React.SetStateAction<number>>
	isoImgLoadedCount : number,
}

const IsotopeComponent = (props : IsoPropsType) => {

	return(
		<div className={styles.isoGrid} id='isotope-grid'>
		{portfolioItems.map((item) => {
			return (
				<div data-portfolio-item className={styles.isoItem + item.group} key={item.index}>
					<div className={styles.isoSubitem + styles.isoPseudoAfter + styles.isoPseudoBefore}>
						<h6 className={styles.isoSubheading}>
							{item.subheading}
						</h6>

						<h5 className={styles.isoHeading}>
							{item.heading}
						</h5>

						<span className={styles.isoEye}></span>
					</div>

					<img 
						src={item.img} 
						alt={item.imgAlt} 
						className={styles.isoImg} 
						onLoad={() => props.setIsoImgLoadedCount(props.isoImgLoadedCount + 1)}
					/>
				</div>

			)
		})}
	</div>
	)
}

const styles = {
	h2 : ' ',
	ulBtns : 'flex justify-center space-x-4 mb-12 text-neutral-500 text-xs font-semibold ',
	btn : 'border border-zinc-200 rounded-md px-4 md:px-6 py-2 cursor-pointer hover:bg-gold transition-colors ',
	isoGrid : 'flex justify-center items-center gap-8 w-full md:max-w-[1200px] mx-auto ',
	isoItem : 'item sm:w-[calc(100%/2-1rem)] md:w-[calc(100%/3-1rem)] mx-2 mb-4 ',
	isoSubitem : 'hover:before:max-w-full hover:after:max-w-full group absolute top-1 bottom-1 right-1 left-1 flex flex-col justify-center items-center ',
	isoPseudoBefore : 'before:block before:bg-white before:transition-width before:duration-500 before:max-w-0 before:absolute before:left-0 before:bottom-1/2 before:top-0 before:w-full ',
	isoPseudoAfter : 'after:block after:bg-white after:transition-width after:duration-500 after:max-w-0 after:absolute  after:right-0 after:top-1/2 after:bottom-0 after:w-full ',
	isoHeading : 'z-10 text-neutral-700 font-semibold opacity-0  translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-moveIn duration-500 ',
	isoSubheading : 'z-10 text-amber-600 text-xs font-semibold mb-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-moveIn duration-500 ',
	isoEye : 'icon-aperture text-xl font-bold text-amber-600 text-gold absolute bottom-2 right-2 z-10 opacity-0 transition-opacity group-hover:opacity-100 duration-500 ',
	isoImg : 'w-full h-full object-cover ',
}

export default Portfolio
