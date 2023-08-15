import cards from "./cardsDB"
import Card from "./Card"

const CardContainer = () => {
	return (
		<div className="flex flex-wrap container mx-auto gap-4 my-14">


			{cards.map(card => {
					return (
						<Card 
							img={card.img} 
							title={card.title}
							desc={card.desc}
							link={card.link}
							index={card.index}
							key={card.index}
						/>
					)
			})}
		</div>
	)
}

export default CardContainer