"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24 w-[100%]">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" className="md:text-7xl text-5xl rubik-marker-hatch-regular">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>
          <div className="flex gap-8 items-center">
          <Link
            href="SamwelCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-1 border rounded w-fit bg-black text-white"
          >
            view CV
            <EyeIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-white"
            />
            </Link>
            
            <Link
            href="SamwelCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Samwel_Sikanyika_CV.pdf"
            className="flex items-center gap-2 px-8 py-1 border rounded w-fit hover:bg-gray-200 transition-all duration-300"
          >
            Download CV
            <ArrowDownTrayIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
            </Link>
            </div>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
