'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./../css/home.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuOption from "./MenuOption";

export default function Menu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (localStorage && localStorage.getItem("email") !== null) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        
    <nav className= 'flex justify-between items-center py-5 px-10 border-b border-white fixed top-0 w-full bg-[#0d0c43]'>
        <div className='flex items-center'>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>
        {isLoggedIn && (
            <>
                <div className="flex flex-wrap gap-2 ml-4 flex-grow">
                    <MenuOption text="Servicios" link="/"/>
                    <MenuOption text="Acerca de Nosotros" link="/about-us"/>
                    <MenuOption text="Testimonios" link="/testimonials"/>
                    <MenuOption text="Contactanos" link="/contact"/>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {isLoggedIn && (
                        <>
                            <MenuOption text="logout" link="/logout"/>
                            <MenuOption text="Mi perfil" link="/profile"/>
                        </>
                    )}
                </div>
            </>
        )}
      </nav>
    )
}