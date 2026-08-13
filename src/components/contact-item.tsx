import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface Contacts {
  name: string,
  color: string,
  icon: ReactNode
}

export function ContactItem({ name, color, icon }: Contacts) {
  return (
    <div className={`grid p-2 max-h-64 h-36 border border-gray-100 rounded-2xl space-y-2 text-gray-500 ${color} transition-all duration-300 cursor-pointer`}>
      <div className="max-w-24 max-h-24 [&>svg]:w-full [&>svg]:h-full">
        {icon}
      </div>
      <div className="flex justify-between items-center">
        <p>{name}</p>
        <ArrowUpRightIcon className="w-4 h-4" />
      </div>
    </div>
  )
}

export default ContactItem;