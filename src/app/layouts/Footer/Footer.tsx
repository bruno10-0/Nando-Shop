import React from "react"
import BrandingFooter from "./BrandingFooter";
import SocialFooter from "./SocialFooter";


const Footer: React.FC = () => {
    return (
        <>
        <footer className="footer p-10 bg-base-200 text-base-content">
            <nav>
                <header className="footer-title text-primary">Servicios</header> 
                <LinkFooter>Marca</LinkFooter>
                <LinkFooter>Diseño</LinkFooter>
                <LinkFooter>Marketing</LinkFooter>
                <LinkFooter>Publicidad</LinkFooter>
            </nav> 
            <nav>
                <header className="footer-title text-primary">Compañia</header> 
                <LinkFooter>Sobre Nosotros</LinkFooter>
                <LinkFooter>Contacto</LinkFooter>
                <LinkFooter>Trabajos</LinkFooter>
                <LinkFooter>Novedades</LinkFooter>
            </nav> 
            <nav>
                <header className="footer-title text-primary">Legal</header> 
                <LinkFooter>Termino de uso</LinkFooter>
                <LinkFooter>Politica de Privacidad</LinkFooter>
                <LinkFooter>Politica de Cookies</LinkFooter>
            </nav>
        </footer> 
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
            <BrandingFooter /> 
            <SocialFooter />
        </footer>
        </>
    );
}

interface LinkFooterProps {
    href?: string;
    children: React.ReactNode
}

const LinkFooter: React.FC<LinkFooterProps> = ({ href = '', children }) => {
    return (
        <a href={ href } className="link link-hover">{ children }</a>
    );
}

export default Footer;