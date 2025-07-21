import React, { Component } from "react"
import { ImClock } from "react-icons/im"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "./OffSlider.css"
import ProductCard from "../ProductCard/ProductCard"

export default class OffSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        Object.entries(data).forEach((item) => {
          let newObj = { ...item[1], id: item[0] }
          this.setState((prevArray) => ({ products: [...prevArray.products, newObj] }))
        })
      })
  }

  render() {
    return (
      <div className="offSlider-wrapper">
        <div className="text-and-icon-box">
          <ImClock className="icon" />
          <h2>زنگ تخفیفه!</h2>
        </div>
        <div className="off-slider-box">
          <Swiper
            // slidesPerView={4}
            spaceBetween={20}
            loop={true}
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
            {this.state.products.slice(0, 10).map(
              (productObj) =>
                productObj.offPrice && (
                  <SwiperSlide key={productObj.id}>
                    <ProductCard
                      offPrice={productObj.offPrice}
                      productId={productObj.id}
                      img={productObj.gallery[0]}
                      title={productObj.productName}
                      price={productObj.price}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    )
  }
}
