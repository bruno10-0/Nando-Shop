'use client'
import Image from "next/image";
import { montserrat } from "@/fonts/fonts";
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import style from './ProductsOffers.module.css';
import { SwiperSlide } from "swiper/react";
import { SliderCustomHelpers } from "@/utils/helpers/SliderCustomHelpers";

const ProductsOffers: React.FC = () => {
    // const [selectedId, setSelectedId] = useState(null)
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const items = [
        {id:1, subtitle: "subtitulo", title: "titulo", image: "/assets/images/products/15.png"},
        {id:2, subtitle: "subtitulo2", title: "titulo2", image: "/assets/images/products/16.png"},
        {id:3, subtitle: "subtitulo3", title: "titulo3", image: "/assets/images/products/17.png"},
        {id:4, subtitle: "subtitulo4", title: "titulo4", image: "/assets/images/products/18.png"},
        {id:5, subtitle: "subtitulo5", title: "titulo5", image: "/assets/images/products/12.png"},
        {id:6, subtitle: "subtitulo5", title: "titulo5", image: "/assets/images/products/16.png"},
        {id:7, subtitle: "subtitulo5", title: "titulo5", image: "/assets/images/products/16.png"},
    ];
    const selectedItem = items.find((item) => item.id === selectedId);

    return(
        <article className="prose">
            <h2 className={`${montserrat.className} text-3xl`}>Nuestros Productos en Ofertas</h2>

            <div className={` ${style.content}`}>
                <div className={style.listProducts}>
                    <SliderCustomHelpers.perView>

                    {
                        items.map(item => (
                            <SwiperSlide key={item.id} className={style.swiperSlide}>

                                <motion.div layoutId={String(item.id)} className={`card bg-base-200  ${style.product}`} onClick={() => setSelectedId(item.id)}>
                                    <Image alt="Tailwind CSS Navbar component" src={item.image} width='150' height="100"/>
                                </motion.div>
                                
                            </SwiperSlide>
                            
                        ))
                    }
                    </SliderCustomHelpers.perView>
                    
                </div>
                <AnimatePresence>
                    {selectedId && (
                            <div className="w-screen h-screen fixed top-0 left-0 " style={{zIndex: "100000000", backgroundColor: '#0006'}}>
                                <motion.div layoutId={String(selectedId)} className={`card w-96 shadow-xl bg-secondary inset-y-0 inset-x-0 ${style.modal}`} >

                                    <div className="card-body">
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-square btn-sm" onClick={() => setSelectedId(null)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>
                                    <p>We are using cookies for no reason.</p>
                                    </div>
                                

                            {/* <motion.h2>{selectedItem?.title}</motion.h2>
                            <motion.h5>{selectedItem?.subtitle}</motion.h5>
                            <motion.button onClick={() => setSelectedId(null)} >X</motion.button> */}

                        </motion.div>
                            </div>
                        
                    )}
                </AnimatePresence>
            </div>

        </article>
    )
}

export default ProductsOffers;