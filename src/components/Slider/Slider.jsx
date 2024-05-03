import React from 'react'
import './Slider.css'
import { Link } from 'react-router-dom'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Slider() {
    return (
        <div className='slider-wrapper'>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >

                <SwiperSlide className='swiper-slides'>
                    <Link to='/'>
                        <img src="image/slider-2.jpg" alt="slider" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='swiper-slides'>
                    <Link to='/'>
                        <img src="image/slider-1.jpg" alt="slider" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='swiper-slides'>
                    <Link to='/'>
                        <img src="image/slider-3.jpg" alt="slider" />
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}