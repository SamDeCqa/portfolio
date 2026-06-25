import TechStackCard from "@/components/techStack-card";
import { getImagePrefix } from "../../utils/utils";

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
        tech: "Go",
        svg: `${getImagePrefix()}logos/go.svg`
    },
];
export function TechStack() {
    return (
        <section>
            <p className="text-center text-7xl rubik-marker-hatch-regular">Tech Stack</p>

            <div className="flex gap-4 w-full overflow-hidden justify-center">
                {techs.map((props, index) => (
                    <TechStackCard key={index} {...props} />
                ))}
            </div>
        </section>
    );
}
export default TechStack;