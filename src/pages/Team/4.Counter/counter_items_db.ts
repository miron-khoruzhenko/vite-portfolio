let index = 0

const counter_items_db = [
	{
		title: 10000,
		descr: 'Lines Of Code',
		icon_name: 'icon-pencil',
		index: index++,
	},
	{
		title: 1350,
		descr: 'Coffee consumed',
		icon_name: 'icon-wine',
		index: index++,
	},
	{
		title: '∞',
		descr: 'sleepless nights',
		icon_name: 'icon-hourglass',
		index: index++,
	},
	{
		title: 315,
		descr: 'File downloaded',
		icon_name: 'icon-download',
		index: index++,
	},
]

export const db_size = counter_items_db.length

export default counter_items_db 