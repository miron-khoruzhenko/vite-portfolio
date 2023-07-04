
const items : {
	index : number,
	title : string,
	text : string,
	img : string,
	link : string
}[] = []

const dbSize = 7

for (let x = 0; x < dbSize; x++){
	items.push(
		{
			index : x,
			title : "Template",
			text : String(x + 1),
			img : 'someurl.jpg',
			link : "https://somelink.com"
		}
	)
}

export default items;

// let index = 0

// export const items = [
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
// 	{
// 		index : index++,
// 		title : "Template",
// 		img : 'someurl.jpg',
// 		link : "https://somelink.com"
// 	},
	
// ]