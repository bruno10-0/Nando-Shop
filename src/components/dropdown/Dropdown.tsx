import React from 'react';

// Start : Dropdown (Ln:23)
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
    accessibilityLabel = '',
    btnClassName = ''
    }) => {

    return(
        <div className={`dropdown dropdown-bottom dropdown-end ${containerClassName}`} data-testid="Dropdown-container">
            
                <ButtonDropdown title={ title } accessibilityLabel={ accessibilityLabel } btnClassName={ btnClassName } />
                <ul tabIndex={0} className={`dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52  ${listClassName}`} data-testid="Dropdown-list">
                    <div className='overflow-y-auto gap-3 flex flex-col'>

                    { children }
                    </div>
                </ul>
            
        </div>
    );
}
// End : Dropdown

// Start : ButtonDropdown (Ln:53)
interface DropdownButtonProps {
    title: string;
    btnClassName: string;
    accessibilityLabel: string;
}

const ButtonDropdown: React.FC<DropdownButtonProps> = ({ title, btnClassName, accessibilityLabel }) => {
    return (
        <div tabIndex={0} role="button" className={`btn m-1 ${btnClassName}`} aria-label={ accessibilityLabel } data-testid="Dropdown-button">
            { title }
        </div>
    )
}
// End : ButtonDropdown

export default Dropdown