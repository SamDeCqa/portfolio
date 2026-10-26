"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface transitProps {
    children : ReactNode,
    className? : string
}

export default function Transit({children, className = ""} : transitProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(
        ()=> {
        const element = ref.current;

        if(!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(element);
            }
        }, {threshold : 0.15});

        observer.observe(element)

        return () => observer.unobserve;
    }, []);

    return (
        <div
        ref={ref}
        className={
            `transition-all duration-700 ease-out motion-reduce:transition-none
             ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
             ${className}`}
        >
            {children}
        </div>
    );
}
