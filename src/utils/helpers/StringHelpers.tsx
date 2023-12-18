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

}