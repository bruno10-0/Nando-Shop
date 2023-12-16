import React from 'react';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  listClassName?: string;
  containerClassName?: string;
  accessibilityLabel?: string;
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
    accessibilityLabel
}) => {

    // Si las props de clases no estan definidas, asignarle valores por defecto
    // const listClass = listClassName;
    const containerClass = `menu menu-horizontal ${containerClassName}`

    return(
        <ul className={ containerClass }>
            <li>
                <details>
                    {/* Titulo del Dropdown */}
                    <summary>
                        { accessibilityLabel ? 
                            <span aria-label={ accessibilityLabel }>{ title }</span> 
                            : title 
                        }
                    </summary>

                    {/* Lista del Dropdown ( Da un estilo por defecto de TailwindCSS ) */}
                    <ul className={ listClassName }>
                        { children }
                    </ul>
                </details>
            </li>
        </ul>
    );
}

export default Dropdown