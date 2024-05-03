import React, { useEffect, useState } from "react"
import Accordion from "../../components/Accordion/Accordion"
import ProductCard from "../../components/ProductCard/ProductCard"
import "./Products.css"
import useFirebase from "../../hooks/useFirebase/useFirebase"
import { useLocation } from "react-router-dom"
import TopBar from "../../components/TopBar/TopBar"
import Footer from "../../components/Footer/Footer"

export default function Products() {
  const [products, setProducts] = useFirebase(
    "https://terzon-back.iran.liara.run/products"
  )
  let locationData = useLocation()
  const [searchWord, setSearchWord] = useState(locationData.search.slice(10))

  useEffect(() => {
    setSearchWord(locationData.search.slice(10))
  }, [locationData.search.slice(10)])

  return (
    <>
      <TopBar />
      <div className="accordions-wrapper">
        <Accordion open={searchWord === "offer"} title="محصولات تخفیف خورده">
          <div className="products-card-box">
            {products.map(
              (productObj) =>
                productObj.offPrice && (
                  <ProductCard
                    key={productObj.id}
                    offPrice={productObj.offPrice}
                    productId={productObj.id}
                    img={productObj.gallery[0]}
                    title={productObj.productName}
                    price={productObj.price}
                  />
                )
            )}
          </div>
        </Accordion>
        <Accordion
          open={searchWord === "mobile"}
          title="موبایل هوشمند و تلفن ساده"
        >
          <div className="products-card-box">
            {products.map(
              (productObj) =>
                productObj.category === "Mobile" && (
                  <ProductCard
                    key={productObj.id}
                    offPrice={productObj.offPrice}
                    productId={productObj.id}
                    img={productObj.gallery[0]}
                    title={productObj.productName}
                    price={productObj.price}
                  />
                )
            )}
          </div>
        </Accordion>
        <Accordion open={searchWord === "laptop"} title="لپتاب های روز">
          <div className="products-card-box">
            {products.map(
              (productObj) =>
                productObj.category === "Laptop" && (
                  <ProductCard
                    key={productObj.id}
                    offPrice={productObj.offPrice}
                    productId={productObj.id}
                    img={productObj.gallery[0]}
                    title={productObj.productName}
                    price={productObj.price}
                  />
                )
            )}
          </div>
        </Accordion>
        <Accordion
          open={searchWord === "accessories"}
          title="لوازم جانبی موبایل و لپتاپ"
        >
          <div className="products-card-box">
            {products.map(
              (productObj) =>
                productObj.category === "Accessory" && (
                  <ProductCard
                    key={productObj.id}
                    offPrice={productObj.offPrice}
                    productId={productObj.id}
                    img={productObj.gallery[0]}
                    title={productObj.productName}
                    price={productObj.price}
                  />
                )
            )}
          </div>
        </Accordion>
        <Accordion open={searchWord === "more"} title="دیگر محصولات ما...">
          <div className="products-card-box">
            {products.map(
              (productObj) =>
                productObj.category === "More" && (
                  <ProductCard
                    key={productObj.id}
                    offPrice={productObj.offPrice}
                    productId={productObj.id}
                    img={productObj.gallery[0]}
                    title={productObj.productName}
                    price={productObj.price}
                  />
                )
            )}
            ّ
          </div>
        </Accordion>
      </div>
      <Footer />
    </>
  )
}
