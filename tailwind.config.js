/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        // card1 : 'url("./src/assets/imgs/1-meeting.jpg")',
        

        // darkcityMd  : 'linear-gradient(180deg, rgba(24, 24, 27, 1) 0%, rgba(24, 24, 27, .85) 100%), url("./src/assets/imgs/contact-us/city-md.jpg")',
        // darkcityLg  : 'linear-gradient(180deg, rgba(24, 24, 27, 1) 20%, rgba(24, 24, 27, .85) 100%), url("./src/assets/imgs/contact-us/city-lg.jpg")',
        
        // counter_bg: 'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(/src/assets/imgs/portfolio/counter-bg.jpg)',
        

        // cityMd      : 'linear-gradient(180deg, rgba(255, 255, 255, .80) 10%, rgba(244, 244, 245, .80) 100%), url("./src/assets/imgs/contact-us/city-md.jpg")',
        // cityLg      : 'linear-gradient(180deg, rgba(255, 255, 255, .80) 10%, rgba(244, 244, 245, .80) 100%), url("./src/assets/imgs/contact-us/city-lg.jpg")',

        upDownDark  : 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',

        // teamMe : 'linear-gradient(180deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .6) 100%), url("./src/assets/imgs/me.jpg")',
        //* teamMe : 'linear-gradient(90deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .0) 100%), url("./src/assets/imgs/me.jpg")',

        // abstract : 'linear-gradient(170deg, rgba(49, 57, 73, 0.8) 20%, rgba(49, 57, 73, 0.5) 20%, rgba(49, 57, 73, 0.5) 35%, rgba(41, 48, 61, 0.6) 35%, rgba(41, 48, 61, 0.8) 45%, rgba(31, 36, 46, 0.5) 45%, rgba(31, 36, 46, 0.8) 75%, rgba(49, 57, 73, 0.5) 75%), linear-gradient(45deg, rgba(20, 24, 31, 0.8) 0%, rgba(41, 48, 61, 0.8) 50%, rgba(82, 95, 122, 0.8) 50%, rgba(133, 146, 173, 0.8) 100%) #313949'

        counter_bg: 'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(/imgs/counter-bg.jpg)',
        cityMd      : 'linear-gradient(180deg, rgba(255, 255, 255, .80) 10%, rgba(244, 244, 245, .80) 100%), url("/imgs/city-md.jpg")',
        cityLg      : 'linear-gradient(180deg, rgba(255, 255, 255, .80) 10%, rgba(244, 244, 245, .80) 100%), url("/imgs/city-lg.jpg")',
        darkcityMd  : 'linear-gradient(180deg, rgba(24, 24, 27, 1) 0%, rgba(24, 24, 27, .85) 100%), url("/imgs/city-md.jpg")',
        darkcityLg  : 'linear-gradient(180deg, rgba(24, 24, 27, 1) 20%, rgba(24, 24, 27, .85) 100%), url("/imgs/city-lg.jpg")',
        teamMe : 'linear-gradient(90deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .0) 100%), url("/imgs/me.jpg")',

      },
      colors: {
        'gold' : '#c49b66',
      },
      animation : {
        'moving-ball1' : 'animBall1 30s linear infinite, rotateBall 30s linear infinite', 
        'moving-ball2' : 'animBall2 30s linear infinite reverse, rotateBall 30s linear infinite', 
      },
      keyframes : {
        animBall1 : {
          '40%' : {top: '30%', opacity: '.1', left: '75%',},        
          '50%' : {top: '70%', left: '80%',},
          '80%' : {top: '50%',}
        },
        animBall2 : {
          '40%' : {top: '30%', left: '90%', },
          '70%' : {top: '70%', opacity: '.1' },
          '80%' : {top: '80%', },
          '85%' : {left: '10%',}
        },
        rotateBall : {
          '100%' :{rotate:' 360deg'}
        }

      }
    },
  },
  plugins: [],
}