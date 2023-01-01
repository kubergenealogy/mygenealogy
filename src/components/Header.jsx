import React, { useRef, useState, useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../assets/css/header.scss'

const Header = () => {
    const [show, setToShow] = useState(false);
    const header = useRef();
    useLayoutEffect(() => {
        const animate = header.current.getBoundingClientRect().bottom;

        const onScroll = () => {
            if (animate < window.scrollY) {
                header.current.classList.add("fixed");
            } else {
                header.current.classList.remove("fixed");
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [])

    const handleDisplay = () => {
        !show ? setToShow(!show) : setToShow(!show);
    }

    return (
        <div className={show ? "header no-anim" : "header"} ref={header}>
            <div className="logo">
                Kuber's Genealogy
            </div>
            <div className="mobile-menu">
                <div className="menu-btn btn" onClick={handleDisplay}>
                    <span></span><span></span><span></span>
                </div>
                <div className={show ? "menu-container active" : "menu-container"} >
                    <div className="close-btn btn" onClick={handleDisplay}>
                        <span></span><span></span>
                    </div>
                    <div className="menu-items">
                        <NavLink to='/' className="item">Home</NavLink>
                        <NavLink to='/gallery' className="item">Gallery</NavLink>
                        <NavLink to='/familytree' className="item">Family Tree</NavLink>
                        <NavLink to='/members' className="item">Members</NavLink>
                        <NavLink to='/about' className="item">About</NavLink>
                    </div>
                    <div onClick={() => window.open( 'https://forms.gle/bypLKT6ibPTsUcf16')}  className="header-btn btn"><span>Add Member</span></div>

                </div>
            </div>
            <div className="menu-items">
                <NavLink to='/' className="item">Home</NavLink>
                <NavLink to='/gallery' className="item">Gallery</NavLink>
                <NavLink to='/familytree' className="item">Family Tree</NavLink>
                <NavLink to='/contact' className="item">contact</NavLink>
                <NavLink to='/about' className="item">About</NavLink>
            </div>
            <div onClick={() => window.open( 'https://forms.gle/bypLKT6ibPTsUcf16')}  className="header-btn btn"><span>Add Member</span></div>
        </div>
    )
}

export default Header
