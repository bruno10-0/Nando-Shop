import { StringHelpers } from "../helpers/StringHelpers";
import { StringFormatInterface } from "../interfaces/String.interface";

export namespace StringFormater{

    // Convierte la primera letra de un string en mayuscula
    export class CapitalizeFirstLetterFormatter implements StringFormatInterface {
        format(input: string): string {
            if (!input) {
                return input;
            }
      
            return StringHelpers.CapitalizeFirstLetter(input);
        }
    }
}

