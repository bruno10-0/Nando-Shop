import React from "react"
import { FaSearch } from "react-icons/fa";
import MyProfileNavbar from "./MyProfileNavbar";
import CartNavbar from "./CartNavbar";
import SidebarNavbar from "./SidebarNavbar";

interface SearchProps {
    scrollUp: boolean
}

const SearchbarNavbar: React.FC<SearchProps> = ({ scrollUp }) => {
    return(
        <div className={`flex justify-center w-full bg-base-100 transition-all top-11 fixed left-0 rigth-0 duration-500 ${scrollUp ? 'translate-y-0 opacity-100':'-translate-y-full opacity-0'}`}>
            <div className="container flex">
                {/* Sidebar */}
                <div className="flex-none z-50">
                    <SidebarNavbar />
                </div>

                {/* Logo */}
                <div className="flex-1 z-40">
                    <a className="btn btn-ghost text-xl hidden md:flex align-center">NandoShop</a>
                </div>
                <div className="join w-full z-40">
                    <div className="w-full">
                        <div>
                            <input className="input input-bordered input-primary border-2 join-item w-full placeholder:text-primary" placeholder="Ej: Zapatillas Nikes"/>
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item bg-primary border-0 outline-gray-100 hover:bg-secondary"><FaSearch className="text-neutral"/></button>
                    </div>
                </div>
                <div className="flex gap-3 mx-5">

                    <CartNavbar />

                    <MyProfileNavbar />
                </div>

            </div>
        </div>
    )
}

export default SearchbarNavbar;