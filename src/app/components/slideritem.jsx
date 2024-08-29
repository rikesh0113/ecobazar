import { arrowIcon, downarrowIcon, lineIcon } from "@/assests/icons";
import React from "react";

import Image from "next/image";

const SliderItem = (props) => {
    return (
        <div className="h-[35rem] flex flex-col  justify-center bg-sucess-dark p-12 bg-banner-image bg-right bg-no-repeat	bg-cover">
          <h2 className="text-h2 font-bold text-white max-w-[23rem]">
            {props.title}
          </h2>
    
          <div className="mt-5 flex"><Image src={lineIcon} alt="line"/>{props.subTitle}</div>
    
          <div className="mt-8">
            
            <button className="bg-sucess text-white px-10 py-4 rounded-full flex items-center ">
              <span className="mr-2.5">Shop Now</span>
              
              <Image src={arrowIcon} alt="arrow"/>

             
    
              
            </button> 
          </div>
        </div>
      );

};

export default SliderItem