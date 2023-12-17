import { StringFormatInterface } from "../interfaces/String.interface";

/**
 * Clase que Muestra/Retorna los formateadores  
 */
class DisplayTextFormater {
    private formatterText: StringFormatInterface;

    constructor(formatterText: StringFormatInterface){
        this.formatterText = formatterText;
    }

    formatAndDisplay(text: string): string {
        const formattedText = this.formatterText.format(text);
        return formattedText;
    }

}

export default DisplayTextFormater;