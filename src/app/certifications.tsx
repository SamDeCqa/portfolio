"use client"

// import CertificationItem from "@/components/certification-item";
// import { Typography } from "@material-tailwind/react";
// import { getImagePrefix } from "../../utils/utils";

// export function Certifications () {
//     const certs = [
//         {
//             name : "TeenTech Facilitator",
//             description : "Blaaaah",
//             img : `${getImagePrefix()}image/Kikoba.png`
//         },

//         {
//             name : "SecLeaf Cybersecurity Hackathon",
//             description : "Blaaaah tuuupu",
//             img : `${getImagePrefix()}image/Kikoba.png`
//         }
//     ];
//     return (
//         <section className="h-full w-full px-8">
//             <Typography className="text-5xl">Certifications</Typography>

//             <div className="flex gap-6">
//             {certs.map((props, index)=> (
//                 <CertificationItem key={index} {...props}/>
//             ))}
//             </div>
//         </section>
//     );
// }

// export default Certifications;

import React, { useState, useEffect } from "react";

const cardsData = [
  { id: 1, title: "Ace of Spades", color: "bg-slate-900 text-white" },
  { id: 2, title: "King of Hearts", color: "bg-red-600 text-white" },
  { id: 3, title: "Queen of Diamonds", color: "bg-blue-600 text-white" },
  { id: 4, title: "Jack of Clubs", color: "bg-emerald-600 text-white" },
];

export default function CSSOnlyCardStack() {
  const [cards, setCards] = useState(cardsData);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const topCard = newArr.shift();
        newArr.push(topCard);
        return newArr;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-64 h-96 flex items-center justify-center mx-auto my-12">
      {cards.map((card, index) => {
        const total = cards.length;
        const rotateZ = (index - (total - 1) / 2) * 8;
        const translateY = index * 8;
        const scale = 1 - index * 0.04;
        const zIndex = total - index;

        return (
          <div
            key={card.id}
            style={{
              transform: `translateY(${translateY}px) rotate(${rotateZ}deg) scale(${scale})`,
              zIndex: zIndex,
              transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className={`absolute inset-0 rounded-2xl p-6 shadow-2xl border border-white/20 flex flex-col justify-between origin-bottom select-none ${card.color}`}
          >
            <div className="text-xl font-bold">{card.title}</div>
            <div className="text-sm opacity-75">
              {index === 0 ? "Active Card" : `Queued (${index})`}
            </div>
          </div>
        );
      })}
    </div>
  );
}