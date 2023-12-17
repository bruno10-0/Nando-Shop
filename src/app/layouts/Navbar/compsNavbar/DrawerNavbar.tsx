import React from 'react';


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
                    <li><a>Ropa Hombre</a></li>
                    <li><a>Ropa Mujer</a></li>
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