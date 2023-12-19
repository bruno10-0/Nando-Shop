"use client"
// import { useScroll } from "framer-motion"
import { scroll } from "framer-motion"
import Image from "next/image";
import SidebarNavbar from "./compsNavbar/SidebarNavbar";
import Dropdown from "@/components/dropdown/Dropdown";
import { themes } from "./dataNavbar";
import InputTheme from "./compsNavbar/InputTheme";
import CartNavbar from "./compsNavbar/CartNavbar";

import style from "./Navbar.module.css"
import { useState } from "react";

const Navbar = () => {
    const [ scrollUp, setScrollUp ] = useState(true);
    let ubicacionPrincipal = window.scrollY;

    window.onscroll = () => {
        let desplazamiento = window.scrollY;
        if (ubicacionPrincipal >= desplazamiento) {
            setScrollUp(true)
        } 
        else{
            setScrollUp(false)
        }
        ubicacionPrincipal = desplazamiento;
    }
    

    return (
        <div className={`navbar bg-base-100 fixed transition-all duration-500 ${scrollUp ? 'translate-y-0 opacity-100':'-translate-y-full opacity-0'}`} >

            {/* Sidebar */}
            <div className="flex-none">
                <SidebarNavbar />
            </div>

            {/* Logo */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl hidden md:flex align-center">NandoShop</a>
            </div>

            <div className={ `${ style.NavbarOptions } flex-none` }>

                {/* Renderiza todos lo temas de daisyUI */}
                <Dropdown title="Temas" listClassName="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-10rem)] h-[28.6rem] gap-3 inline-flex flex-col">
                    {themes.map((theme, index) => {
                        return <InputTheme key={index} ariaLabel={ theme } value={ theme }/>
                    })}
                </Dropdown>
                

                <CartNavbar />

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="Tailwind CSS Navbar component" src="/assets/images/avatars/user1.jpg" width='100' height="100"/>
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Ver mi Perfil
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Configuracion</a></li>
                        <li><a>Cerrar sesion</a></li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Navbar;