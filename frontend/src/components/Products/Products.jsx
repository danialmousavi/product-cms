import React from 'react'
import './Products.css'
import Errorbox from '../Errorbox/Errorbox'
import AddNewProducts from '../AddNewProducts/AddNewProducts'
import ProductsTable from '../ProductsTable/ProductsTable'
export default function Products() {
  return (
    <>
    <AddNewProducts/>
    <ProductsTable/>
    <Errorbox msg='هیچ محصولی یافت نشد'/>
    </>
  )
}
