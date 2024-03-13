let index = 0
const dbSize = 5

import img1 from '../../../../assets/imgs/portfolio/1.jpg'
import img2 from '../../../../assets/imgs/portfolio/2.jpg'
import img3 from '../../../../assets/imgs/portfolio/3.jpg'
import img4 from '../../../../assets/imgs/portfolio/4.jpg'
import img5 from '../../../../assets/imgs/portfolio/5.jpg'
import img6 from '../../../../assets/imgs/portfolio/6.jpg'

const imgs = [img1, img2, img3, img4, img5, img6]


type SwiperType = {
	heading : string,
	descr : string,
	link : string,
	img : string,
	index: number,
}
const swiperItems :SwiperType[] = []

for (let i = 0; i < dbSize; i++){
	swiperItems.push(	
		{
			heading : 'Lorem Ipsum',
			descr : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quisquam corporis fugit dicta itaque officia illum nostrum fuga quod impedit iure in magnam cumque incidunt, sit explicabo inventore! Nobis, cum.',
			link : 'www.somelink.com',
			// img : imgs[index],
			img : 'https://images.unsplash.com/photo-1628944682084-831f35256163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			index: index++,
	})
}

export default swiperItems