import React from 'react'
import './EditModal.css'
import { RxCross1 } from "react-icons/rx";

export default function EditModal({children,onClose,onSubmit}) {
  return (
    <div className='modal-parent active'>
        <form action="" className='edit-Modal-form'>
            <div className='close-edit-btn'>
                <RxCross1 onClick={onClose}/>
            </div>
            <h1>اطلاعات جدید را وارد نمایید</h1>
            {
                children
            }
            <button  className='edit-form-submit' onClick={onSubmit}>تایید اطلاعات جدید</button>
        </form>
    </div>
)
}
