import React, { useState } from 'react'
import './ProductImageSlider.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper"
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function ProductImageSlider({ children }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div className='product-slider-wrapper'>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                zoom={true}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Zoom, Thumbs, FreeMode, Navigation]}
                className="product-swiper"
            >

                {children}

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="gallery-swiper"
            >
                {children}
            </Swiper>
        </div>
    )
}
