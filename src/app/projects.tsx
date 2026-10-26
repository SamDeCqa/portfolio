"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import Transit from "@/components/transit";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/UdsmAlumniPortal.png`,
    title: "University of Dar es Salaam Alumni Portal",
    desc: "A platform connecting UDSM alumni together, fostering networking, collaboration, and engagement within the alumni community.",
    url: "https://udsm.maonoyetu.com/"
  },
  {
    img: `${getImagePrefix()}image/Kikoba.png`,
    title: "Digital Kikoba",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    url: "https://maonoyetu.com/"
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    url: "#"
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    url: "#"
  }
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-7xl rubik-marker-hatch-regular">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <Transit key={idx} delay={idx * 200}>
            <ProjectCard {...props} />
          </Transit>
        ))}
      </div>
    </section>
  );
}

export default Projects;
