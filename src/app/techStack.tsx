"use client"

import TechStackCard from "@/components/techStack-card";
import { getImagePrefix } from "../../utils/utils";
import { Typography } from "@material-tailwind/react";

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
        <section className="mb-20 h-fit w-[100%] px-24">
            <p className="text-center md:text-7xl text-5xl rubik-marker-hatch-regular">Tech Stack</p>

            <div className="md:flex items-center justify-between w-full">
                <div className="flex flex-wrap gap-4 w-full overflow-hidden justify-center">
                    <TechStackCard cards={techs} direction="left" speed={20} />
                    <TechStackCard cards={techs} direction="right" speed={20} />
                </div>

                <div>
                    <Typography>
                        Very familiar with modern languages and frameworks
                    </Typography>
                </div>
            </div>


        </section>
    );
}
export default TechStack;