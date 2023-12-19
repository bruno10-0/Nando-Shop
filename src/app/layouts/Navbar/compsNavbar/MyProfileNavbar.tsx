import Image from 'next/image';
import React from 'react'

const MyProfileNavbar = () => {
  return (
    <div className="dropdown dropdown-end z-40">
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
  )
}
export default MyProfileNavbar;