import Button from "../../../features/Buttons/Button2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const Hero = () => {
	const styles = {
		hero : 'w-screen h-screen bg-zinc-700 bg-teamMe bg-center bg-no-repeat bg-cover bg-fixed',
		heroBlur : "backdrop-blur-sm w-full h-screen flex justify-center items-center border-4 border-white ",
		textContainer : "flex flex-col w-full container mx-auto",
		heading : 'font-bold text-4xl text-center md:text-left md:text-5xl mb-6 text-zinc-100',
		descr : 'text-md text-center mx-auto md:m-0 md:text-left max-w-xs md:max-w-2xl text-zinc-300',
		btnContainer : "flex gap-4 justify-start items-center mt-10 mx-auto md:mx-0",
	}
	return (
		<section className={styles.hero}>
			<div className={styles.heroBlur}>
				<div className={styles.textContainer}>
					<span className={styles.heading}>Hi, I'm Miron Khoruzhenko</span>
					<span className={styles.descr}>My passion lies in the seamless integration of coding and design, resulting in a perfect blend that brings websites to life.</span>
					<div className={styles.btnContainer}>

            <Button  
              frontContent={"Contact"}
              backContent={<FontAwesomeIcon icon={faPaperPlane} className='' /> } 
            />
            
					</div>

				</div>
			</div>
		</section>
	)
}


export default Hero;