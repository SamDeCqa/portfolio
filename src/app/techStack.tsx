"use client"

import TechStackCard from "@/components/techStack-card";
import { getImagePrefix } from "../../utils/utils";
import { Typography } from "@material-tailwind/react";
import Transit from "@/components/transit";

const techs = [
    {
        tech: "Laravel",
        svg: `${getImagePrefix()}logos/Laravel.svg`
    },
    {
        tech: "AlpineJs",
        svg: `${getImagePrefix()}logos/Alpine.js.svg`
    },
    {
        tech: "Tailwind",
        svg: `${getImagePrefix()}logos/tailwindcss.svg`
    },
    {
        tech: "Livewire",
        svg: `${getImagePrefix()}logos/Livewire.svg`
    },
    {
        tech: "MongoDB",
        svg: `${getImagePrefix()}logos/mongodb.svg`
    },
    {
        tech: "MySQL",
        svg: `${getImagePrefix()}logos/mysql.svg`
    },
    {
        tech: "PostgreSQL",
        svg: `${getImagePrefix()}logos/postgresql.svg`
    },
    {
        tech: "React",
        svg: `${getImagePrefix()}logos/react-js.svg`
    },
    {
        tech: "Rust",
        svg: `${getImagePrefix()}logos/Rust.wine.svg`
    },
];
export function TechStack() {
    return (
        <section className="mb-20 w-full mx-auto">
            <p className="text-center text-5xl md:text-7xl rubik-marker-hatch-regular">
                Tech Stack
            </p>

            <div className="md:flex items-center justify-between w-full md:px-24">
                <div className="md:w-1/2 w-full overflow-hidden">

                    <div className="relative flex flex-wrap w-full justify-center">
                        <TechStackCard
                            cards={techs}
                            direction="left"
                            speed={20}
                        />

                        <TechStackCard
                            cards={techs}
                            direction="right"
                            speed={20}
                        />

                        {/* Left fading */}
                        <div className="absolute inset-y-0 left-0 w-20
                        bg-gradient-to-r from-white to-transparent
                        pointer-events-none z-10" />

                        {/* Right fading */}
                        <div className="absolute inset-y-0 right-0 w-20
                        bg-gradient-to-l from-white to-transparent
                        pointer-events-none z-10" />
                    </div>

                </div>

                <Transit>
                    <div className="">
                        <Typography
                            variant="lead"
                            className="md:mx-auto w-1/2 font-normal !text-gray-500"
                        >
                            Very familiar with modern languages and frameworks with the aim of boosting productivity
                        </Typography>
                    </div>
                </Transit>
            </div>
        </section>
    );
}
export default TechStack;