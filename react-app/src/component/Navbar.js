import React from "react";
import './Navbar.css';
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
 export default function Navbar({theme,setTheme}) {
    function toggleTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return(
       <div className="navbar">
        <img src={theme==='light'? logo_light: logo_dark} alt="" className="logo-icon"/>
        <ul>
        <li><Link to="/">Home</Link></li>
    <li><Link to="/aboutus">About us</Link></li>
    <li><Link to="/contactus">Contact us</Link></li>
    <li><Link to="/Table">Table</Link></li>
        </ul>
        <div className="search-box">
            <input type="text"  placeholder="Search"/>
            <img src={theme==='light'? search_icon_light:search_icon_dark} alt="" />
        </div>
        <img onClick={()=>{toggleTheme()}} src={theme==='light'? toggle_light:toggle_dark} alt="" className="toggle-icon"/>   
            </div>
    );
}
