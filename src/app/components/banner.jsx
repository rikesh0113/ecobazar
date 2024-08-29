import React from "react";

import Categoryitem from "./categoryitem";
import { appleIcon, coffeeIcon, cupcakeIcon, fishIcon, foodIcon, icecreamIcon, meatIcon, pieIcon, plusIcon, saladIcon } from "@/assests/icons";

import Slider from "./slider";




const categoryItem = [
    {
        id: 1,
        icon: appleIcon,
        activeIcon: appleIcon,
        title: "Fresh fruits",
    },
    {
        id: 2,
        icon: saladIcon,
        activeIcon: saladIcon,
        title: "Vegetables",
    },
    {
        id: 3,
        icon: fishIcon,
        activeIcon: fishIcon,
        title: "River Fish",
    },
    {
        id: 4,
        icon: meatIcon,
        activeIcon: meatIcon,
        title: "Chicken & meat",
    },
    {
        id: 5,
        icon: coffeeIcon,
        activeIcon: coffeeIcon,
        title: "Drink & water",
    },
    {
        id:6,
        icon: icecreamIcon,
        activeIcon: icecreamIcon,
        title: "Yogurt & ice cream",
    },
    {
        id: 7,
        icon: cupcakeIcon,
        activeIcon: cupcakeIcon,
        title: "Cake & Bread",
    },
    {
        id: 8,
        icon: pieIcon,
        activeIcon: pieIcon,
        title: "Butter & Cream",
    },
    {
        id: 9,
        icon: foodIcon,
        activeIcon: foodIcon,
        title: "Cooking",
    },
    {
        id:10,
        icon: plusIcon,
        activeIcon: plusIcon,
        title: "View category",
    },
];

const Banner = () => {
    return(
        <section className="mx-10 grid grid-cols-12 mt-6 gap-6">
            <div className="col-span-3 border border-gray-400">
                {categoryItem.map((category) =>(
                     <Categoryitem
                     title={category.title}
                     key={category.id}
                     icon={category.icon}
                     active={category.id === 2}
                     activeIcon={category.activeIcon}
                     category={category.category}
                     className={category.title === "View category" ? "border border-gray-400" : ""}
                   />
                ))}
               
            </div>


            <div className="col-span-9">
                <Slider/>
            </div>
        </section>
    )
}

export default Banner