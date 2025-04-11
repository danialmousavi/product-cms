import React from 'react'
import './Header.css'
import { FaBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

export default function Header() {
  return (
    <>
    <div className="header">
        <div className='admin-profile'>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFwYCgMKq_qYQ/profile-displayphoto-shrink_400_400/B4DZUazeMnHkAk-/0/1739911457755?e=1749686400&v=beta&t=fUdN1a3mSGWTSy9FqKl02KXxySwWXsPZrIp9ba65JB8" alt="" />
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
