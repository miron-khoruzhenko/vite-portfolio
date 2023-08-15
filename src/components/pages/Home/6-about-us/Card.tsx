type CardProps = {
	title: string,
	desc: string,
	img: string,
	link: string,
	index: number
}

const Card = (props : CardProps) => {
	
	const styles = {
		card : "flex-grow w-full sm:w-2/5 lg:w-1/5 mx-4 sm:m-0  rounded-md group ",
		cardColors: 'bg-white dark:bg-zinc-800 shado-xl shadow-lg shadow-zinc-400 dark:shadow-none ',
		movingContainer: 'transition-transform group-hover:-translate-y-2 duration-500 ',
		title: "font-bold text-zinc-900 dark:text-white text-xl mb-2 relative ",
		titleAfter: "after:content-[''] after:block after:h-[2px] after:w-16 after:my-2 after:bg-zinc-700 after:dark:bg-zinc-700 ",
		desc: "text-zinc-500 dark:text-zinc-400 text-md mb-4",
	}

	const colors = ['bg-red-600', 'bg-yellow-600', 'bg-green-600', 'bg-blue-600']

	return (
		<div className={styles.card}>
			<div className={styles.movingContainer + styles.cardColors}>

				<div className={"clip-image relative h-60  " + colors[props.index]}>
					<img src={props.img} alt="" className={'opacity-40 w-full h-full object-cover '} />
				</div>
				<div className="p-3 pb-5">
					<h4 className={styles.title + styles.titleAfter}>{props.title}</h4>
					<p className={styles.desc}>{props.desc}</p>
				</div>
			</div>
		</div>
	)
}

export default Card