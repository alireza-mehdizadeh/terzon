import React from 'react'
import './BrandsSlider.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css";
import "swiper/css/pagination";

export default function BrandsSlider() {
    return (
        <div className='brandsSlider'>
            <div className="header">
                <span>برند هایی که اطمینان کرده اند</span>
            </div>
            <div>
                <Swiper
                    // slidesPerView={4}
                    spaceBetween={70}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        350: {
                            slidesPerView: 3,
                        },
                        600: {
                            slidesPerView: 4,
                        },
                        800: {
                            slidesPerView: 7,
                        },
                    }}
                    className="brand-swiper"
                >
                    <SwiperSlide>
                        <img src="image/brand01.png" alt="products brand img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="image/brand02.png" alt="products brand img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="image/brand03.png" alt="products brand img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="image/brand04.png" alt="products brand img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="image/brand05.png" alt="products brand img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="image/brand06.png" alt="products brand img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="image/brand07.png" alt="products brand img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
