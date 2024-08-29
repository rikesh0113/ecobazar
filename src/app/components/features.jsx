
import { bagIcon, headphoneIcon, packageIcon, truckIcon } from "@/assests/icons";
import Image from "next/image";
import React from "react";

const Feature = () => {
    return(
        <div className="mx-10 relative w-full flex grid-cols-12 border-b border-gray-100">
            <div className="flex col-span-3 mr-20">
                
                <div className="w-[72px] h-[72px] p-4 rounded-[5000px] bg-gray-50 overflow-hidden my-7 mr-4">
                    <Image src={truckIcon} alt="truck" className="w-full h-full object-cover"/></div>
                
                <div className="my-9">
                    <span className=" text-gray-900 leading-relaxed font-semibold text-lg">Free Shipping</span>
                    <span className=" block text-gray-400 font-normal text-sm">Free shipping with discount</span>
                </div>
                

            </div>

            <div className="flex col-span-3 mr-20">
                
                <div className="w-[72px] h-[72px] p-4 rounded-[5000px] bg-gray-50 overflow-hidden my-7 mr-4">
                    <Image src={headphoneIcon} alt="headphone" className="w-full h-full object-cover"/></div>
                
                <div className="my-9">
                    <span className=" text-gray-900 leading-relaxed font-semibold text-lg">Great Support 24/7</span>
                    <span className=" block text-gray-400 font-normal text-sm">Instant access to Contact</span>
                </div>
                

            </div>

            <div className="flex relative col-span-3 mr-20 border-b-2 border-sucess">
                
                <div className="w-[72px] h-[72px] p-4 rounded-[5000px] bg-sucess overflow-hidden my-7 mr-4">
                    <Image src={bagIcon} alt="bag" className="w-full h-full object-cover"/></div>
                
                <div className="my-9">
                    <span className=" text-gray-900 leading-relaxed font-semibold text-lg">100% Secure Payment</span>
                    <span className=" block text-gray-400 font-normal text-sm">We ensure your money is save</span>
                </div>
                

            </div>


            <div className="flex col-span-3 ">
                
                <div className="w-[72px] h-[72px] p-4 rounded-[5000px] bg-gray-50 overflow-hidden my-7 mr-4">
                    <Image src={packageIcon} alt="package" className="w-full h-full object-cover"/></div>
                
                <div className="my-9">
                    <span className=" text-gray-900 leading-relaxed font-semibold text-lg">Money-Back Guarantee</span>
                    <span className=" block text-gray-400 font-normal text-sm">30 days money-back</span>
                </div>
                

            </div>




            

            

            
            
            
        </div>
    );
};

export default Feature