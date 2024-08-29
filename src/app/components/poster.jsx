import { arrowIcon, greenarrowIcon, timerIcon } from "@/assests/icons";
import Image from "next/image";
import React from "react";



const Poster = () => {
    return(
        <section className="mx-10 mt-[3.75rem] flex justify-between items-center">
            <div className="bg-poster-image h-[536px] w-[424px] bg-no-repeat bg-left flex flex-col items-center justify-start mr-6">
                <h4 className="text-sm font-medium leading-[0.875rem] text-white tracking-wide mt-[2.1875rem]">BEST DEALS</h4>
                <h1 className="font-semibold text-[40px] text-white leading-[48px] mt-4">Sale of the Month</h1>
                <div className="mt-2">
                    <Image src={timerIcon} alt="timer"/>
                </div>

                <button className=" rounded-full flex items-center bg-white px-8 py-3.5 mt-6">
                    <p className="text-sucess font-semibold text-[14px] leading-[16.8px] mr-3">Shop Now</p>
                    <Image src={greenarrowIcon} alt="arrow"/>
                </button>
            </div>
            
            
            <div className="bg-meat-poster h-[536px] w-[424px] bg-no-repeat bg-left flex flex-col items-center justify-start mr-6">
                <h4 className="text-sm font-medium leading-[0.875rem] text-white tracking-wide mt-[2.1875rem]">85% FAT FREE</h4>
                <h1 className="font-semibold text-[40px] text-white leading-[48px] mt-4">Low-Fat Meat</h1>
                <h4 className="mt-2 text-white text-body-large font-normal text-[18px] leading-[27px] ">Started at &nbsp;
                <span className="text-[#FF8A00] font-semibold text-[20px] leading-[3-px]">$79.99</span>
                </h4>
                

                <button className=" rounded-full flex items-center bg-white px-8 py-3.5 mt-6">
                    <p className="text-sucess font-semibold text-[14px] leading-[16.8px] mr-3">Shop Now</p>
                    <Image src={greenarrowIcon} alt="arrow"/>
                </button>
            </div>
            
            
            <div className="bg-fruit-poster h-[536px] w-[424px] bg-no-repeat bg-left flex flex-col items-center justify-start">
                <h4 className="text-sm font-medium leading-[0.875rem] text-gray-900 tracking-wide mt-[2.1875rem]">SUMMER SALE</h4>
                <h1 className="font-semibold text-[40px] text-gray-900 leading-[48px] mt-4">100% Fresh Fruit</h1>
                <h4 className="mt-2">Up to &nbsp;
                     <span className="rounded-md bg-black text-body-large text-[#FCC900] text-[18px] leading-[27px] font-semibold px-3 py-1.5">64% OFF</span></h4>

                <button className=" rounded-full flex items-center bg-white px-8 py-3.5 mt-6">
                    <p className="text-sucess font-semibold text-[14px] leading-[16.8px] mr-3">Shop Now</p>
                    <Image src={greenarrowIcon} alt="arrow"/>
                </button>
            </div>
        </section>
    );
};

export default Poster;
