import React, { useEffect } from 'react'
import './DetailModal.css'
import { createPortal } from 'react-dom'
import { RxCross1 } from "react-icons/rx";

export default function DetailModal({onHide,children}) {

  return createPortal (
    <div className='modal-Detail modal-parent active'>
    
      {children}

    </div>
   ,document.getElementById('modal-parents')
  )
}
