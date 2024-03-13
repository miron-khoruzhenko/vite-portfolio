let index = 0

import img1 from '../../../../assets/imgs/portfolio/1.jpg'
import img2 from '../../../../assets/imgs/portfolio/2.jpg'
import img3 from '../../../../assets/imgs/portfolio/3.jpg'
import img4 from '../../../../assets/imgs/portfolio/4.jpg'
import img5 from '../../../../assets/imgs/portfolio/5.jpg'
import img6 from '../../../../assets/imgs/portfolio/6.jpg'

const imgs = [img1, img2, img3, img4, img5, img6]

const portfolioItems = [
	{
		heading: 'Creative Design',
		subheading: 'Design . Motion',
		img: imgs[index],
		imgAlt : 'some alt text',
		group: 'graphic',
		index: index++,
	},
	{
		heading: 'Creative Design',
		subheading: 'Design . Motion',
		img: imgs[index],
		imgAlt : 'some alt text',
		group: 'brand',
		index: index++,
	},
	{
		heading: 'Creative Design',
		subheading: 'Design . Motion',
		img: imgs[index],
		imgAlt : 'some alt text',
		group: 'design',
		index: index++,
	},
	{
		heading: 'Creative Design',
		subheading: 'Design . Motion',
		img: imgs[index],
		imgAlt : 'some alt text',
		group: 'design',
		index: index++,
	},
	{
		heading: 'Creative Design',
		subheading: 'Design . Motion',
		img: imgs[index],
		imgAlt : 'some alt text',
		group: 'graphic',
		index: index++,
	},
	{
		heading: 'Creative Design',
		subheading: 'Design . Motion',
		img: imgs[index],
		imgAlt : 'some alt text',
		group: 'brand',
		index: index++,
	},

	
]

export default portfolioItems;