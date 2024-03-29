"use client"

import { useEffect, useState } from "react"
import bouncyText from "./bouncyText.module.css"
import useMouseAcceleration from 'react-mouse-acceleration';

export default function BouncyText({ children, direction, bounceScale }) {
    if (!direction) direction = "vertical";

    const mouseAcceleration = useMouseAcceleration();
    const characters = children.split("");

    const [states, setStates] = useState(new Array(characters.length).fill({ offset: 0, velocity: 0, acceleration: 0 }));

    //Handle physics
    const k = .05;

    useEffect(() => {
        const loop = () => {
            setStates((prevStates) => {
                return prevStates.map(({ offset, velocity, acceleration }, index) => {
                    let newAcceleration = (-k * offset);

                    //Move towards our neighbors
                    if (prevStates[index - 1]) {
                        newAcceleration += prevStates[index - 1].offset * .02;
                    }
                    if (prevStates[index + 1]) {
                        newAcceleration += prevStates[index + 1].offset * .02;
                    }

                    let newVelocity = velocity + newAcceleration - .1 * velocity;
                    let newOffset = offset + newVelocity;

                    //Trim to 2 decimal places to prevent laggy DOM stuff
                    newOffset = Math.round(newOffset * 100) / 100;

                    // const max = 30;
                    // if (Math.abs(newOffset) > max) {
                    //     newOffset = Math.sign(newOffset) * max;
                    //     newVelocity *= -.8;
                    // }
                    return {
                        offset: newOffset,
                        velocity: newVelocity,
                        acceleration: newAcceleration,
                    };
                });
            });

            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);
    }, []);

    const onCharHovered = (index) => {
        let speed = direction === "vertical" ? mouseAcceleration.verticalSpeed : mouseAcceleration.horizontalSpeed;
        if (bounceScale) speed *= bounceScale;

        const mouseDirection = direction === "vertical" ? mouseAcceleration.verticalDirection : mouseAcceleration.horizontalDirection;
        const newVelocity = Math.min(
            speed / 10,
            10
        ) * mouseDirection;
        setStates((prevState) => {
            const newStates = [...prevState];
            newStates[index] = {
                ...newStates[index],
                velocity: newVelocity,
            };
            return newStates;
        });
    }
    return (
        <span>
            {characters.map((character, index) => (
                <BouncyCharacter key={index} index={index} onHover={onCharHovered} direction={direction} offset={states[index].offset}>
                    {character === " " ? <>&nbsp;</> : character}
                </BouncyCharacter>
            ))}
        </span>
    )
}
function BouncyCharacter({ children, onHover, index, offset, direction }) {
    const offsetEffect = {}
    if (direction === "vertical") {
        offsetEffect.transform = `translateY(${offset}px)`;
    } else {
        if (offset > 0) {
            offsetEffect.marginLeft = `${offset}px`;
        } else {
            offsetEffect.marginRight = `${offset}px`;
        }
    }
    return (
        <span
            key={index}
            onMouseOver={() => { onHover(index) }}
            className={bouncyText.bouncyCharacter}
            style={offsetEffect}
        >
            {children}
        </span>
    );
}