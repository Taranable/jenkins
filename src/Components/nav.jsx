import React from 'react'
import "./nav.css"
import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from 'react';

const Nav = () => {

    const[menuopen,setmenuopen]=useState(false)

  return (
    <div className='mainDiv'>
        <div className='left'>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" srcset="" />
            <p className='heading'>0</p>
        </div>
        <div className="smallMenu" onClick={()=>{
            setmenuopen(!menuopen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='menu'>
            <ul className={menuopen?"open":""}>
               
                <li> <Link style={{color:"rgb(59 130 246)"}} to="/">1</Link></li>
                <li> <Link to="/quotes"><details>2</details></Link></li>
              
                <li><Link to="/ResturantHomePage">3</Link></li>
                <li>Foods</li>
                <li><Link to="/Contact">4</Link></li>
            </ul>
        </div>
        <div className='right'>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Nav