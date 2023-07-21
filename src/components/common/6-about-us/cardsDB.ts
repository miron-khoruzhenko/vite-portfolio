import img1 from '../../../assets/imgs/1-cards/1-trends.jpg'
import img2 from '../../../assets/imgs/1-cards/2-young.jpg'
import img3 from '../../../assets/imgs/1-cards/3-support.jpg'
import img4 from '../../../assets/imgs/1-cards/4-design.jpg'

let index = 0;

const images = [img1, img2, img3, img4]


const cards = [
	{
		img : images[index],
		index: index++,
		title: 'Trend Technology',
		desc : "We always improve our work using today's or even more advanced technologies, and we are not afraid to learn.",
		link : "https://somelink.com"
	},{
		img : images[index],
		index: index++,
		title: 'Young and Dynamic',
		desc : "We always improve our work using today's or even more advanced technologies, and we are not afraid to learn.",
		link : "https://somelink.com"
	},{
		img : images[index],
		index: index++,
		title: 'Fast Support',
		desc : "We always improve our work using today's or even more advanced technologies, and we are not afraid to learn.",
		link : "https://somelink.com"
	},{
		img : images[index],
		index: index++,
		title: 'Impressive Designs',
		desc : "We always improve our work using today's or even more advanced technologies, and we are not afraid to learn.",
		link : "https://somelink.com"
	},
]

export default cards