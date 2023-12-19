import React from 'react';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  listClassName?: string;
  containerClassName?: string;
  accessibilityLabel?: string;
  btnClassName?: string;
}

/**
 * Componente Dropdown
 * 
 * @param {string} title - El título del dropdown.
 * @param {React.ReactNode} children - Contenido del dropdown.
 * @param {string} listClassName - Clase para la lista del dropdown.
 * @param {string} containerClassName - Clase para el contenedor del dropdown.
 * @param {string} accessibilityLabel - Etiqueta de accesibilidad para el título.
 */

const Dropdown: React.FC<DropdownProps> = ({ 
    title, 
    children, 
    listClassName = 'p-2 bg-base-100 rounded-t-none', 
    containerClassName = 'px-1', 
    accessibilityLabel,
    btnClassName = ''
}) => {

    // Si las props de clases no estan definidas, asignarle valores por defecto
    // const listClass = listClassName;
    const containerClass = `dropdown dropdown-end ${containerClassName}`

    return(
        <div className={`dropdown dropdown-bottom dropdown-end ${containerClassName}`}>
            

                <div tabIndex={0} role="button" className={`btn m-1 ${btnClassName}`}>{ title }</div>
                <ul tabIndex={0} className={`dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52  ${listClassName}`}>
                    <div className='overflow-y-auto gap-3 flex flex-col'>

                    { children }
                    </div>
                </ul>
            
        </div>

        // <ul className={ containerClass }>
        //     <li>
        //         <details>
                    
        //             <summary>
        //                 { accessibilityLabel ? 
        //                     <span aria-label={ accessibilityLabel }>{ title }</span> 
        //                     : title 
        //                 }
        //             </summary>

                    
        //             <ul className={ listClassName }>
        //                 { children }
        //             </ul>
        //         </details>
        //     </li>
        // </ul>
    );
}

export default Dropdown