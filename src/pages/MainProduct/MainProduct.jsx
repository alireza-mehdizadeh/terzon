import React, { useState } from "react"
import { SwiperSlide } from "swiper/react"
import ProductImageSlider from "../../components/ProductImageSlider/ProductImageSlider"
import "./MainProduct.css"
import NewProductsSlider from "../../components/NewProductsSlider/NewProductsSlider"
import { TbCardboards } from "react-icons/tb"
import { FiClock } from "react-icons/fi"
import { BiMedal } from "react-icons/bi"
import { CgSandClock } from "react-icons/cg"
import {
  AiOutlineStar,
  AiOutlineBarChart,
  AiOutlineTags,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai"
import AddNewComment from "../../components/AddNewComment/AddNewComment"
import Comment from "../../components/Comment/Comment"
import ReplayComment from "../../components/ReplayComment/ReplayComment"
import Modal from "../../components/Modal/Modal"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import TopBar from "../../components/TopBar/TopBar"
import Footer from "../../components/Footer/Footer"

export default function MainProduct() {
  const [productCount, setProductCount] = useState(1)
  const [addToCartBtn, setAddToCartBtn] = useState("افزودن به سبد خرید")
  const [isShowMoreAbout, setIsShowMoreAbout] = useState(false)
  const [showReplayCommentModal, setShowReplayCommentModal] = useState(false)
  const [replayCommentId, setReplayCommentId] = useState(false)

  let params = useParams()
  let navigate = useNavigate()

  const [mainProduct, setMainProduct] = useState({
    productName: "",
    englishProductName: "",
    price: "",
    offPrice: "",
    gallery: [],
    color: [],
    tag: [],
    warranty: "",
    delivery: "",
    inStock: "",
    category: "",
    caption: "",
    dimensions: "",
    sIMCardDescription: "",
    weight: "",
    bodyStructure: "",
    specialFeatures: "",
    sIMCardNumber: "",
    chip: "",
    cPUFrequency: "",
    externalMemoryCardSupport: "",
    communicationNetworks: "",
    comments: {},
  })

  useEffect(() => {
    setMainProduct({
      productName: "",
      englishProductName: "",
      price: "",
      offPrice: "",
      gallery: [],
      color: [],
      tag: [],
      warranty: "",
      delivery: "",
      inStock: "",
      category: "",
      caption: "",
      dimensions: "",
      sIMCardDescription: "",
      weight: "",
      bodyStructure: "",
      specialFeatures: "",
      sIMCardNumber: "",
      chip: "",
      cPUFrequency: "",
      externalMemoryCardSupport: "",
      communicationNetworks: "",
      comments: {},
    })

    fetch(`http://localhost:3000/products/${params.productID}.json`)
      .then((res) => res.json())
      .then((data) => setMainProduct(data))
  }, [params.productID])

  const plusProductCount = () => setProductCount((prev) => prev + 1)

  const minusProductCount = () => setProductCount((prev) => (prev > 1 ? prev - 1 : 1))

  const showMoreAbout = () => setIsShowMoreAbout((prev) => !prev)

  const openReplayModal = (replayCommentId) => {
    setShowReplayCommentModal(true)
    setReplayCommentId(replayCommentId)
  }

  const closeReplayModal = () => setShowReplayCommentModal(false)

  const addToCart = () => {
    setAddToCartBtn("درحال افزودن...")

    let userId = document.cookie.slice(7)

    let userCartObj = {
      ...mainProduct,
      id: params.productID,
      count: productCount,
    }

    if (userId) {
      fetch(`http://localhost:3000/users/${userId}/cart.json`, {
        method: "POST",
        body: JSON.stringify(userCartObj),
      }).then((res) => {
        console.log(res)
        setAddToCartBtn("افزودن به سبد خرید")
        setProductCount(1)
      })
    } else {
      navigate("/login")
    }
  }

  return (
    <>
      <TopBar />

      <div className="product-wrpper">
        <div className="right-box">
          <div className="product-images-slider">
            <ProductImageSlider>
              {mainProduct.gallery.map((link) => (
                <SwiperSlide key={link}>
                  <img src={link} alt="product image" />
                </SwiperSlide>
              ))}
            </ProductImageSlider>
          </div>
        </div>

        <div className="main-box">
          <div className="title-bg">
            <h1 className="product-title">{mainProduct.productName}</h1>
            <h3 className="product-sub-title">{mainProduct.englishProductName}</h3>
          </div>

          <div className="product-sale-and-category-and-score">
            <span>
              <TbCardboards className="icon" />
              دسته: {mainProduct.category}
            </span>
            <span>
              <AiOutlineStar className="icon" />
              3.00 از 5
            </span>
            <span>
              <AiOutlineBarChart className="icon" />
              18 فروش موفق
            </span>
          </div>

          <div className="prosuct-more-datas">
            <div className="ready-to-sent">
              <FiClock className="icon" />
              <span>آماده ارسال</span>
            </div>

            <div className="grey-row"></div>

            <div className="select-custom-data">
              <label htmlFor="color-selecter">رنگ محصول</label>
              <select id="color-selecter">
                {mainProduct.color.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div className="warranty-box">
              <BiMedal className="icon" />
              <p>
                محصول با گارانتی <span>{mainProduct.warranty}</span> تحویل داده میشود.
              </p>
            </div>

            <div className="delivery-box">
              <CgSandClock className="icon" />
              <p>
                حداکثر تا <span>{mainProduct.delivery}</span> تحویل داده می شود.
              </p>
            </div>

            <div className="hashtag-box">
              <AiOutlineTags className="icon" />
              {mainProduct.tag.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="left-box">
          <div className="add-to-cart-and-price-datas-box">
            <ul>
              <li>
                آیدی: <span>{params.productID}</span>
              </li>
              <li>
                حافظه داخلی: <span>{mainProduct.externalMemoryCardSupport}</span>
              </li>
              <li>
                شبکه همراه: <span>{mainProduct.communicationNetworks}</span>
              </li>
              <li>
                قیمت: <span className="price">{(+mainProduct.price).toLocaleString()} تومان</span>
              </li>
              {mainProduct.offPrice && (
                <li>
                  قیمت با تخفیف:{" "}
                  <span className="price">{(+mainProduct.offPrice).toLocaleString()} تومان</span>
                </li>
              )}
            </ul>
            <div className="number-and-add-to-card-box">
              <div className="product-number-to-buy">
                <button onClick={minusProductCount}>
                  <AiOutlineMinusCircle />
                </button>
                <span>{productCount}</span>
                <button onClick={plusProductCount}>
                  <AiOutlinePlusCircle />
                </button>
              </div>
              <button
                disabled={addToCartBtn === "افزودن به سبد خرید" ? false : true}
                className="add-to-card-btn"
                onClick={addToCart}
              >
                {addToCartBtn}
              </button>
            </div>
          </div>
          <div className="do-you-satisfied-of-price-box">
            <span>آیا از قیمت های ما رضایت دارید؟</span>
            <button>بله</button>
            <button>خیر</button>
          </div>
        </div>
      </div>

      <div
        className="about-product"
        style={{
          maxHeight: isShowMoreAbout ? "unset" : "300px",
          paddingBottom: isShowMoreAbout ? "65px" : "0",
        }}
      >
        <h6>معرفی کوتاه</h6>
        <span>{mainProduct.productName}</span>
        <p>{mainProduct.caption}</p>
        <button onClick={showMoreAbout}>
          <span>{isShowMoreAbout ? "دیدن کمتر..." : "دیدن بیشتر..."}</span>
        </button>
      </div>

      <div className="product-technical-specifications">
        <table>
          <tbody>
            <tr>
              <th>ابعاد</th>
              <td>{mainProduct.weight}</td>
            </tr>
            <tr>
              <th>توضیحات سیم کارت</th>
              <td>{mainProduct.sIMCardDescription}</td>
            </tr>
            <tr>
              <th>وزن</th>
              <td>{mainProduct.dimensions}</td>
            </tr>
            <tr>
              <th>ساختار بدنه</th>
              <td>{mainProduct.bodyStructure}</td>
            </tr>
            <tr>
              <th>ویژگی‌های خاص</th>
              <td>{mainProduct.specialFeatures}</td>
            </tr>
            <tr>
              <th>تعداد سیم کارت</th>
              <td>{mainProduct.sIMCardNumber}</td>
            </tr>
            <tr>
              <th>تراشه</th>
              <td>{mainProduct.chip}</td>
            </tr>
            <tr>
              <th>فرکانس پردازنده‌ی مرکزی</th>
              <td>{mainProduct.cPUFrequency}</td>
            </tr>
            <tr>
              <th>پشتیبانی از کارت حافظه جانبی</th>
              <td>{mainProduct.externalMemoryCardSupport}</td>
            </tr>
            <tr>
              <th>شبکه های ارتباطی</th>
              <td>{mainProduct.communicationNetworks}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <NewProductsSlider />

      <div className="product-comments">
        <AddNewComment productID={params.productID} />
        <div className="last-comments">
          {mainProduct.comments &&
            Object.entries(mainProduct.comments).map((comment) => (
              <div key={comment[0]}>
                <Comment
                  commentID={comment[0]}
                  name={comment[1].userName}
                  text={comment[1].comment}
                  onReplay={openReplayModal}
                />
                {comment[1].replay &&
                  Object.entries(comment[1].replay).map((replayComment) => (
                    <ReplayComment
                      key={replayComment[0]}
                      commentID={comment[0]}
                      name={replayComment[1].userName}
                      text={replayComment[1].comment}
                      onReplay={openReplayModal}
                    />
                  ))}
              </div>
            ))}
        </div>

        {showReplayCommentModal && (
          <Modal title="پاسخ کامنت ارسال شده" onHide={closeReplayModal}>
            <AddNewComment productID={params.productID} replayID={replayCommentId} />
          </Modal>
        )}
      </div>

      <Footer />
    </>
  )
}
