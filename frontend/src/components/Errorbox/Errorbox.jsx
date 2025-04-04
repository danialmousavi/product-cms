import React from 'react'
import'./Errorbox.css'
export default function Errorbox({msg}) {
  return (
    <>
        <div className='error-box'>
            <h1>{msg}</h1>
        </div>
    </>
)
}
