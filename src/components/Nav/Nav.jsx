import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import './Nav.scss'
import logo from '../../images/logo.svg'
import searchIcon from '../../images/search.svg'
import { Link } from 'react-router-dom';
import menSvg from '../../images/men.svg'

function Nav() {
    const [visibleRight, setVisibleRight] = useState(false);
    return (
        <div className='Nav'>
            <img className='NavLogo' src={logo} alt="" />
            <div className="NavRight">
                <ul className='NavRightUl'>
                    <li className='NavRightLi'>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className='NavRightLi'>
                        <Link to="/">Showtimes</Link>
                    </li>
                    <li className='NavRightLi'>
                        <Link to="">Our Theatre</Link>
                    </li>
                    <li className='NavRightLi'>
                        <Link to="">Store</Link>
                    </li>
                    <li className='NavRightLi'>
                        <Link to="">About Us</Link>
                    </li>
                    <li className='NavRightLi'>
                        <Link to="">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="NavRightSearch">
                <input className='NavRightSearchInput' type="text" placeholder='search...' />
                <img className='NavRightSearchIcon' src={searchIcon} alt="" />
            </div>

            <span className="pi pi-user sidebar-icon" onClick={() => setVisibleRight(true)}></span>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <div className="SideBarElement">
                    {/* <img className='SideBarElementLogo' src={menSvg} alt="" /> */}
                    <span className="pi pi-user SideBarElementLogo"></span>
                    <p className='SideBarElementText'>Profile</p>
                </div>
                <div className="SideBarElement">
                    <img className='SideBarElementLogo' src={menSvg} alt="" />
                    <p className='SideBarElementText'>My Bookings</p>
                </div>
                <div className="SideBarElement">
                    <img className='SideBarElementLogo' src={menSvg} alt="" />
                    <p className='SideBarElementText'>Notifications</p>
                </div>
                <div className="SideBarElement">
                    {/* <img className='SideBarElementLogo' src={menSvg} alt="" /> */}
                    <span className="pi pi-bookmark SideBarElementLogo"></span>
                    <p className='SideBarElementText'>Bookmarks</p>
                </div>
                <div className="SideBarElement">
                    <img className='SideBarElementLogo' src={menSvg} alt="" />
                    <p className='SideBarElementText'>Memberships</p>
                </div>
                <div className="SideBarElement">
                    <img className='SideBarElementLogo' src={menSvg} alt="" />
                    <p className='SideBarElementText'>Settings</p>
                </div>

                <div className="SideBarElement">
                    {/* <img className='SideBarElementLogo' src={menSvg} alt="" /> */}
                    <span className="pi pi-sign-out SideBarElementLogo"></span>
                    <p className='SideBarElementText'>Logout</p>
                </div>
            </Sidebar>

        </div>
    )
}

export default Nav