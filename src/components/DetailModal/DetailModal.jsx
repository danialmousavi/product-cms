import React, { useEffect } from 'react'
import './DetailModal.css'
import { createPortal } from 'react-dom'
import { RxCross1 } from "react-icons/rx";

export default function DetailModal({onHide}) {
  //this code is for closing the detail modal with escape button
//   useEffect(()=>{
//     const checkKey=(event)=>{
//         if(event.keyCode===27){
//           onHide();
//         }
//     }
//     window.addEventListener('keydown',checkKey)
// })
  return createPortal (
    <div className='modal-Detail modal-parent active'>

        <table className='cms-table'>
          
          <thead>
      <div className='close-cms-table'>
        <RxCross1 onClick={()=>onHide()}/>
      </div>
            <tr>
              <th>اسم</th>
              <th>رنگ</th>
              <th>محبوبیت</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>روغن لادن</td>
              <td>طلایی</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
    </div>
   ,document.getElementById('modal-parents')
  )
}
