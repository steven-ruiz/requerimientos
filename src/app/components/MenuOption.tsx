'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export default function MenuOption({text, link = "/"}: {text: string, link?: string, isActive?: boolean}) {
    const pathname = usePathname();
    const isActive = link === pathname;

    return (
        <Link href={link}>
            <div className={
                classNames(
                    { "border-r-[1px] border-white": link !== "/profile" },
                    "px-2 py-1 ", 
                    isActive ? "text-blue-500 " : "text-white"
                )}>{text}</div>
        </Link>
    )
}