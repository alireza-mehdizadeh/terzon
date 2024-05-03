import React from "react"
import "./Cart.css"
import CartProductCard from "../../components/CartProductCard/CartProductCard"
import { BsArrowLeftShort } from "react-icons/bs"
import { useState } from "react"
import { useEffect } from "react"
import { MdOutlineRemoveShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import TopBar from "../../components/TopBar/TopBar"
import Footer from "../../components/Footer/Footer"

export default function Cart() {
  return (
    <>
      <TopBar />

      <div className="cart">
        <div className="no-product">
          <MdOutlineRemoveShoppingCart className="icon" />
          <span className="title">سبد خرید شما خالی است!</span>
          <Link className="go-product-page" to="/products">
            خرید محصول
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
