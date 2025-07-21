import React from "react"
import "./CartProductCard.css"
import { FiTrash } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function CartProductCard({
  onDeleted,
  cartId,
  id,
  title,
  price,
  offPrice,
  img,
  count,
}) {
  let userId = document.cookie.slice(7)

  const deleteProductOfCart = () => {
    fetch(`http://localhost:3000/users/${userId}/cart/${cartId}.json`, {
      method: "DELETE",
    }).then((res) => onDeleted())
  }

  return (
    <div className="cart-product-card">
      <div className="product-data-and-img">
        <Link target={"_blank"} to={`/products/${id}`}>
          <img src={img} alt="product image" />
        </Link>
        <div className="data">
          <h3>{title}</h3>
          <span>{(+offPrice || +price).toLocaleString()} تومان</span>
        </div>
      </div>
      <div className="action">
        <span>X{count}</span>
        <FiTrash onClick={deleteProductOfCart} className="icon" />
      </div>
    </div>
  )
}
