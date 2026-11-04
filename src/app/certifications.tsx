"use client"

import CertificationItem from "@/components/certification-item";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

export function Certifications () {
    const certs = [
        {
            name : "TeenTech Facilitator",
            description : "Blaaaah",
            img : `${getImagePrefix()}image/Kikoba.png`
        },

        {
            name : "SecLeaf Cybersecurity Hackathon",
            description : "Blaaaah tuuupu",
            img : `${getImagePrefix()}image/Kikoba.png`
        }
    ];
    return (
        <section className="h-full w-full px-8">
            <Typography className="text-5xl">Certifications</Typography>

            <div className="flex gap-6">
            {certs.map((props, index)=> (
                <CertificationItem key={index} {...props}/>
            ))}
            </div>
        </section>
    );
}

export default Certifications;