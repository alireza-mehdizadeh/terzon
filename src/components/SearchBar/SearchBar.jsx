import React from 'react'
import './SearchBar.css'
import { ImSearch } from 'react-icons/im'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchBar({ background }) {

    const [searchBox, setSearchBox] = useState('')

    let location = useLocation()

    let siteUrl = window.location.href

    const submitSearch = () => window.open(`https://www.google.com/search?sitesearch=${siteUrl}&q=${searchBox}`)
    const searchBoxHandler = ev => setSearchBox(ev.target.value)

    return (
        <div className="topBar-search-box">
            <input value={searchBox} onChange={searchBoxHandler} style={background && { backgroundColor: background }} type="search" placeholder='جستجو در محصولات...' />
            <span onClick={submitSearch}>
                <ImSearch />
            </span>
        </div>
    )
}
