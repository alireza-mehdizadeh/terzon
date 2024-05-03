import React from 'react'
import './Home.css'
import AccessoriesSlider from '../../components/AccessoriesSlider/AccessoriesSlider'
import BrandsSlider from '../../components/BrandsSlider/BrandsSlider'
import CategoryBox from '../../components/CategoryBox/CategoryBox'
import LaptopSlider from '../../components/LaptopSlider/LaptopSlider'
import NewProductsSlider from '../../components/NewProductsSlider/NewProductsSlider'
import OffSlider from '../../components/OffSlider/OffSlider'
import Slider from '../../components/Slider/Slider'
import Widgets from '../../components/Widgets/Widgets'
import TopBar from '../../components/TopBar/TopBar'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <TopBar />

            <Slider />

            <div className="category-boxes">
                <CategoryBox url='/' title='صفحه اصلی' img='image/icon-7.jpg' count={99} />
                <CategoryBox url='/products?category=offer' title='تخفیف روز' img='image/icon-1-1.jpg' count={99} />
                <CategoryBox url='/products?category=mobile' title='موبایل همراه' img='image/icon-3.jpg' count={99} />
                <CategoryBox url='/products?category=laptop' title='لپتاب و آیمک' img='image/icon-8.jpg' count={99} />
                <CategoryBox url='/products?category=accessories' title='لوارم جانبی' img='image/icon-4.jpg' count={99} />
                <CategoryBox url='/products?category=more' title='دیگر محصولات' img='image/icon-5.jpg' count={99} />
            </div>

            <OffSlider />

            <NewProductsSlider />

            <Widgets />

            <AccessoriesSlider />

            <LaptopSlider />

            <BrandsSlider />

            <Footer />
        </>
    )
}
