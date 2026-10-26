"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-4xl"
          >
            Hello there! <br />I&apos;m  <span className="allison-regular text-7xl font-extabold">Samwel</span>
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            My name is Samwel Sikanyika, a passionate web developer located in Tanzania. In this portfolio you&apos;ll
            get to know me and my skill in the field of software development.
          </Typography>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/mimi2.jpg`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
