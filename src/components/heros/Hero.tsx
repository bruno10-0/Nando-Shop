import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Mousewheel } from 'swiper/modules';

const Hero: React.FC = () => {
    return(
        
        
        <div className='flex box-border flex-wrap' style={{width: "100%"}}>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-80 z-20 w-2/3"
            >
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200 " style={{height: "inherit"}}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200" style={{height: "inherit"}}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>

            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-80 z-20 md:w-1/3"
            >
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200 " style={{height: "inherit"}}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200" style={{height: "inherit"}}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
       
        <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination, Mousewheel]}
                className="mySwiper h-40 z-20 md:w-2/3 "
                direction={'vertical'}
                mousewheel={true}
            >
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200 " style={{height: "inherit"}}>
                        <div className="max-w-md h-auto">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200" style={{height: "inherit"}}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination, Mousewheel]}
                className="mySwiper h-40 z-20 md:w-1/3"
                mousewheel={true}
            >
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200 " style={{height: "inherit"}}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-content text-center bg-base-200" style={{height: "inherit"}}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
        </div>
        
        
    )
}

export default Hero