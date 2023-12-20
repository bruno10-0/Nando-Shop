import { fireEvent, render, screen } from '@testing-library/react'
import Prueba from './Prueba'
// import { it } from 'node:test'
describe('Testear Prueba.tsx',() => {
    it('Comprobar si esta escrito prueba', () => {
        render(<Prueba />) //ARRANGE
    
        const myElem = screen.getByText('prueba') //ACT
    
        expect(myElem).toBeInTheDocument()//ASSERT
    })
    it('Comprobar si esta escrito informacion', () => {
        render(<Prueba />) //ARRANGE
    
        const myElem = screen.getByText(/informacion/i) //ACT
    
        expect(myElem).toBeInTheDocument()//ASSERT
    })
    it('Comprobar si el contador empieza en 0 y si se puede aumentar al hacer click', () => {
        render(<Prueba />) //ARRANGE

        const contadorElement = screen.getByText(/Contador:/i);
        const button = screen.getByText(/incrementar/i) //ACT
    
        // verifica si el contador empieza en 1
        expect(contadorElement).toHaveTextContent('Contador: 0');

        fireEvent.click(button)
        expect(contadorElement).toHaveTextContent('Contador: 1');

    })
    
})