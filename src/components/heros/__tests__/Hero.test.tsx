import { fireEvent, render, screen } from '@testing-library/react'
import Hero from '../Hero'


describe('Pruebas de Renderizado del Hero.tsx',() => {
    it('Comprobar si el hero se esta renderizado correctamente',() => {
        render(<Hero />);

        const children = screen.getByText('Slide 1');

        expect(children).toBeInTheDocument();
    })
})