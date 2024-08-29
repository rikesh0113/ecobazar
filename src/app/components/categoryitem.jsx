import { appleIcon } from "@/assests/icons";

import Image from "next/image";

import React from "react";

const Categoryitem = (props) => {
    return(
        <div className={`flex items-center px-5 py-4  ${props.className} ${props.active ? 'bg-sucess' : ''}`}>
            <Image src={props.icon} alt="apple"/>
            <span className={`text-body-small ml-3 ${props.active ? 'text-white' : 'text-gray-900'}`}>{props.title}</span>
        </div>
    )
}

export default Categoryitem