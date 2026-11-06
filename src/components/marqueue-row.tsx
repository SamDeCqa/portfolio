"use client"
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { motion } from "motion/react";
import Image from "next/image";

interface Card{
    tech : string,
    svg : string
}

interface MarqueueRowProps{
    cards: Card[] ,
    direction : "left" | "right",
    speed: number
}

export function MarqueueRow({cards, direction = "left", speed = 25} : MarqueueRowProps){
    const duplicatedCards = [...cards, ...cards];

    const xTranslation = direction == "left" ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className="overflow-hidden w-3/4 flex py-3">
            <motion.div
            transition={{
                ease: "linear",
                duration: speed,
                repeat: Infinity
            }}
            >
                {duplicatedCards.map((card, index) => (
                    <Card shadow={false}>
                            <CardHeader floated={false} shadow={false}>
                                <Image
                                src={card.svg}
                                alt={card.tech}
                                width={76}
                                height={90}
                                loading="eager"
                                className="h-16 w-16 object-contain"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography>
                                    {card.tech}
                                </Typography>
                            </CardBody>
                        </Card>
                ))}
            </motion.div>
        </div>
    );
}

export default MarqueueRow;