import React from 'react'
import './AccessoriesSlider.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from '../ProductCard/ProductCard'
import useFirebase from '../../hooks/useFirebase/useFirebase'

export default function AccessoriesSlider() {

    const [products, setProducts] = useFirebase('https://terzon-back.iran.liara.run/products')

    return (
        <div className='accessoriesSlider'>
            <div className="header">
                <span>لوازم جانبی</span>
            </div>
            <div>
                <Swiper
                    // slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        350: {
                            slidesPerView: 2,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        800: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper4"
                >
                    {
                        products.slice(0, 10).map(productObj => productObj.category === 'Accessory' && (
                            <SwiperSlide key={productObj.id}>
                                <ProductCard offPrice={productObj.offPrice} productId={productObj.id} img={productObj.gallery[0]} title={productObj.productName} price={productObj.price} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
