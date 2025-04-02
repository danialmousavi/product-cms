import React from 'react'
import './Sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
        <div className='sidebar'>
            <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
            <ul className='sidebar-links'>
                <li >
                    <Link to='/'>
                        <IoHomeOutline className='icon'/>
                        صفحه اصلی
                    </Link>
                </li>
                <li className='active'>
                    <Link to='/products'>
                        <MdProductionQuantityLimits className='icon'/>
                        محصولات
                        </Link>
                </li>
                <li>
                    <Link to='/comments'>
                        <BiCommentDetail className='icon'/>
                        کامنت ها
                    </Link>
                </li>
                <li>
                    <Link to='/users'>
                        <TbUsersGroup className='icon'/>
                        کاربران
                    </Link>
                </li>
                <li>
                    <Link to='/orders'>
                        <IoBagHandleOutline className='icon'/>
                        سفارشات
                    </Link>
                </li>
                <li>
                    <Link to='/offs'>
                        <TbSquareRoundedPercentage className='icon'/>
                        تخفیف ها
                    </Link>
                </li>
            </ul>
        </div>
    </>
)
}
