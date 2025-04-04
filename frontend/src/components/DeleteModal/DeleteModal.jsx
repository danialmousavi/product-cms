import React from 'react'
import './DeleteModal.css'
import { createPortal } from 'react-dom';
export default function DeleteModal({cancelAction,submitAction}) {
  return createPortal(
      <>
    <div className={`modal-parent active`}>
        <div className='delete-modal'>
            <h1>آیا از حذف اطمینان دارید؟</h1>
            <div className='delete-modal-btns'>
                <button className='delete-modal-btn delete-modal-accept' onClick={()=>submitAction()}>بله</button>
                <button className='delete-modal-btn delete-modal-reject' onClick={()=>cancelAction()}>خیر</button>
            </div>
        </div>
    </div>
    </>,
    document.getElementById('modal-parents')
)
}
