import React, { useEffect, useState } from 'react'
import './ProductsTable.css'
import DeleteModal from '../DeleteModal/DeleteModal';
import DetailModal from '../DetailModal/DetailModal';
import EditModal from '../EditModal/EditModal';
import { IoPricetagOutline } from "react-icons/io5";
import Errorbox from '../Errorbox/Errorbox';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { RxCross1, RxOpenInNewWindow } from 'react-icons/rx';
export default function ProductsTable() {
    //state for delete modal
    const [showDeleteModal,setShowDeleteModal]=useState(false);
    //state for detail modal
    const [showDetailModal,setShowDetailModal]=useState(false)
    //فانکشن برای اگر مدال حذف تایید شد 
    const [showEditModal,setShowEditModal]=useState(false)

    const [products,setProducts]=useState([]);
    //ذخیره آیدی محصول
    const [productId,setProductId]=useState(null);

    const [mainProductInfos,setMainProductInfos]=useState({});

    const notify = () => toast("محصول با موفقیت حذف شد!");

const [newtitle,setNewtitle]=useState('')
const [newprice,setNewPrice]=useState('')    
const [newCount,setNewCount]=useState('')
const [newImg,setNewImg]=useState('')
const [newPopularity,setNewPopularity]=useState('')
const [newSale,setNewSale]=useState('')
const [newColors,setNewColors]=useState('')

    //fetch data from backend
   const getAllProducts=()=>{
    fetch('http://localhost:3000/api/products').then(res=>res.json()).then(data=>setProducts(data))       
   }
     useEffect(()=>{
        getAllProducts();
     },[])

    //حذف محصول بعد از دکمه تایید مدال حذف

    const deleteModalSubmitAction = () => {
        setShowDeleteModal(false);
        fetch(`http://localhost:3000/api/products/${productId}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                // Check if the response has content
                return res.text().then(text => (text ? JSON.parse(text) : {}));
            })
            .then(result => {
                console.log(result);
                getAllProducts();
                notify();
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
        console.log('محصول حذف شد');
    };
    //فانکشن برای اگر مدال حذف تایید نشد 
    const deleteModalCancelAction=()=>{
        setShowDeleteModal(false);
        console.log('محصول حذف نشد');
        
    }
    //فانکشن برای بستن مدال جزییات
   const CloseDetailModal=()=>{
    setShowDetailModal(false)
   }

   const updateProductInfos=(e)=>{
    e.preventDefault();
    console.log('products infos updated');
    const newProductInfos={
        title:newtitle,
        price: newprice,
        count: newCount,
        img: newImg,
        popularity: newPopularity,
        sale:newSale,
        colors:newColors
    }
    fetch(`http://localhost:3000/api/products/${productId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(newProductInfos)
    }).then(res=>res.json())
    .then(result=>{
        console.log(result);
        setShowEditModal(false);
        getAllProducts();
    })
   }

   
     
  return (
    <>
        <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        toastStyle={{ backgroundColor: 'green', color: 'white' }} // Green background and white text
        progressStyle={{ backgroundColor: 'red' }} // Red progress bar
        />
        {products.length>0?(
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
                {products.map(product=>(
                    <tr className='products-table-tr' key={product.id}>
                        <td>
                            <img src={product.img} alt="" className='products-table-img' />
                            </td>
                            <td>{product.title}</td>
                            <td>{product.price} تومان</td>
                            <td>{product.count}</td>
                            <td>
                                <button className='products-table-btn' onClick={()=>{
                                    setShowDetailModal(true);
                                    setMainProductInfos(product)
                                }}>جزییات</button>
                                <button className='products-table-btn' onClick={()=>{
                                    setShowDeleteModal(true)
                                    setProductId(product.id)
                                    }}>حذف</button>
                                <button className='products-table-btn' onClick={()=>{
                                    setProductId(product.id)
                                    setShowEditModal(true);
                                    setNewtitle(product.title);
                                    setNewPrice(product.price);
                                    setNewCount(product.count);
                                    setNewImg(product.img);
                                    setNewPopularity(product.popularity);
                                    setNewSale(product.sale);
                                    setNewColors(product.colors)
                                }}>ویرایش</button>
                            </td>
                            
                    </tr>
                ))}
            </tbody>
            
        </table>
        ):(
            <Errorbox msg='هیچ محصولی یافت نشد'/>
        )}
        {showDeleteModal&&<DeleteModal submitAction={deleteModalSubmitAction} cancelAction={deleteModalCancelAction}/>}
        {showDetailModal&&<DetailModal >
        <table className='cms-table'>
          <thead>
                <div className='close-cms-table' onClick={CloseDetailModal}>
                <RxCross1 />
                </div>
                  <tr>
                    <th>اسم</th>
                    <th>تعداد رنگ</th>
                    <th>محبوبیت</th> 
                    <th>میزان فروش</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{mainProductInfos.title}</td>
                    <td>{mainProductInfos.colors}</td>
                    <td>{mainProductInfos.popularity}</td>
                    <td>{mainProductInfos.sale.toLocaleString()}</td>
                  </tr>
                </tbody>
          </table>    
        </DetailModal>}
        {showEditModal&&<EditModal onSubmit={updateProductInfos} onClose={()=>setShowEditModal(false)}>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='عنوان جدید را وارد' value={newtitle} onChange={(e)=>setNewtitle(e.target.value)} />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='مبلغ جدید را وارد' value={newprice}  onChange={(e)=>setNewPrice(e.target.value)} />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='موجودی  جدید محصول  را وارد' value={newCount} onChange={(e)=>setNewCount(e.target.value)}   />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='آدرس کاور جدید محصول را وارد' value={newImg}  onChange={(e)=>setNewImg(e.target.value)}  />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder=' میزان محبوبیت جدید محصول را وارد' value={newPopularity}  onChange={(e)=>setNewPopularity(e.target.value)}  />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='میزان فروش  جدید محصول را وارد' value={newSale}  onChange={(e)=>setNewSale(e.target.value)}  />
            </div>
            <div className='edit-products-form-group'>
                <span>
                    <IoPricetagOutline/>
                </span>
                <input type="text" className='edit-product-input' placeholder='تعداد رنگ بندی  جدید محصول را وارد' value={newColors}  onChange={(e)=>setNewColors(e.target.value)} />
            </div>
        </EditModal>}
    </>
)
}
