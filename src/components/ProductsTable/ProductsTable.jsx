import React from 'react'
import './ProductsTable.css'
export default function ProductsTable() {
  return (
    <>
        <table className='products-table'>
            <tr className='products-table-heading-tr'>
                <th>عکس</th>
                <th>اسم</th>
                <th>قیمت</th>
                <th>موجودی</th>
            </tr>
            <tr className='products-table-tr'>
                <td>
                    <img src="/images/oil.png" alt="" className='products-table-img' />
                </td>
                <td>روغن لادن</td>
                <td>90000</td>
                <td>80</td>
                <td>
                    <button className='products-table-btn'>جزییات</button>
                    <button className='products-table-btn'>حذف</button>
                    <button className='products-table-btn'>ویرایش</button>
                </td>
            </tr>
            
        </table>
    </>
)
}
