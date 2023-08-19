import Button from "../../../features/Buttons/Button2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const Hero = () => {
	const styles = {
		hero : 'w-screen h-screen bg-teamMe bg-center bg-no-repeat bg-cover bg-fixed',
		heroBlur : "backdrop-blur-sm w-full h-full flex justify-center items-center",
		textContainer : "flex flex-col w-full container mx-auto",
		btnContainer : "flex gap-4 justify-start items-center mt-10",
	}
	return (
		<div className={styles.hero}>
			<div className={styles.heroBlur}>
				<div className={styles.textContainer}>
					<span className='font-bold text-5xl mb-6 text-zinc-100'>Hi, I'm Miron Khoruzhenko</span>
					<span className='text-md max-w-2xl'>I'm a web developer who specializes in creating unique and modern websites. My passion lies in the seamless integration of coding and design, resulting in a perfect blend that brings websites to life.</span>
					<div className={styles.btnContainer}>

            <Button  
              frontContent={"Contact"}
              backContent={<FontAwesomeIcon icon={faPaperPlane} className='' /> } 
            />
            
					</div>

				</div>
			</div>
		</div>
	)
}




export default Hero;