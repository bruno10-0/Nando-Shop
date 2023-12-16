import React from "react";

interface themeProps {
    ariaLabel: string,
    value: string,
    isDefault?: boolean,
}

const InputTheme: React.FC<themeProps> = ({ ariaLabel, value, isDefault = false}) => {
    return (
        <li>
            { isDefault ?
                <input 
                    type="radio" 
                    name="theme-dropdown" 
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
                    aria-label={ ariaLabel } 
                    value={ value }
                    defaultChecked
                />
            :
                <input 
                    type="radio" 
                    name="theme-dropdown" 
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
                    aria-label={ ariaLabel }
                    value={ value }
                />
             }
        </li>
    )
}

export default InputTheme;