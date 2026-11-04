import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface Certification {
    name: string,
    description: string
    img: string
}

export function CertificationItem({ name, description, img }: Certification) {
    return (
        <Card shadow={false} className="flex flex-col items-center max-h-96 h-64">
            <CardHeader floated={false} shadow={false}>
                <Image
                    src={img}
                    alt={name}
                    width={76}
                    height={90}
                    className="h-full w-full object-contain"
                />
            </CardHeader>
            <CardBody>
                <Typography>
                    {name}
                </Typography>
            </CardBody>
            <CardBody>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default CertificationItem;