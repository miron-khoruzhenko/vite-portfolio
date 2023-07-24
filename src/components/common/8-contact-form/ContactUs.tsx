import React from 'react'
import global_styles from '../../../assets/styles/global_styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { Button } from '../../features/Button'

const ContactUs = () => {
	const handleSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
	}

	const styles = {
		contactUs : 'flex flex-col justify-center ',
		form : 'flex flex-col justify-center items-start gap-8 mx-10 py-20 shadow-md w-full transition-colors container ',
		background : 'dark:bg-zinc-800 bg-cityMd lg:bg-cityLg dark:bg-darkcityMd lg:dark:bg-darkcityLg bg-bottom bg-cover bg-no-repeat',
		heading : 'text-2xl font-bold text-zinc-200 mx-auto mb-7 ',
		label : 'w-full ',
		inputContainer : 'flex flex-col md:flex-row gap-8 w-full',
		inputFields : 'w-full px-4 py-3 bg-white/60 dark:bg-zinc-900/60 border dark:border-zinc-600 dark:text-zinc-200 focus:outline-none ',
		input : '',
		textarea : 'resize-none h-36 ',
		btnContainer : 'w-full flex justify-between',
		infoBlock : 'flex justify-between w-full container mx-auto',
	}

	return (
		<section className={styles.contactUs + styles.background}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h2 className={global_styles.combinedHeading + styles.heading}>Let's Get in Touch</h2>
				
				<div className={styles.inputContainer}>

					<label htmlFor="contact-form__name" className={styles.label }>

						<input 
							placeholder='Name*'
							type="text" 
							id='contact-form__name' 
							className={styles.input + styles.inputFields} />
					</label>

					<label htmlFor="contact-form__email" className={styles.label }>

						<input
							placeholder='Email*'
							type="email" 
							id='contact-form__email' 
							className={styles.input + styles.inputFields} />
					</label>

				</div>

				<label htmlFor="contact-form__subject" className={styles.label }>

					<input 
						placeholder='Subject'
						type="text" 
						id='contact-form__subject' 
						className={styles.input + styles.inputFields} />
				</label>

				<label htmlFor="contact-form__message" className={styles.label }>

					<textarea 
						placeholder='Your message...'
						name="contact-form__message-block" 
						id="contact-form__message" 
						className={styles.textarea + styles.inputFields}/>
				</label>

				<div className={styles.btnContainer}>
					<Button className='' btnStyle='white' type='submit'>Send Message</Button>
					<Button className='hidden md:block ' btnStyle='red' type='reset'>Clear</Button>	
				</div>				
			</form>
			<div className={styles.infoBlock}>
				<InfoItem icon={'icon-phone'} title={'phone'} text={'+90 546 438 9457'} href='tel:+905464389457' />
				<InfoItem icon={'icon-envelope'} title={'phone'} text={'+90 546 438 9457'} href='tel:+905464389457' />
				<InfoItem icon={'icon-map-pin'} title={'phone'} text={'+90 546 438 9457'} href='tel:+905464389457' />

			</div>
		</section>
	)
}

type InfoItemProps = {
	// icon	: IconDefinition;
	icon	: string;
	title	: string;
	text	: string;
	href?	: string,
}

const InfoItem = (props : InfoItemProps) => {
	return(
		<div className="flex ">
			{/* <FontAwesomeIcon icon={props.icon} className='text-3xl'/> */}
			<i className={props.icon + " icon + text-3xl "}></i>
			<div className="">
				<h3 className="capitalize">{props.title}</h3>
				{ props.href ? 
					<a href={props.href} className="">{props.text}</a> :
					<p className="">{props.text}</p>
				}
			</div>
		</div>
	)
}

export default ContactUs