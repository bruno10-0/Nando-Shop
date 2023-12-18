/**
 * Helper que maneja el cache del localStorage.
 * 
 */
export namespace localStorageHelpers{

    export const getStorage = ( key: string ): void => {
        localStorage.getItem(key);
    }

    export const setStorage = ( key: string, value:string ): void => {
        localStorage.setItem(key, value);
    }

    export const removeStorage = ( key: string ): void => {
        localStorage.removeItem(key);
    }

    export const clearStorage = ( ): void => {
        localStorage.clear();
    }
}