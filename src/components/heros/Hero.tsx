import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Mousewheel } from 'swiper/modules';
import HeroFactory from '@/utils/factories/HeroFactory';
import { SliderCustomHelpers } from '@/utils/helpers/SliderCustomHelpers';

const Hero: React.FC = () => {
    const data1 = [
        {id:1, type: 'login', description: "No estas registrado? Deberias hacerlo!!!" },
    ]
    const data2 = [
        {id:1, type: 'simple-description', title: '¡Renueva tu estilo esta primavera!', btnText: 'Descubre Ahora', description: 'Explora nuestra nueva colección de moda primaveral. Desde colores vibrantes hasta diseños frescos, encuentra la inspiración para tu guardarropa.' },
        {id:2, type: 'simple-description', title: 'Banana', btnText: 'Boton Tocar',description: "Esta es la descripcion de banana" },
    ]
    const data3 = [
        {id:1, type: 'simple-description', title: '¡Noche de Compras Privada!', btnText: 'Explora Novedades' },
    ]
    const data4 = [
        {id:1, type: 'simple-description', title: '¡Flash Sale! ¡Aprovecha hoy nuestras ofertas exclusivas!', btnText: 'Explora Novedades', description: 'Grandes descuentos en tus productos favoritos. No te pierdas esta oportunidad única de ahorrar en artículos seleccionados. ¡Date prisa, la oferta es limitada!' },
    ]

    return(
        <div className='flex box-border flex-wrap border-box' style={{width: "100%"}}>

            <SliderCustomHelpers.heroCustomHelper datas={data1} className='h-4/6 z-20 w-2/3 flex items-center' />
            <SliderCustomHelpers.heroCustomHelper datas={data2} className='h-4/6 z-20 w-1/3' />
            <SliderCustomHelpers.heroCustomHelper datas={data3} className='h-50 z-20 w-1/3' />
            <SliderCustomHelpers.heroCustomHelper datas={data4} className='h-50 z-20 w-2/3' />
            
        </div> 
        
    )
}

export default Hero