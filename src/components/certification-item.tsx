"use client";

import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";

export interface Certification {
  id: number;
  name: string;
  description: string;
  color: string;
  img: string;
}

interface CertificationItemProps {
  card: Certification;
  index: number;
  rotateZ: number;
  translateY: number;
  scale: number;
  zIndex: number;
}

export function CertificationItem({
  card,
  index,
  rotateZ,
  translateY,
  scale,
  zIndex,
}: CertificationItemProps) {
  return (
    <Card
      style={{
        transform: `translateY(${translateY}px) rotate(${rotateZ}deg) scale(${scale})`,
        zIndex,
        transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className={`h-52 md:h-64 w-80 md:w-96 mx-auto absolute inset-0 rounded-2xl shadow-2xl border border-white/20 origin-bottom select-none overflow-hidden ${card.color}`}
    >
      {/* Full-card image container */}
      <div className="relative h-full w-full">
        <Image
          src={card.img}
          alt={card.name}
          fill
          loading="eager"
          className="object-cover"
        />

        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content overlaid at the bottom */}
        <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end text-white backdrop-blur-sm">
          <CardHeader className="p-0 mb-1 bg-transparent shadow-none border-none">
            <Typography variant="h5" className="text-white font-bold">
              {card.name}
            </Typography>
          </CardHeader>

          <CardBody className="p-0 mb-3 bg-transparent shadow-none">
            <Typography className="text-white/80 text-sm">
              {card.description}
            </Typography>
          </CardBody>

          <div className="text-xs opacity-75">
            {index === 0 ? "" : `Queued (${index})`}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CertificationItem;