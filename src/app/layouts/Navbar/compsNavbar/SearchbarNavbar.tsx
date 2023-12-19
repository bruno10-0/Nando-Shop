import React from "react"
import MyProfileNavbar from "./MyProfileNavbar";
import CartNavbar from "./CartNavbar";
import SidebarNavbar from "./SidebarNavbar";

// Start : SearchbarNavbar(Ln:11)
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

                <LogoSearchbar />

                <SearchInput />

                <div className="flex gap-3 mx-5">

                    <CartNavbar />

                    <MyProfileNavbar />
                </div>

            </div>
        </div>
    )
}
// End : SearchbarNavbar

// Start : SearchInput(Ln:49)
import { FaSearch } from "react-icons/fa";

const SearchInput: React.FC = () => {
    return (
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
    )
}
// End : SearchInput

// Start : LogoSearchbar(Ln:58)
const LogoSearchbar = () => {
    return (
        <div className="flex-1 z-40">
            <a className="btn btn-ghost text-xl hidden md:flex align-center underline decoration-primary">NandoShop</a>
        </div>
    )
} 
// End : LogoSearchbar

export default SearchbarNavbar;