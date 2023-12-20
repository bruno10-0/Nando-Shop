import { fireEvent, render, screen } from '@testing-library/react'
import Dropdown from '../Dropdown';


describe('Pruebas de Renderizado del Dropdown.tsx',() => {
    // test1
    it('Renderizar el Dropdown con dos links', () => {
        render(
            <Dropdown title='Prueba' accessibilityLabel='prueba-accessibility'>
                <li><a>Prueba 1</a></li>
                <li><a>Prueba 2</a></li>
            </Dropdown>
        )

        // Comprobar si los children funcionan
        const children = screen.getByText('Prueba 1');
        const children2 = screen.getByText('Prueba 2');       
        // Comprueba si el aria-label funciona
        const ariaLabel = screen.getByLabelText('prueba-accessibility')
        // Comprobar si funcionan las clases
        
        
        expect(children).toBeInTheDocument();
        expect(children2).toBeInTheDocument();
        expect(ariaLabel).toBeInTheDocument();
    })

    it('Comprobar si la accesibilidad funciona en el boton del dropdown', () => {
        render(
            <Dropdown title='Prueba' accessibilityLabel='prueba-accessibility'>
                <li><a>Prueba 1</a></li>
            </Dropdown>
        )

        const ariaLabel = screen.getByLabelText('prueba-accessibility')
        
        expect(ariaLabel).toBeInTheDocument();
    })

    it('Comprobar las clases del elemento padre del Dropdown', () => {
        render(
            <Dropdown title='Prueba' containerClassName='test-containerClass'>
                <li><a>Prueba 1</a></li>
            </Dropdown>
        )

        const containerClass = screen.getByTestId('Dropdown-container');
        
        expect(containerClass).toHaveClass('dropdown dropdown-bottom dropdown-end test-containerClass', {exact: true});
    })

    it('Comprobar las clases de la lista del Dropdown', () => {
        render(
            <Dropdown title='Prueba' listClassName='test-listClass'>
                <li><a>Prueba 1</a></li>
            </Dropdown>
        )

        const listClass = screen.getByTestId('Dropdown-list');
        
        expect(listClass).toHaveClass('dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52 test-listClass', {exact: true});
    })
    
    it('Comprobar las clases del boton del Dropdown', () => {
        render(
            <Dropdown title='Prueba' btnClassName='test-buttonClass'>
                <li><a>Prueba 1</a></li>
            </Dropdown>
        )

        const buttonClass = screen.getByTestId('Dropdown-button');
        
        expect(buttonClass).toHaveClass('btn m-1 test-buttonClass', {exact: true});
    })
    // Fin pruebas de renderizado
})