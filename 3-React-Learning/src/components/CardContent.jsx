import { cardsData } from '../data';
import Cards from './Cards';

export default function CardContent(){
    return(
        <section id="cardContent">
            {
                cardsData.map((card) => (
                <Cards key={card.title} {...card}/>
                ))
            }
        </section>
    )
}