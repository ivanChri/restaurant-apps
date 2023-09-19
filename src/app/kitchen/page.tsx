'use client'
import { OrderInterface } from "../utils/interface/order.interface"
import { useState,useEffect } from "react"
import { loadData } from "../utils/storage/storage"
export default function Page () {
  const [ordersData,setOrdersData] = useState<OrderInterface[]>([])
  useEffect(() => {
    setOrdersData(loadData('order'))
  },[])
  return (
    <section className='p-2 my-1'>
      <h1 className='text-3xl p-1 my-2'>Kitchen</h1>
      <div className='p-1 my-2'>
      {ordersData.length ? ordersData.map((el,index) => {
        return <div key={index} className='bg-slate-500 p-2 rounded text-lg my-2'>
          <h1>Table : {el.table}</h1>
          <h1>Menu: {el.menu.name}</h1>
          <h1>Total: {el.total}</h1>
        </div>
      }) : 
      <div className='bg-slate-500 p-4 rounded text-2xl my-2  text-center'>
       <h3 className='m-auto'>No Order</h3>
      </div>
      }
      </div>
    </section>
  )
}