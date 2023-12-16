import Image from "next/image";
import DrawerNavbar from "./compsNavbar/DrawerNavbar";
import Dropdown from "@/components/dropdown/Dropdown";
import { themes } from "./dataNavbar";
import InputTheme from "./compsNavbar/InputTheme";
import CartNavbar from "./compsNavbar/CartNavbar";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">

            {/* Sidebar */}
            <div className="flex-none">
                <DrawerNavbar />
            </div>

            {/* Logo */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="flex-none">

                <Dropdown title="Paginas" accessibilityLabel="Ver Paginas">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </Dropdown>

                {/* Renderiza todos lo temas de daisyUI */}
                <Dropdown title="Temas" listClassName="p-0">
                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 m-0">

                        {/* Da un valor defecto */}
                        <InputTheme ariaLabel="default" value="default" isDefault={ true }/>

                        {themes.map((theme, index) => {
                            return <InputTheme key={index} ariaLabel={ theme } value={ theme }/>
                        })}
                        
                    </ul>
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