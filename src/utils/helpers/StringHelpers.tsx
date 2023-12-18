/**
 * Helpers para Formatear cadenas de texto
 */
export namespace StringHelpers{

    /**
     * Obtener la ultima letra de un texto
     * @param text cadena de texto
     * @returns 
     */
    export const getLastLetter = ( text: string ): string => {
        const lastLetter = text.charAt(text.length - 1);
        return lastLetter;
    }

    /**
     * Obtener la primera letra de un texto
     * @param text Cadena de text
     * @returns 
     */
    export const getFirstLetter = ( text: string ): string => {
        const firstLetter = text[0];
        return firstLetter;
    }

    /**
     * Convertir primera letra en mayúscula
     * @param text Cadena de texto
     * @returns 
     */
    export const CapitalizeFirstLetter = ( text: string ): string => {
        let firstLetter = text[0];
        const restOfString = text.slice(1);

        firstLetter = firstLetter.toUpperCase();
        
        return firstLetter + restOfString;
    }
}