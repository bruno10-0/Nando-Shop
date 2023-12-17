'use client'
import { StringFormater } from "@/utils/formatters/CapitalizeFirstLetterFormatter";
import DisplayFormater from "@/utils/formatters/DisplayFormatter";
import React from "react";
import PalleteColorsNavbar from "./PalleteColorsNavbar";

interface ThemeProps {
  ariaLabel: string;
  value: string;
  isDefault?: boolean;
}

const InputTheme: React.FC<ThemeProps> = ({ ariaLabel, value, isDefault = false }) => {
  const textFormatter = new StringFormater.CapitalizeFirstLetterFormatter();
  const textDisplay = new DisplayFormater(textFormatter);
  const valueFormatted = textDisplay.formatAndDisplay(value);
  // Guardar el valor en el local storage
  const handleChange = () => {
    localStorage.setItem('nandoshop_theme', value);
  };

  return (
    <li>
        <>
          <label htmlFor={`theme-${value}`} data-theme={value} className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3 bg-base-100 " >
                
            <PalleteColorsNavbar />

            <span className="flex-grow text-sm w-100 " >{ valueFormatted }</span> 

          </label>

            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start hidden"
              aria-label={ariaLabel}
              value={value}
              onChange={handleChange} 
              id={`theme-${value}`}
            />
        </>
    </li>
  );
};

export default InputTheme;
