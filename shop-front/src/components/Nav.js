import React from 'react'
import searchIcon from '../assets/svg/search.svg'

export default function () {
  return (
    <nav>
        <div>
            MENU
        </div>
        <div>
            MaxShop
        </div>
        <img
            alt="search"
            src={searchIcon}
            className='search-icon'
        />
    </nav>
  )
}
