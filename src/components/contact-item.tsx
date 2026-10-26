import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

interface Contacts {
  name: string,
  color: string,
  icon: ReactNode,
  url : string
}

export function ContactItem({ name, color, icon, url }: Contacts) {
  return (
    <a href={url} target="_blank" className={`p-2 max-h-64 h-16 flex flex-col items-center rounded-2xl space-y-2 text-gray-500 ${color} transition-all duration-300 cursor-pointer`}>
      <div className="max-w-12 w-8  h-8 max-h-12 [&>svg]:w-full [&>svg]:h-full">
        {icon}
      </div>
      <div className="flex justify-between items-center">
        <Typography>{name}</Typography>
        <ArrowUpRightIcon className="w-2 h-2" />
      </div>
    </a>
  )
}

export default ContactItem;