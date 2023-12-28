import { CardItem, Strong } from "./styles"

export function Card({name, time}){
    return(
        <CardItem>
            <Strong>{name}</Strong>
            <small>{time}</small>
        </CardItem>
    )
}