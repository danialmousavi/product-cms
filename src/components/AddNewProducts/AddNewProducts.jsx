import React from 'react'
import './AddNewProducts.css'
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { LuPaintbrush } from "react-icons/lu";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";

export default function AddNewProducts() {
  return (
    <>
    <div className='products-main'>
        <h1 className='products-title'>افزودن محصول جدید</h1>
        <form action="" className='add-products-form'>
            <div className='add-products-form-wrap'>
                <div className='add-products-from-group'>
                    <MdDriveFileRenameOutline className='products-input-icon'/>
                    <input type="text" placeholder='اسم محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-from-group'>
                    <MdOutlineAttachMoney className='products-input-icon'/>
                    <input type="text" placeholder='قیمت محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-from-group'>
                    <IoBagOutline className='products-input-icon'/>
                    <input type="text" placeholder='موجودی محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-from-group'>
                    <IoImageOutline className='products-input-icon'/>
                    <input type="text" placeholder='آدرس عکس محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-from-group'>
                    <LuMessageCircleHeart className='products-input-icon'/>
                    <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-from-group'>
                    <FaChartLine className='products-input-icon'/>
                    <input type="text" placeholder='میزان فروش محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-from-group'>
                    <LuPaintbrush className='products-input-icon'/>
                    <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید' className='add-products-input' />
                </div>
            </div>
            <button className='add-product-submit'>اضافه کردن محصول</button>

        </form>
    </div>
    </>
)
}
