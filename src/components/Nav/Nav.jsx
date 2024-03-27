import React from 'react'
import './Nav.scss'
import logo from '../../images/logo.svg'
import searchIcon from '../../images/search.svg'

function Nav() {
    return (
        <div className='Nav'>
            <img className='NavLogo' src={logo} alt="" />
            <div className="NavRight">
                <ul className='NavRightUl'>
                    <li className='NavRightLi'>Home</li>
                    <li className='NavRightLi'>Showtimes</li>
                    <li className='NavRightLi'>Our Theatre</li>
                    <li className='NavRightLi'>Store</li>
                    <li className='NavRightLi'>About Us</li>
                    <li className='NavRightLi'>Contact</li>
                </ul>
            </div>
            <div className="NavRightSearch">
                <input className='NavRightSearchInput' type="text" placeholder='search...' />
                <img className='NavRightSearchIcon' src={searchIcon} alt="" />
            </div>

        </div>
    )
}

export default Nav