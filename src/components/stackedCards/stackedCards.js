"use client"

import stackedCards from './stackedCards.module.css';
import { useState } from 'react';
export default function StackedCards(props) {
    const [cards, setCards] = useState(props.cards);
    const [animatingMove, setAnimatingMove] = useState(false);
    function topToBottom() {
        if (animatingMove) return;
        setAnimatingMove(true);

        setTimeout(() => {
            let temp = [...cards];
            temp.unshift(temp.pop());
            setCards(temp);
            setAnimatingMove(false);
        }, 500);
    }
    return (
        <div id={stackedCards.stackWrapper} onClick={topToBottom}>
            {
                cards.map((card, index) => {
                    return (
                        <div key={index}
                            className={`
                            ${stackedCards.card} 
                            ${(animatingMove && index == cards.length - 1) ? stackedCards.cardLeaving : ""}
                            ${index < cards.length - 3 ? stackedCards.cardHidden : ""}
                            `}>
                            {card}
                        </div>
                    )
                })
            }
        </div>
    )
}