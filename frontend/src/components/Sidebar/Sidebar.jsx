import React from 'react'
import './Sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
        <div className='sidebar'>
            <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
            <ul className='sidebar-links'>
                    <NavLink to='/'>
                        <IoHomeOutline className='icon'/>
                        صفحه اصلی
                    </NavLink>
                    <NavLink to='/products'>
                        <MdProductionQuantityLimits className='icon'/>
                        محصولات
                        </NavLink>
                    <NavLink to='/comments'>
                        <BiCommentDetail className='icon'/>
                        کامنت ها
                    </NavLink>
                    <NavLink to='/users'>
                        <TbUsersGroup className='icon'/>
                        کاربران
                    </NavLink>
                    <NavLink to='/orders'>
                        <IoBagHandleOutline className='icon'/>
                        سفارشات
                    </NavLink>
                    <NavLink to='/offs'>
                        <TbSquareRoundedPercentage className='icon'/>
                        تخفیف ها
                    </NavLink>
            </ul>
        </div>
    </>
)
}
