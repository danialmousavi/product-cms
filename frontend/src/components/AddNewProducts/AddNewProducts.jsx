import React, { useState } from 'react'
import './AddNewProducts.css'
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { LuPaintbrush } from "react-icons/lu";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { Bounce, ToastContainer, toast } from 'react-toastify';
export default function AddNewProducts({getAllProducts}) {
const [newProductTitle,SetNewProductTitle]=useState('');
const [newProductPrice,SetNewProductPrice]=useState('');
const [newProductCount,SetNewProductCount]=useState('');
const [newProductImg,SetNewProductImg]=useState('');
const [newProductPopularity,SetNewProductPopularity]=useState('');
const [newProductSale,SetNewProductSale]=useState('');
const [newProductColors,SetNewProductColors]=useState('');
const notify = () => toast("محصول با موفقیت اضافه شد!");
const newProductObj={
    title:newProductTitle,
    price:newProductPrice,
    count:newProductCount,
    img:newProductImg,
    popularity:newProductPopularity,
    sale:newProductSale,
    colors:newProductColors
}
const addNewProduct = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(newProductObj)
    })
    .then(async res => {
        if (res.ok) {
            const data = await res.json();
            console.log("Product added successfully:", data);
            // Optionally update UI or state here
            SetNewProductTitle('');
            SetNewProductPrice('');
            SetNewProductColors('');
            SetNewProductCount('');
            SetNewProductImg('');
            SetNewProductPopularity('');
            SetNewProductSale('');
            notify();
            getAllProducts();
        } else {
            const error = await res.text(); // or res.json() if your server sends JSON errors
            console.error("Failed to add product:", error);
        }
    })
    .catch(err => {
        console.error("Network or server error:", err);
    });
};
  return (
    <>
    <div className='products-main'>
        <h1 className='products-title'>افزودن محصول جدید</h1>
        <form action="" className='add-products-form'>
            <div className='add-products-form-wrap'>
                <div className='add-products-from-group'>
                    <MdDriveFileRenameOutline className='products-input-icon'/>
                    <input type="text" placeholder='اسم محصول را بنویسید' className='add-products-input'onChange={(e)=>SetNewProductTitle(e.target.value)} value={newProductTitle}/>
                </div>
                <div className='add-products-from-group'>
                    <MdOutlineAttachMoney className='products-input-icon'/>
                    <input type="text" placeholder='قیمت محصول را بنویسید' className='add-products-input'onChange={(e)=>SetNewProductPrice(e.target.value)} value={newProductPrice}/>
                </div>
                <div className='add-products-from-group'>
                    <IoBagOutline className='products-input-icon'/>
                    <input type="text" placeholder='موجودی محصول را بنویسید' className='add-products-input'onChange={(e)=>SetNewProductCount(e.target.value)} value={newProductCount}/>
                </div>
                <div className='add-products-from-group'>
                    <IoImageOutline className='products-input-icon'/>
                    <input type="text" placeholder='آدرس عکس محصول را بنویسید' className='add-products-input' onChange={(e)=>SetNewProductImg(e.target.value)} value={newProductImg} />
                </div>
                <div className='add-products-from-group'>
                    <LuMessageCircleHeart className='products-input-icon'/>
                    <input type="text" placeholder='میزان محبوبیت محصول را بنویسید' className='add-products-input' onChange={(e)=>SetNewProductPopularity(e.target.value)} value={newProductPopularity}/>
                </div>
                <div className='add-products-from-group'>
                    <FaChartLine className='products-input-icon'/>
                    <input type="text" placeholder='میزان فروش محصول را بنویسید' className='add-products-input'onChange={(e)=>SetNewProductSale(e.target.value)} value={newProductSale}/>
                </div>
                <div className='add-products-from-group'>
                    <LuPaintbrush className='products-input-icon'/>
                    <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید' className='add-products-input'onChange={(e)=>SetNewProductColors(e.target.value)} value={newProductColors}/>
                </div>
            </div>
            <button className='add-product-submit' onClick={addNewProduct}>اضافه کردن محصول</button>

        </form>
    </div>
   
    </>
)
}
