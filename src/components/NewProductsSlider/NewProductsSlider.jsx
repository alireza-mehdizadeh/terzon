import React from "react"
import "./NewProductsSlider.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import ProductCard from "../ProductCard/ProductCard"
import useFirebase from "../../hooks/useFirebase/useFirebase"

export default function NewProductsSlider() {
  const [products, setProducts] = useFirebase("http://localhost:3000/products")

  return (
    <div className="newProductsSlider">
      <div className="header">
        <span>جدیدترین محصولات</span>
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
          className="mySwiper2"
        >
          {products.slice(0, 10).map((productObj) => (
            <SwiperSlide key={productObj.id}>
              <ProductCard
                offPrice={productObj.offPrice}
                productId={productObj.id}
                img={productObj.gallery[0]}
                title={productObj.productName}
                price={productObj.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
