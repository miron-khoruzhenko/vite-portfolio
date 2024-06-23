import React from 'react'
import Button from '../../../features/Buttons/Button2'

import img from '../../../../assets/imgs/testme4.jpg'
import social from './socialIcons'

import global_styles from '../../../../assets/styles/global_styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { descrMyParagraphs, descrParagraphs } from './descrParagraphs'

const AboutMe = () => {

	const styles = {
		section : 'w-screen container mx-auto grid md:flex justify-center items-center sm:grid-cols-1 gap-8 p-4 pt-14 md:p-14 lg:p-28 ',
		imgContainer : "w-full md:w-2/5 h-full relative order-last md:order-first aspect-[5/6] ",
		img : 'w-full h-full object-cover transition-transform hover:translate-x-3 duration-500  ',
		imgPseudo : 'after:block after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-neutral-500  after:opacity-10 after:translate-x-3 after:translate-y-3 hover:after:-translate-x-0 hover:after:-translate-y-3 hover:after:bg-amber-200 hover:after:opacity-100 after:transition-all after:duration-500 ',

		textContainer : 'w-full md:w-3/5 flex flex-col justify-start items-start gap-12 h-full ',
		heading : 'text-zinc-800 relative text-3xl font-bold ',
		paragrafContainer : 'space-y-6 ',
		personalDescr : 'text-zinc-400 ',

		socialContainer : 'flex gap-4',
		socialDiv : 'aspect-square w-8 border border-zinc-200 hover:bg-zinc-100 transition-colors flex justify-center items-center text-zinc-700 ',

		buttons: {
			left:{
				btn: 'fontsemibold text-sm ',
				// before: 'border border-blue-800 bg-blue-900 text-white ',
				before: 'border border-zinc-800 bg-zinc-900 text-white ',
				after: 'border border-zinc-900 text-zinc-950 ',
			},
			right : {
				btn: 'font-semibold text-sm ',
				before: 'border border-zinc-900 text-zinc-950 px-3 ',
				after: 'border border-zinc-800 bg-zinc-900 text-white ',
			}
		}

	}

	return (
		<section className={styles.section}>
			<div className={styles.imgContainer + styles.imgPseudo}>
				<img src={img} alt="" className={styles.img} />
			</div>

			<div className={styles.textContainer}>
				<h2 className={global_styles.leftPseudo + styles.heading}>Whoami </h2>

				<div className={styles.paragrafContainer}>
					{descrParagraphs.map((descr, index) => {
						return (
							<p className={styles.personalDescr} key={index}>{descr}</p>
						)
					})}
				</div>

				<div className={styles.socialContainer}>
					{social.map((social)=> {
						return (
							<a href={social.link} className="" key={social.index}>
								<div className={styles.socialDiv}>
									<FontAwesomeIcon icon={social.icon} />
								</div>
							</a>
						)
					})}
				</div>
				<div className="btn flex gap-2">
					<Button
						frontContent={'Contact Me'}
						backContent={<i className='icon-envelope text-xl font-bold ' />}
						styles={styles.buttons.left}
					/>
					<Button
						frontContent={'Download C.V.'}
						backContent={<i className='icon-paperclip text-xl font-bold' />}
						styles={styles.buttons.right}
					/>

				</div>
			</div>
		</section>
	)
}

export default AboutMe