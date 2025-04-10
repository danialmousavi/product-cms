import React, { useEffect, useState } from 'react'
import Errorbox from '../Errorbox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal';

export default function Users() {
  const [allUsers,setAllUsers]=useState([]);
  const [showDeleteModal,setShowDeleteMOdal]=useState(false);
  const [userId,setUserId]=useState(null);
  const getAllUsers=()=>{
    fetch('http://localhost:3000/api/users').then(res=>res.json()).then(data=>setAllUsers(data))

  }
  useEffect(()=>{
    getAllUsers();
  },[])
  const cancelDeleteUser=()=>setShowDeleteMOdal(false);
  const submitDleteUser=()=>{
    fetch(`http://localhost:3000/api/users/${userId}`,{
      method:"DELETE"
    }).then(res=>res.json()).then(data=>{
      setShowDeleteMOdal(false)      
      getAllUsers()
    })
  }
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
               <button>جزییات</button>
               <button>ویرایش</button>
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
    </>
  )
}
