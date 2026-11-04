"use client";

import React, { useState, useEffect } from "react";
import { getImagePrefix } from "../../utils/utils";
import CertificationItem, { Certification } from "@/components/certification-item";
import { Typography } from "@material-tailwind/react";

const cardsData: Certification[] = [
  {
    id: 1,
    name: "SecLeaf",
    description: "Participated in a World wide CyberSecurity competetions",
    color: "bg-cyan-600 text-white",
    img: `${getImagePrefix()}image/certs/SecLeafCertificate.png`
  },
  {
    id: 2,
    name: "TeenTech",
    description: "Taught secondary school students about trending Tech issues like AI and Cyber-security",
    color: "bg-pink-600 text-white",
    img: `${getImagePrefix()}image/certs/TeenTech.png`
  },
];

export function Certifications() {
  const [cards, setCards] = useState<Certification[]>(cardsData);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const topCard = newArr.shift();
        if (topCard) newArr.push(topCard);
        return newArr;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-20 w-[100%]">
      <Typography className="mb-12 md:text-7xl text-5xl rubik-marker-hatch-regular text-center">Certifications</Typography>
      <div className="relative w-18 md:w-64 h-96 flex items-center justify-center mx-auto my-12">
        {cards.map((card, index) => {
          const total = cards.length;
          const rotateZ = (index - (total - 1) / 2) * 8;
          const translateY = index * 8;
          const scale = 1 - index * 0.04;
          const zIndex = total - index;

          return (
            <CertificationItem
              key={card.id}
              card={card}
              index={index}
              rotateZ={rotateZ}
              translateY={translateY}
              scale={scale}
              zIndex={zIndex}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;