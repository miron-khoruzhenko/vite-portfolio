import {faPenNib, faGlobe, faUserPlus, faComments} from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass, faArrowRight} from '@fortawesome/free-solid-svg-icons'

let index = 0

const features = [
	{
		index : index++,
		title : 'Impressive Designs',
		descr : 'Thanks to our designs that surpass the understanding of modern design, every product we create is unique and attractive.',
		icon 	: faPenNib,
	},
	{
		index : index++,
		title : 'Modern Websites',
		descr : "Websites, which we liken to digital 'Buildings', are much more practical than a physical building. You can invite your customers from all over the world to your digital building in seconds, and watch the entire process grow while you relax.",
		icon 	: faGlobe,
	},
	{
		index : index++,
		title : 'Reinvent Your Digital Life',
		descr : 'Considering that people spend more time in the digital world than the physical one, working with the best in the digital field seems like the best decision to make.',
		icon 	: faUserPlus,
	},
	{
		index : index++,
		title : 'After-sales Support',
		descr : 'We value after-sales support more than pre-sales support. Please do not hesitate to ask us if you have any questions.',
		icon 	: faComments,
	},
	{
		index : index++,
		title : 'We are Friends with Search Engines',
		descr : 'Our products are always designed to be SEO compatible. You can be recognized by search engines even without receiving any SEO service. Additionally, you can be far ahead of your competitors by taking advantage of our SEO services.',
		icon 	: faMagnifyingGlass,
	},
	{
		index : index++,
		title : 'Integration Support',
		descr : 'We love working in harmony! Integration support is available in many of our products, especially in E-Commerce.',
		icon 	: faArrowRight,
	},
]

export default features;