import React, { useEffect, useState } from "react"
import "./TopBar.css"
import { TiThMenu } from "react-icons/ti"
import { GrInstagram } from "react-icons/gr"
import { CgShoppingBag } from "react-icons/cg"
import NavBar from "../NavBar/NavBar"
import SearchBar from "../SearchBar/SearchBar"
import UserLoginStatus from "../UserLoginStatus/UserLoginStatus"
import SideBarMenu from "../SideBarMenu/SideBarMenu"
import { Link } from "react-router-dom"

export default function TopBar() {
  const [showMenu, setShowMenu] = useState(false)
  const [cartProductCounts, setCartProductCounts] = useState(0)

  let userId = document.cookie.slice(7)

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}/cart.json`)
      .then((res) => res.json())
      .then(
        (data) =>
          data &&
          Object.entries(data).forEach((product) =>
            setCartProductCounts((prev) => prev + product[1].count)
          )
      )
  }, [userId])

  const openMenuHandler = () => setShowMenu((prev) => !prev)

  return (
    <>
      <div className="topBar-container">
        <div className="topBar-first">
          <Link to="/">
            <img className="topBar-logo" src="/image/logo.png" alt="logo" />
          </Link>

          <div className="searchBar-and-user-status-wrapper">
            <SearchBar />
            <UserLoginStatus />
          </div>

          <TiThMenu onClick={openMenuHandler} className="topBar-menu-btn" />
        </div>

        <div className="topBar-second">
          <div className="nav-wrapper">
            <NavBar />
          </div>

          <div className="instagram-logo">
            <a target="_blank" href="https://www.instagram.com/erfanm.01">
              <GrInstagram />
              <div className="instagram-img-pop-up">
                <img src="/image/instagram.png" alt="instagram image" />
              </div>
            </a>
          </div>

          <div className="product-cart">
            <Link to="/cart">
              <CgShoppingBag className="icon" />
              <span className="title">سبد خرید</span>
              <span className="subtitle">{cartProductCounts}</span>
            </Link>
          </div>
        </div>

        {showMenu && <SideBarMenu showHandler={openMenuHandler} />}
      </div>
    </>
  )
}
