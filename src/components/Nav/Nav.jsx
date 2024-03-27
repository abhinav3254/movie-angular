import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import './Nav.scss'
import logo from '../../images/logo.svg'
import searchIcon from '../../images/search.svg'

function Nav() {
    const [visibleRight, setVisibleRight] = useState(false);
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

            <span className="pi pi-user sidebar-icon" onClick={() => setVisibleRight(true)}></span>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

        </div>
    )
}

export default Nav