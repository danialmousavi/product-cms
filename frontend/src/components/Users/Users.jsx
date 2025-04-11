import React, { useEffect, useState } from 'react'
import Errorbox from '../Errorbox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import { ImCross } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import './Users.css'
import DetailModal from '../DetailModal/DetailModal';
import { RxCross1 } from 'react-icons/rx';
export default function Users() {
  const [allUsers,setAllUsers]=useState([]);
  const [showDeleteModal,setShowDeleteMOdal]=useState(false);
  const [userId,setUserId]=useState(null);
  const [showEditUser,SetShowEditUser]=useState(false);
  const [IsShowdetailModal,setIsShowDetailModal]=useState(false);
  const [mainProductInfo,setMainProductInfo]=useState(null)

  const [newFirstName,setNewFirstName]=useState('');
  const [newLastName,setNewLastName]=useState('');
  const [newUserName,setNewUserName]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [newPhone,setNewPhone]=useState('');
  const [newCity,setNewCity]=useState('');
  const [newEmail,setNewEmail]=useState('');
  const [newAdress,setNewAdress]=useState('');
  const [newScore,setNewScore]=useState('');
  const [newBuy,setNewBuy]=useState('');
  const getAllUsers=()=>{
    fetch('http://localhost:3000/api/users').then(res=>res.json()).then(data=>setAllUsers(data))

  }
  useEffect(()=>{
    getAllUsers();
  },[])
  //deleteing user
  const cancelDeleteUser=()=>setShowDeleteMOdal(false);
  const submitDleteUser=()=>{
    fetch(`http://localhost:3000/api/users/${userId}`,{
      method:"DELETE"
    }).then(res=>res.json()).then(data=>{
      setShowDeleteMOdal(false)      
      getAllUsers()
    })
  }
  
  //updating user
  const closeUserEdit=()=>{
    SetShowEditUser(false)
  }
  const newUserDatas={
    firsname:newFirstName,
    lastname: newLastName,
    username: newUserName,
    password: newPassword,
    phone: newPhone,
    city: newCity,
    email: newEmail,
    address: newAdress,
    score: newScore,
    buy: newBuy
  }
  const updateEditUser=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:3000/api/users/${userId}`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newUserDatas)
    }).then(res=>res.json()).then(data=>{
      console.log(data);
      SetShowEditUser(false);
      getAllUsers();      
    })
  }

  //detail modal
  const CloseDetailModal=()=>setIsShowDetailModal(false)
  return (
    <>
    <div className='cms-main'>
      <h1 className='cms-title'>لیست کاربران</h1>
      {allUsers.length?(
         <table className='cms-table'>
         <thead>
           <tr>
             <th>نام </th>
             <th>نام خانوادگی</th>
             <th>ایمیل</th>
             <th>شماره تماس</th>
             <th>شهر</th>
   
           </tr>
         </thead>
         <tbody>
           {allUsers.map(user=>(
           <tr key={user.id}>
             <td>{user.firstname}</td>
             <td>{user.lastname}</td>
             <td>{user.email}</td>
             <td>{user.phone}</td>
             <td>{user.city}</td>
             <td>
               <button onClick={()=>{
                setShowDeleteMOdal(true);
                setUserId(user.id)
               }}>حذف</button>
               <button onClick={()=>{
                setIsShowDetailModal(true);
                setMainProductInfo(user);
               }}>جزییات</button>
               <button onClick={()=>{
                setNewFirstName(user.firstname);
                setNewLastName(user.lastname);
                setNewUserName(user.username);
                setNewPassword(user.password);
                setNewPhone(user.phone);
                setNewEmail(user.email);
                setNewCity(user.city);
                setNewAdress(user.address);
                setNewScore(user.score);
                setNewBuy(user.buy);
                SetShowEditUser(true);
                setUserId(user.id);
               }}>ویرایش</button>
             </td>
           </tr>
           ))}
         </tbody>
        </table>
      ):(
      <Errorbox msg='هیچ کاربری یافت نشد'/>

      )}
    
    </div>
    {showDeleteModal&&(
      <DeleteModal cancelAction={cancelDeleteUser} submitAction={submitDleteUser}/>
    )}

    {IsShowdetailModal&&(
      <DetailModal>
          <table className='cms-table'>
      
            <thead>
            <div className='close-cms-table' onClick={CloseDetailModal}>
                <RxCross1/>
            </div>
              <tr>
                <th>نام کاربری</th>
                <th>آدرس</th>
                <th>امتیاز</th>
                <th>میزان خرید</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProductInfo.username}</td>
                <td>{mainProductInfo.address}</td>
                <td>{mainProductInfo.score}</td>
                <td>{mainProductInfo.buy}</td>
              </tr>
            </tbody>
          </table>
      </DetailModal>
    )}



    {showEditUser&&(
      <EditModal onSubmit={updateEditUser} onClose={closeUserEdit}>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید نام کاربر را وارد کنید'value={newFirstName} onChange={(e)=>setNewFirstName(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید نام خانوادگی کاربر را وارد کنید'value={newLastName} onChange={(e)=>setNewLastName(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید نام کاربری را وارد کنید' value={newUserName} onChange={(e)=>setNewUserName(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید پسورد را وارد کنید' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدی شماره کاربر را وارد کنید' value={newPhone} onChange={(e)=>setNewPassword(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید شهر کاربر را وارد کنید' value={newCity} onChange={(e)=>setNewCity(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید ایمیل کاربر را وارد کنید' value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید آدرس کاربر را وارد کنید' value={newAdress} onChange={(e)=>setNewAdress(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید امتیاز کاربر را وارد کنید'value={newScore} onChange={(e)=>setNewScore(e.target.value)}/>
          </div>
          <div className='edit-user-info-input-group'>
            <span>
              <FaUser/>
            </span>
            <input type="text" className='edit-user-info-input' placeholder='مقدار جدید میزان خرید کاربر را وارد کنید' value={newBuy} onChange={(e)=>setNewBuy(e.target.value)}/>
          </div>
      </EditModal>
    )}
    </>

  )
}
