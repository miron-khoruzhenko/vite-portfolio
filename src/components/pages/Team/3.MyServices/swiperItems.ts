let index = 0

// import img1 from '../../../../assets/imgs/portfolio/1.jpg'
// import img2 from '../../../../assets/imgs/portfolio/2.jpg'
// import img3 from '../../../../assets/imgs/portfolio/3.jpg'
// import img4 from '../../../../assets/imgs/portfolio/4.jpg'
// import img5 from '../../../../assets/imgs/portfolio/5.jpg'
// import img6 from '../../../../assets/imgs/portfolio/6.jpg'

// import img1 from '/src/assets/imgs/portfolio/services/1.jpg'
import img1 from '/src/assets/imgs/portfolio/services/1.2.jpg'
// import img2 from '/src/assets/imgs/portfolio/services/2.png'
import img2 from '/src/assets/imgs/portfolio/services/2.2.jpg'
// import img3 from '/src/assets/imgs/portfolio/services/3.png'
// import img3 from '/src/assets/imgs/portfolio/services/3.2.jpg'
import img3 from '/src/assets/imgs/portfolio/services/3.3.jpg'
// import img4 from '/src/assets/imgs/portfolio/services/4.jpg'
import img4 from '/src/assets/imgs/portfolio/services/4.3.jpg'
// import img5 from '/src/assets/imgs/portfolio/services/5.jpg'
import img5 from '/src/assets/imgs/portfolio/services/5.2.jpg'

const headings = ['Scripting', 'Web Development', 'Automation', 'Embedded Systems', 'Web Design']

const descr_arr = [
	'Automate tasks, process data, and integrate systems with powerful scripting languages. Our scripts enhance efficiency and save you time and money.',
	'Create dynamic and interactive web applications using modern technologies and best practices. We ensure a reliable and scalable architecture for your business.',
	'Optimize and automate business processes with advanced solutions. We provide comprehensive services to implement automated systems, allowing you to focus on strategic tasks.',
	'Design and develop embedded systems for various industries. We create reliable and high-performance solutions that integrate seamlessly into existing infrastructures.',
	'Creative and functional web design that sets your site apart. We craft user interfaces that are not only visually appealing but also intuitive for users.',
]

const imgs = [img1, img2, img3, img4, img5]

const dbSize = headings.length

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
			heading : headings[index],
			// descr : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quisquam corporis fugit dicta itaque officia illum nostrum fuga quod impedit iure in magnam cumque incidunt, sit explicabo inventore! Nobis, cum.',
			descr : descr_arr[index],
			link : 'www.somelink.com',
			img : imgs[index],
			// img : 'https://images.unsplash.com/photo-1628944682084-831f35256163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			index: index++,
	})
}

export default swiperItems