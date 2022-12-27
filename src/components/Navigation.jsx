import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navigation.scss";
import profile from "../assets/images/profile.jpeg";

const Navigation = () => {
  const header = useRef();
  useLayoutEffect(() => {
    const animate = header.current.getBoundingClientRect().bottom;

    const onScroll = ()=>{
      if(animate<window.scrollY){
          header.current.classList.add("fixed");
      }else{
          header.current.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", onScroll);
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [])
  return (
    <div className="navigation" ref={header}>
      <div className="title">
        My Genealogy
      </div>
      <div className="menu-items">
        <div className="profile">
          <div className="img"><img src={profile} alt="" /></div>
          <div className="name">Dipesh Yadav</div>
        </div>
        <div className="links">
          <Link to='/' className="link">Home</Link>
          <Link to='/about' className="link">About</Link>
          <Link to='/contact' className="link">Contact</Link>
          <Link to='/familytree' className="link">Family Tree</Link>
        </div>
      </div>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
        />
        <button className="searchButton" href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
