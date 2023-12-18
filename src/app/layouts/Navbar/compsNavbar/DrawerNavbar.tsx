import React from 'react';
import style from './DrawerNavbar.module.css'

const DrawerNavbar = () => {
    
    return(
        <div className="drawer">
            {/* Boton del menu que abre el drawer-side (Ln:12) */}
            <DrawerButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </DrawerButton>

            {/* Lista del drawer (Ln:37) */}
            <DrawerSide>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <label htmlFor="my-drawer" className={`${ style.btnDrawerClose } btn btn-square btn-ghost drawer-button`}>X</label>
                    <li><a>Tienda</a></li>
                    <li><a>Sobre Nosotros</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </DrawerSide>
        </div>
    )
}

interface DrawerProps {
    children: React.ReactNode
}

// Boton del Drawer 
const DrawerButton: React.FC<DrawerProps> = ({children}) => {
    return(
        <>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                    {children}
                </label>
            </div>
        </>
    )
}

// Contenido del Drawer
const DrawerSide: React.FC<DrawerProps> = ({children}) => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            { children }
        </div>
    );
}

export default DrawerNavbar;