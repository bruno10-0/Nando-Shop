import { StringFormatInterface } from "../interfaces/String.interface";

export namespace StringFormater{

    // Convierte la primera letra de un string en mayuscula
    export class CapitalizeFirstLetterFormatter implements StringFormatInterface {
        format(input: string): string {
            if (!input) {
                return input;
            }
      
            const firstLetter = input.charAt(0).toUpperCase();
            const restOfString = input.slice(1);
      
            return firstLetter + restOfString;
        }
    }
}

