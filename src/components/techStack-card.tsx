"use client"
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface Card{
    tech : string,
    svg : string
}

interface MarqueueRowProps{
    cards: Card[] ,
    direction : "left" | "right",
    speed: number
}

export function TechStackCard({cards, direction = "left", speed = 25} : MarqueueRowProps){
    const duplicatedCards = [...cards, ...cards];
    const [isHovered, setIsHovered] = useState(false);
    const xTranslation = direction == "left" ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className="overflow-hidden w-full flex py-3">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
            <motion.div
            className="flex gap-4"
            animate={isHovered ? {} : {
                x: xTranslation
            }}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            transition={{
                ease: "linear",
                duration: speed,
                repeat: Infinity
            }}
            >
                {duplicatedCards.map((card, index) => (
                    <Card shadow={false}>
                            <CardHeader floated={false} shadow={false} className="md:h-[90px] md:w-[76px] h-12 w-24">
                                <Image
                                src={card.svg}
                                alt={card.tech}
                                fill
                                loading="eager"
                                className="h-16 w-full object-contain opacity-75"
                                />
                            </CardHeader>
                            <CardBody className="-mt-4">
                                <Typography className="text-center font-normal text-gray-500">
                                    {card.tech}
                                </Typography>
                            </CardBody>
                        </Card>
                ))}
            </motion.div>
        </div>
    );
}

export default TechStackCard;