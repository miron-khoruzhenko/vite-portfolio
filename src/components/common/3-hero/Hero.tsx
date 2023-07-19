import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'


import { useEffect, useRef } from 'react';
// import KUTE from 'kute.js';


const Hero = () => {


	return (
		<div className={styles.hero}>
			<h1 className={styles.headging}>Lorem ipsum <br /> dolor sit</h1>
			<p className={styles.descr}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perferendis exercitationem maiores sit eaque eligendi!</p>

      <AnimatedBallOne/>
      <AnimatedBallTwo/>

			<div className="flex gap-6">
				<button className={styles.btn + styles.btn1 + styles.btnDark1}>Discover</button>

				<button className={styles.btn + styles.btn2 + styles.btnDark2}>Contact <FontAwesomeIcon icon={faPaperPlane} className='ml-2' /> </button>
			</div>

      {/* <BlobAnimation/> */}
		</div>
	)
}

const styles = {
	hero		: " h-screen w-full flex flex-col gap-12 justify-center items-center text-center relative overflow-hidden ",
	headging: " font-bold text-6xl md:text-7xl z-10 text-zinc-100",
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

// const BlobAnimation = () => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const tween = KUTE.fromTo(
//       '#blob1',
//       { path: '#blob1' },
//       { path: '#blob2' },
//       { repeat: Infinity, duration: 3000, yoyo: true }
//     );

//     tween.start();

//     return () => {
//       tween.stop(); // Остановка анимации при размонтировании компонента
//     };
//   }, []);

// 	const color = "rgba(39, 39, 42, 0.3)"

//   return (
//     <svg
//       ref={svgRef}
//       id="visual"
//       className="absolute scale-150"
//       viewBox="0 0 1300 300"
//       width="1300"
//       height="300"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       version="1.1"
//     >
//       <g transform="translate(654.8379837585063 141.36678347976093)">
//         <path
//           id="blob1"
//           d="M82.9 -87.3C96.1 -69.8 87.6 -34.9 81 -6.6C74.4 21.7 69.7 43.4 56.5 68.4C43.4 93.4 21.7 121.7 2 119.7C-17.7 117.7 -35.4 85.4 -55 60.4C-74.7 35.4 -96.3 17.7 -99.2 -2.8C-102 -23.3 -86 -46.7 -66.3 -64.2C-46.7 -81.7 -23.3 -93.3 5.8 -99.1C34.9 -104.9 69.8 -104.8 82.9 -87.3"
//           fill={color}
//         ></path>
//       </g>
//       <g
//         transform="translate(655.0535807126305 163.16242881119348)"
//         style={{ visibility: 'hidden' }}
//       >
//         <path
//           id="blob2"
//           d="M58.9 -54.7C82.4 -35.4 111.7 -17.7 114.3 2.6C116.9 22.9 92.7 45.7 69.2 59.2C45.7 72.7 22.9 76.9 1.6 75.2C-19.6 73.6 -39.1 66.1 -64.1 52.6C-89.1 39.1 -119.6 19.6 -124 -4.5C-128.5 -28.5 -107 -57 -82 -76.4C-57 -95.7 -28.5 -105.9 -5.4 -100.4C17.7 -95 35.4 -74 58.9 -54.7"
//           fill={color}
//         ></path>
//       </g>
//     </svg>
//   );
// };

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