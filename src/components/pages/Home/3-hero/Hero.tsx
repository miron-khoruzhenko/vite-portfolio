import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const Hero = () => {


	return (
		<section className={styles.hero + styles.background}>
			<h1 className={styles.heading}>Lorem ipsum <br /> dolor sit</h1>
			<p className={styles.descr}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perferendis exercitationem maiores sit eaque eligendi!</p>

      <AnimatedBallOne/>
      <AnimatedBallTwo/>

			<div className="flex gap-6">
				<button className={styles.btn + styles.btn1 + styles.btnDark1}>Discover</button>

				<button className={styles.btn + styles.btn2 + styles.btnDark2}>Contact <FontAwesomeIcon icon={faPaperPlane} className='ml-2' /> </button>
			</div>

		</section>
	)
}

const styles = {
	background : 'dark:bg-zinc-800 lg:dark:bg-darkcityLg bg-bottom bg-cover bg-no-repeat bg-fixed',
	hero		: " h-[100lvh] w-screen flex flex-col gap-12 justify-center items-center text-center relative overflow-visible ",
	heading	: " font-bold text-6xl md:text-7xl z-10 dark:text-zinc-100",
	descr		: " max-w-2xl p-2 text-md md:text-xl text-zinc-700 dark:text-zinc-400 z-10 ",
	btn			: " w-32 py-2 rounded-md border border-zinc-300 transition-colors z-10 ",
	btn1		: " bg-zinc-900 text-zinc-200 active:bg-zinc-800 z-10 ",
	btn2		: " hover:bg-zinc-200 hover:text-zinc-950 active:scale-105 transition-all z-10 ",
	btnDark1: " hover:dark:bg-zinc-50 dark:text-zinc-950 dark:bg-zinc-200 z-10 ",
	btnDark2: "",
	ball		: " aspect-square absolute ",
	ball1		: "  top-14 left-0 animate-moving-ball1 ",
	ball2		: " w-1/12 top-14 left-1/4 animate-moving-ball2",
}

const AnimatedBallOne = () => {
  return (
    <div className={styles.ball + styles.ball1}>
      <svg id="visual" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(97.94297596492407 89.82528857646489)"><path d="M76 -70.1C95 -57 104.5 -28.5 102 -2.5C99.6 23.6 85.1 47.1 66.1 66.6C47.1 86.1 23.6 101.6 -0.6 102.2C-24.7 102.7 -49.5 88.5 -67.2 69C-84.8 49.5 -95.4 24.7 -97.8 -2.4C-100.1 -29.5 -94.3 -58.9 -76.6 -71.9C-58.9 -85 -29.5 -81.6 -0.5 -81.1C28.5 -80.6 57 -83.1 76 -70.1" fill="rgba(39, 39, 42, 0.3)"></path></g></svg>
    </div>
  )
}

const AnimatedBallTwo = () => {
  return (
    <div className={styles.ball + styles.ball2}>
      <svg id="visual" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(110.16854893571164 120.96269579369691)"><path d="M56.2 -48.6C72.8 -24 86.1 -0.7 81.7 18.6C77.3 38 55.1 53.2 34 58.8C12.9 64.4 -7.1 60.4 -32.6 53.5C-58.1 46.7 -89 37 -99.1 16C-109.1 -5 -98.3 -37.4 -78.4 -62.8C-58.4 -88.2 -29.2 -106.6 -4.7 -102.9C19.8 -99.1 39.6 -73.3 56.2 -48.6" fill="rgba(39, 39, 42, 0.2)"></path></g></svg>
    </div>
  )
}



export default Hero