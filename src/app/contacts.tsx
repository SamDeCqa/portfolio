"use client";

import {
  Typography,
} from "@material-tailwind/react";
import { ArrowUpRightIcon, EnvelopeIcon, EnvelopeOpenIcon, FaceSmileIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { SiX, SiInstagram, SiWhatsapp, SiTelegram } from "react-icons/si";
import ContactItem from "@/components/contact-item";

const contacts = [
  {
    name: "WhatsApp",
    color: "hover:text-green-500 hover:border-green-500",
    icon: <SiWhatsapp className="w-14 h-14" />
  },
  {
    name: "Instagram",
    color: "hover:text-pink-500 hover:border-pink-500",
    icon: <SiInstagram />
  },
  {
    name: "Twitter(X)",
    color: "hover:text-black hover:border-black",
    icon: <SiX />
  },
  {
    name: "Telegram",
    color: "hover:text-blue-400 hover:border-blue-400",
    icon: <SiTelegram />
  },
  {
    name: "Email",
    color: "hover:text-gray-800 hover:border-gray-800",
    icon: <EnvelopeOpenIcon />
  },
];

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
      <div className="flex flex-col md:flex-row gap-8 justify-center md:items-center space-y-4">
        {contacts.map((props, index) => (
          <ContactItem key={index} {...props} />
        ))}

      </div>
    </section>
  );
}

export default Contacts;
