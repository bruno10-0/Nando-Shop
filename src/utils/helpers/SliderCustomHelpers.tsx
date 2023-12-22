import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import HeroFactory from "../factories/HeroFactory";

interface Childreable{
    children?: React.ReactNode;
}
interface Datasable{
    datas: Record<string, any>;
}

export namespace SliderCustomHelpers{
    export interface SimplePropsHelper extends Childreable{}
    export const simple: React.FC<SimplePropsHelper> = ({children}) => {
        return(
            <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-80 z-20 w-2/3"
            >
                {children}            
            </Swiper>
        )
    }
    export interface HeroCustomHelper extends Datasable{ className?: string}
    export const heroCustomHelper: React.FC<HeroCustomHelper> = ({datas, className = ''}) => {
        return(
            <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className={`mySwiper ${className}`}
            >
                {
                    datas.map((data: Record<string,any>,index:number) => {
                        return (
                            <SwiperSlide key={index}>
                                {HeroFactory.createHero(data.type, data)}
                            </SwiperSlide>
                        )
                    })
                }      
            </Swiper>
        )
    }
}