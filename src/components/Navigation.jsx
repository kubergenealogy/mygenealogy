import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navigation.scss";
import profile from "../assets/images/profile.jpeg";

const Navigation = () => {
  return (
    <div className="navigation">
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
          <Link to='/tribute' className="link">Tribute</Link>
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
