import React from 'react'
import './Header.css'
import { FaBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

export default function Header() {
  return (
    <>
    <div className="header">
        <div className='admin-profile'>
            <img src="/img/saeedi.jpeg" alt="" />
            <div>
            <h1>دانیال موسوی</h1>
            <h3>برنامه نویس فزانت اند</h3>
            </div>
        </div>
        <div className='header-left-section'>
            <div className="search-box">
                <input type="text" placeholder='جست و جو بکنید...' />
                <button>جست و جو</button>
            </div>
            <button className='header-left-icon'><FaBell/></button>
            <button className='header-left-icon'><CiBrightnessUp/></button>
        </div>
    </div>
    </>
    )
}
