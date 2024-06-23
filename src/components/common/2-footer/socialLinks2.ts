import { faInstagram, faLinkedin, faGithub, faTelegram, faTelegramPlane } from "@fortawesome/free-brands-svg-icons"

let index = 0

const social = [
	{
		icon: faLinkedin,
		link: 'https://www.linkedin.com/in/miron-khoruzhenko-164085202/',
		index: index++,
	},
	{
		icon: faGithub,
		link: 'https://github.com/miron-khoruzhenko',
		index: index++,
	},
	{
		icon: faInstagram,
		link: 'https://www.instagram.com',
		index: index++
	},
	{
		icon: faTelegramPlane,
		link: 'https://t.me/mironkhoruzhenko',
		index: index++
	},
	
]

export default social;