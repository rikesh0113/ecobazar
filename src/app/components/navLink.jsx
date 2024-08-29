import { dropdownIcon } from "@/assests/icons";
import Image from "next/image";
import React from "react";

const NavLink = (props) => {
    return(
        <div className="text-gray-500 flex items-center ml-8 my-3">
            <span className={props.active ? "text-white" : "text-gray-500"}>{props.title}</span>
            {!props.hideIcon && (
                <Image src={dropdownIcon} alt="down-icon" className="h-5 w-5 ml-1"/>
            )}
            
        </div>
    );
};

export default NavLink;