"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import mouseEffect from "./mouseEffect.module.css";
import { clsx } from 'clsx';

export default function MouseEffect({ children }) {
    const mouseRef = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [minimized, setMinimized] = useState(false);
    const thingRef = useRef(null);
    const mouseHoveringThing = useRef(false)

    const getDistance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

    const loop = useCallback(() => {
        const mouse = mouseRef.current;
        const distance = getDistance(position, mouse);
        const thingRadius = thingRef.current.getBoundingClientRect().width / 2;

        mouseHoveringThing.current = distance < thingRadius;
        const speed = Math.max(10 * distance / 100, 5);


        if (distance < speed) {
            setPosition({ x: mouse.x, y: mouse.y });
            thingRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%,-50%)`;
        } else {
            const angle = Math.atan2(mouse.y - position.y, mouse.x - position.x);
            const x = Math.cos(angle) * speed;
            const y = Math.sin(angle) * speed;
            const newPosition = { x: position.x + x, y: position.y + y };
            setPosition(newPosition);
            thingRef.current.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px) translate(-50%,-50%)`;
        }

    }, [position]);

    const recursivelyCheckForNoMouseEffect = useCallback((el) => {
        if (el.nomouseeffect) {
            return true;
        } else if (el.parentElement) {
            return recursivelyCheckForNoMouseEffect(el.parentElement);
        } else {
            return false;
        }
    }, []);

    const handleMouseMove = useCallback((e) => {
        console.log(e.target);
        if (recursivelyCheckForNoMouseEffect(e.target)) {
            setMinimized(true);
        } else {
            setMinimized(false);
        }
        mouseRef.current = { x: e.clientX, y: e.clientY };
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        const i = setInterval(requestAnimationFrame(loop), 1000 / 60);

        return () => {
            clearInterval(i);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove, loop]);


    return (
        <div
            id={mouseEffect.container}
        >
            <div
                ref={thingRef}
                id={mouseEffect.thing}
                className={clsx(
                    minimized && mouseEffect.minimized,
                    mouseHoveringThing.current && !minimized && mouseEffect.hovered
                )}
            />
            {children}
        </div>
    );
}

export function NoMouseEffect(props) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.nomouseeffect = true;
    }, []);
    return <div
        style={{ display: "inline-block", ...props.style }}
        ref={ref} {...props} />
}