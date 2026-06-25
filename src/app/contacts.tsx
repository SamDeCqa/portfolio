"use client";

import {
  Typography,
} from "@material-tailwind/react";
import { ArrowUpRightIcon, EnvelopeIcon, EnvelopeOpenIcon, FaceSmileIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { SiX, SiInstagram, SiWhatsapp, SiTelegram } from "react-icons/si";

export function Contacts() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4 text-7xl rubik-marker-hatch-regular">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center space-y-4">
        <div className="grid p-2 border border-gray-100 rounded-2xl space-y-2 text-gray-500 hover:text-green-500 hover:border-green-500 transition-all duration-300 cursor-pointer">
          <SiWhatsapp className="w-24 h-24" />
          <div className="flex justify-between items-center">
            <p>Whatsapp</p>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </div>

        <div className="grid p-2 border border-gray-100 rounded-2xl space-y-2 text-gray-500 hover:text-pink-500 hover:border-pink-500 transition-all duration-300 cursor-pointer">
          <SiInstagram className="w-24 h-24" />
          <div className="flex justify-between items-center">
            <p>Instagram</p>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </div>

        <div className="grid p-2 border border-gray-100 rounded-2xl space-y-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 cursor-pointer">
          <SiX className="w-24 h-24" />
          <div className="flex justify-between items-center">
            <p>Twitter(X)</p>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </div>

        <div className="grid p-2 border border-gray-100 rounded-2xl space-y-2 text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-all duration-300 cursor-pointer">
          <SiTelegram className="w-24 h-24" />
          <div className="flex justify-between items-center">
            <p>Telegram</p>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </div>

        <div className="grid p-2 border border-gray-500 rounded-2xl space-y-2 text-gray-500 hover:text-gray-800 hover:border-gray-800 transition-all duration-300 cursor-pointer">
          <EnvelopeOpenIcon className="w-24 h-24" />
          <div className="flex justify-between items-center">
            <p>Email</p>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
