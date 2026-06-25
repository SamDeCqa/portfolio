"use client"
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface technology{
    tech: string,
    svg: string
}

function TechStackCard({ tech, svg}: technology) {
 return (
    <Card shadow={false}>
        <CardHeader floated={false} shadow={false}>
            <Image
            src={svg}
            alt={tech}
            width={76}
            height={90}
            />
        </CardHeader>
        <CardBody>
            <Typography>
                {tech}
            </Typography>
        </CardBody>
    </Card>
 );
}
    export default TechStackCard;