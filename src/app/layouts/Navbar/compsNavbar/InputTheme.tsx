'use client'
import React from "react";
import { StringFormater } from "@/utils/formatters/CapitalizeFirstLetterFormatter";
import DisplayFormater from "@/utils/formatters/DisplayFormatter";
import { localStorageHelpers } from "@/utils/helpers/LocalStorageHelpers";

interface ThemeProps {
  ariaLabel: string;
  value: string;
  isDefault?: boolean;
}

// Start : InputTheme (Muestra una paleta de color para cambiar a ese tema)
const InputTheme: React.FC<ThemeProps> = ({ ariaLabel, value }) => {

  // Llamo del namespace la clase que convierte la primera letra de un string en Mayuscula (Ln:16)
  const textFormatter = new StringFormater.CapitalizeFirstLetterFormatter();
  // Inyecto la dependencia(textFormatter) a la clase que muestra un texto formateado(Ln:18)
  const textDisplay = new DisplayFormater(textFormatter);

  // Creo una variable con el value con su primera letra en Mayuscula (Ln:21)
  const valueFormatted = textDisplay.formatAndDisplay(value);

  return (
    <li>
        <>
          <label htmlFor={`theme-${value}`} data-theme={value} className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3 bg-base-100 " >
            <PalleteColors />

            <span className="flex-grow text-sm w-100 " >{ valueFormatted }</span> 
          </label>

          <InputItem ariaLabel={ ariaLabel } value={ value }/>
        </>
    </li>
  );
};
// End : InputTheme 

// Start : InputItem
interface InputProps{
  ariaLabel: string,
  value: string,
}
const InputItem: React.FC<InputProps> = ({ ariaLabel, value }) => {
  return (
    <input
      type="radio"
      name="theme-dropdown"
      className="theme-controller btn btn-sm btn-block btn-ghost justify-start hidden"
      aria-label={ariaLabel}
      value={value}
      onChange={() => handleChange(value)} 
      id={`theme-${value}`}
    />
  );
}
// End : InputItem 

// Guarda el valor del tema en el local storage
const handleChange = (value: string) => {
  localStorageHelpers.setStorage('nandoshop_theme', value)
};

// Start : PalleteColor (Muestra los colores primarios, secundarios, acentos y neutral)
const PalleteColors = () => {
    return (
      <div className="flex h-full shrink-0 flex-wrap gap-1 " style={{width: 'max-content', height: '20px', backgroundColor: 'transparent'}}>
          <span className="bg-primary rounded-badge w-2"></span> 
          <span className="bg-secondary rounded-badge w-2"></span> 
          <span className="bg-accent rounded-badge w-2"></span> 
          <span className="bg-neutral rounded-s w-2"></span>
      </div>
    )
}
// End : PalleteColor

export default InputTheme;
