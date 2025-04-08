import React, { useEffect, useState } from 'react'
import './Products.css'
import Errorbox from '../Errorbox/Errorbox'
import AddNewProducts from '../AddNewProducts/AddNewProducts'
import ProductsTable from '../ProductsTable/ProductsTable'
export default function Products() {
  const [products,setProducts]=useState([]);
  const getAllProducts=()=>{
    fetch('http://localhost:3000/api/products').then(res=>res.json()).then(data=>setProducts(data))       
   }
  return (
    <>
    <AddNewProducts getAllProducts={getAllProducts}/>
    <ProductsTable getAllProducts={getAllProducts} products={products}/>
    </>
  )
}
