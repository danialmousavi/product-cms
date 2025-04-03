import React, { useEffect, useState } from 'react'
import './ProductsTable.css'
import DeleteModal from '../DeleteModal/DeleteModal';
import DetailModal from '../DetailModal/DetailModal';
import EditModal from '../EditModal/EditModal';
import { IoPricetagOutline } from "react-icons/io5";

export default function ProductsTable() {
    //state for delete modal
    const [showDeleteModal,setShowDeleteModal]=useState(false);
    //state for detail modal
    const [showDetailModal,setShowDetailModal]=useState(false)
    //فانکشن برای اگر مدال حذف تایید شد 
    const [showEditModal,setShowEditModal]=useState(false)

    const deleteModalSubmitAction=()=>{
        setShowDeleteModal(false);
        console.log('محصول حذف شد');
        
    }
    //فانکشن برای اگر مدال حذف تایید نشد 
    const deleteModalCancelAction=()=>{
        setShowDeleteModal(false);
        console.log('محصول حذف نشد');
        
    }
    //فانکشن برای بستن مدال جزییات
   const CloseDetailModal=()=>{
    setShowDetailModal(false)
   }

   const updateProductInfos=()=>{
    console.log('products infos updated');
    
   }
  return (
    <>
        <table className='products-table'>
            <thead>
            <tr className='products-table-heading-tr'>
                <th>عکس</th>
                <th>اسم</th>
                <th>قیمت</th>
                <th>موجودی</th>
            </tr>
            </thead>
            <tbody>
            <tr className='products-table-tr'>
                <td>
                    <img src="/images/oil.png" alt="" className='products-table-img' />
                </td>
                <td>روغن لادن</td>
                <td>90000</td>
                <td>80</td>
                <td>
                    <button className='products-table-btn' onClick={()=>setShowDetailModal(true)}>جزییات</button>
                    <button className='products-table-btn' onClick={()=>setShowDeleteModal(true)}>حذف</button>
                    <button className='products-table-btn' onClick={()=>setShowEditModal(true)}>ویرایش</button>
                </td>
            </tr>
            </tbody>
            
        </table>
        {showDeleteModal&&<DeleteModal submitAction={deleteModalSubmitAction} cancelAction={deleteModalCancelAction}/>}
        {showDetailModal&&<DetailModal onHide={CloseDetailModal}/>}
        {showEditModal&&<EditModal onSubmit={updateProductInfos} onClose={()=>setShowEditModal(false)}>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='عنوان جدید را وارد' />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='عنوان جدید را وارد' />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='عنوان جدید را وارد' />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='عنوان جدید را وارد' />
            </div>
        </EditModal>}
    </>
)
}
