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
  const [isShowEditModal,setIsShowEditModal]=useState(false);
  //function for fetch data
  const getAllComments=()=>{
    fetch('http://localhost:3000/api/comments').then(res=>res.json()).then(data=>setAllComments(data))
  }
  //fetch data
  useEffect(()=>{
    getAllComments();
  },[])

  //function for cancel deleting comment
    const cancelDeleteCommentAction=()=>{
      setIsShowDleteModal(false)
    }
    // function for deleting comments
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

    //edit comment
    const handleUpdateComment=()=>{
      fetch(`http://localhost:3000/api/comments/${commentId}`,{
        method:'PUT',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({ body: mainCommentBody })
      }).then(res=>res.json()).then(data=>{
        console.log(data);
        setIsShowEditModal(false);
        getAllComments();
      })
    }
  return (
    <>
    <div className='cms-main'>
      <h1 className='cms-title'>لیست کامنت ها</h1>
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
              <button onClick={()=>{
                setIsShowEditModal(true);
                setMainCommentBody(comment.body);
                setCommentId(comment.id)
              }} >ویرایش</button>
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
    {isShowEditModal&&(
      <DetailModal>
        <div className='text-modal'>
            <textarea className='text-area-edit-comment' name="" id="" value={mainCommentBody} onChange={(e)=>setMainCommentBody(e.target.value)}>
              
            </textarea>
          <button className='text-modal-close-btn' onClick={handleUpdateComment}>آپدیت اطلاعات جدید</button>  

        </div>
      </DetailModal>
    )}
    </>
  )
}
