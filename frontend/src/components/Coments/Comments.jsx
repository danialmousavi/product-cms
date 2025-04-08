import React, { useEffect, useState } from 'react'
import './Comments.css'
import Errorbox from '../Errorbox/Errorbox'
import DetailModal from '../DetailModal/DetailModal';
import DeleteModal from '../DeleteModal/DeleteModal';
export default function Comments() {
  const [allComments,setAllComments]=useState([]);
  const [isShowCommentModal,setIsShowCommentModal]=useState(false);
  const [mainCommentBody,setMainCommentBody]=useState('');
  const [isShowDeletModal,setIsShowDleteModal]=useState(false);
  const [commentId,setCommentId]=useState(null);

  const getAllComments=()=>{
    fetch('http://localhost:3000/api/comments').then(res=>res.json()).then(data=>setAllComments(data))
  }
  useEffect(()=>{
    getAllComments();
  },[])

    const cancelDeleteCommentAction=()=>{
      setIsShowDleteModal(false)
    }
    const submitDleteCommentAction=()=>{
      fetch(`http://localhost:3000/api/comments/${commentId}`,{
        method:"DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        getAllComments();
      }
      )
      setIsShowDleteModal(false)
      
      
    }
  return (
    <>
    <div className='cms-main'>
    {allComments.length?(
      <>
            <table className='cms-table'>
        <thead>
          <tr>
            <th>اسم کاربر</th>
            <th>محصول</th>
            <th>کامنت</th>
            <th>تاریخ</th>
            <th>ساعت</th>
          </tr>
        </thead>
        <tbody>
          {allComments.map(comment=>(
          <tr key={comment.id}>
            <td>{comment.userID}</td>
            <td>{comment.productID}</td>
            <td>
              <button onClick={()=>{
                setIsShowCommentModal(true);
                setMainCommentBody(comment.body)
              }}>مشاهده</button>
            </td>
            <td>{comment.date}</td>
            <td>{comment.hour}</td> 
            <td>
              <button onClick={()=>{
                setIsShowDleteModal(true);
                setCommentId(comment.id)
              }}>حذف</button>
              <button >ویرایش</button>
              <button >پاسخ</button>
              <button >تایید</button>
            </td>

          </tr>
          ))}
        </tbody>
      </table>
      </>
    ):(    <Errorbox msg='هیچ کامنتی یافت نشد'/>)}

    </div>
    {isShowCommentModal&&(
      <DetailModal>
        <div className='text-modal'>
        <p >
            {mainCommentBody}
          </p>  
          <button className='text-modal-close-btn' onClick={()=>setIsShowCommentModal(false)}>بستن</button>  

        </div>
      </DetailModal>
    )}
    {isShowDeletModal&&(
      <DeleteModal cancelAction={cancelDeleteCommentAction} submitAction={submitDleteCommentAction}/>
    )}
    </>
  )
}
