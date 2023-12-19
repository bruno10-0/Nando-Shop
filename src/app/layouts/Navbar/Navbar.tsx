"use client"
import Dropdown from "@/components/dropdown/Dropdown";
import { themes } from "./dataNavbar";
import InputTheme from "./compsNavbar/InputTheme";
import { useState } from "react";
import SearchbarNavbar from "./compsNavbar/SearchbarNavbar";
import style from "./Navbar.module.css"

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
        <div className="flex flex-column">
            <div className={`bg-base-100 z-[10] fixed transition-all duration-500 w-full justify-end flex ${scrollUp ? 'translate-y-0 opacity-100':'-translate-y-full opacity-0'}`} >

                

                <div className={ `${ style.NavbarOptions } flex-none` }>

                    
                    <Dropdown title="Temas" listClassName="overflow-y-auto overflow-x-hidden max-h-[calc(100vh)] h-[28.6rem] inline-flex flex-col" containerClassName="p-0" btnClassName="min-h-min h-min py-2">
                        {themes.map((theme, index) => {
                            return <InputTheme key={index} ariaLabel={ theme } value={ theme }/>
                        })}
                    </Dropdown>
                    
                </div>
            </div>
            <div className="flex z-[0]">
                <SearchbarNavbar scrollUp={scrollUp}/>

            </div>
        </div>
    )
}

export default Navbar;