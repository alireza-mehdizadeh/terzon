import React, { useState, useEffect } from 'react'
import './AboutUser.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Accordion from '../../components/Accordion/Accordion'
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'
import Footer from '../../components/Footer/Footer'

export default function AboutUser() {

    const [lastBuyList, setLastBuyList] = useState({})
    const [userName, setUserName] = useState('')

    let navigate = useNavigate()

    let userId = document.cookie.slice(7)

    useEffect(() => {
        fetch(`https://terzon-back.iran.liara.run/users/${userId}/lastBuy.json`)
            .then(res => res.json())
            .then(data => setLastBuyList(data))

        fetch(`https://terzon-back.iran.liara.run/users/${userId}/userName.json`)
            .then(res => res.json())
            .then(data => setUserName(data))
    }, [])

    const logOut = () => {
        const date = new Date()
        date.setTime(date.getTime() - (7 * 24 * 60 * 60 * 1000))
        document.cookie = `userID=${userId}; expires=${date}; path=/;`
        navigate('/')
    }

    return (
        <>
            <TopBar />

            <div className='about-user-wrapper'>
                <div className="head">
                    <p>سلام {userName} عزیز! ({userName} نیستید؟ <b onClick={logOut}>خارج شوید</b>)</p>
                    <BiLogOut onClick={logOut} className='icon' title='خارج شدن از حساب' />
                </div>
                <h4>خرید های شما تا کنون:</h4>
                {
                    Object.entries(lastBuyList).map(cartProducts => (
                        <>
                            <Accordion key={cartProducts[0]} title={cartProducts[1].date}>
                                <div className="old-buy-products">
                                    {
                                        Object.entries(cartProducts[1]).map(product => product[0] !== 'date' && (
                                            <ProductCard key={product[0]} count={product[1].count} productId={product[1].id} img={product[1].gallery[0]} title={product[1].productName} price={product[1].price} offPrice={product[1].offPrice} />
                                        ))
                                    }
                                </div>
                            </Accordion>
                            <br />
                        </>
                    ))
                }
                <br />
            </div>

            <Footer />
        </>
    )
}
