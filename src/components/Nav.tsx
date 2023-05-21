"use client";

import Image from "next/image";
import "../../app/globals.css";
import MenuIcon from "./icons/MenuIcon";
import { useState } from "react";

const primaryItems = [
    {
        id: 1,
        title: "Features",
        href: "#"
    },
    {
        id: 2,
        title: "Pricing",
        href: "#"
    },
    {
        id: 3,
        title: "Resources",
        href: "#"
    }
]

const secondaryItems = [
    {
        id: 1,
        title: "Login",
        href: "#"
    },
    {
        id: 2,
        title: "Sign Up",
        href: "#",
        bg: true,
    },
]

const Nav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    return (
        <div className="main-container-mob md:main-container static flex py-10 justify-between md:justify-normal">
            <div className="">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={113}
                    height={113}
                />
            </div>
            <nav className={`flex flex-col flex-1 justify-between items-center px-6 py-10 md:p-0 md:flex-row md:static md:flex md:pl-8 md:bg-transparent ${isOpenMenu ? "z-50 absolute top-[100px] right-0 left-0 w-5/6 mx-auto bg-customVioletLight rounded-lg " : "hidden"}`}>
                <div className={`flex items-center w-5/6 justify-center md:w-auto md:justify-normal`}>
                    <ul className={`flex gap-4 md:gap-6 text-customGrayDark text-lg md:text-sm font-bold w-full text-center ${isOpenMenu ? "flex-col md:flex-row text-white md:text-customGrayDark" : ""}`}>
                        {primaryItems.map((i) => (
                            <li key={i.id} className="hover:text-black duration-300">
                                <a href={i.href}>{i.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {isOpenMenu && (
                    <div className="h-[1px] bg-gray-600 w-full my-6 md:hidden"></div>
                )}
                <div className="flex items-center w-5/6 justify-center md:w-auto md:justify-normal">
                    <ul className={`flex gap-6 text-customGrayDark text-lg md:text-sm font-bold w-full text-center ${isOpenMenu ? "flex-col md:flex-row text-white md:text-customGrayDark" : ""}`}>
                        {secondaryItems.map((i) => (
                            <li key={i.id} className={`${i.bg ? "bg-customCyan text-white hover:opacity-60" : "hover:text-black"} px-4 py-2 rounded-full duration-300 cursor-pointer`}>
                                <a href={i.href}>{i.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <button onClick={handleOpenMenu} className="md:hidden">
                <MenuIcon />
            </button>
        </div>
    )
}

export default Nav