import { fireEvent, render, screen } from '@testing-library/react'
import InputTheme from '../InputTheme'


describe('Pruebas de Renderizado del InputTheme.tsx',() => {
    it('Comprobando si el tema se pasa correctamente', () => {
        render(
            <InputTheme ariaLabel='test-ariaLabel' value='test-value'/>
        )

        const label = screen.getByTestId('InputTheme-label');

        expect(label).toHaveAttribute('data-theme', 'test-value');
    })

    it('Comprobando si la referencia al label se hace correctamente', () => {
        render(
            <InputTheme ariaLabel='test-ariaLabel' value='test-value'/>
        )

        const htmlFor = screen.getByTestId('InputTheme-label');

        expect(htmlFor).toHaveAttribute('for', 'theme-test-value');
    })

    it('Comprobando si la referencia del label se pasa correctamente', () => {
        render(
            <InputTheme ariaLabel='test-ariaLabel' value='test-value'/>
        )

        const label = screen.getByTestId('InputTheme-label');

        expect(label).toHaveAttribute('data-theme', 'test-value');
    })

    it('Comprobando si el nombre del tema se pasa y se formatea correctamente', () => {
        render(
            <InputTheme ariaLabel='test-ariaLabel' value='test-value'/>
        )

        const spanTheme = screen.getByText('Test-value');

        expect(spanTheme).toBeInTheDocument();
    })

})
describe('Pruebas Unitarias del InputTheme.tsx', () => {
    it('Comprobando si funciona el cambio de tema por localstorage', () => {
        render(
            <InputTheme ariaLabel='test-ariaLabel' value='test-value'/>
        )

        const input = screen.getByTestId('InputTheme-input');

        fireEvent.click(input);

        expect(localStorage.getItem('nandoshop_theme')).toBe('test-value');
    })
})