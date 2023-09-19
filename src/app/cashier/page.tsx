'use client'
import { useState,useEffect } from "react"
import { loadData,addData } from "../utils/storage/storage"
import Table from "../componnent/table/table"
import { OrderInterface } from "../utils/interface/order.interface"
export default function Page () {
  const [ordersData,setOrdersData] = useState(():OrderInterface[] => loadData('order'))
  const [detailOrderData,setDetailOrderData] = useState<OrderInterface[]>([])
  const [table,setTable] = useState<number>(1)
  useEffect(() => {
    addData('order',ordersData)
    getDetailOrder(table)
  },[ordersData,table])
  const getDetailOrder = (tableId:number) => {
    const filter = ordersData.filter((el) => el.table === tableId)
    setDetailOrderData(filter)
  }
  const deleteOrder = (tableId:number) => {
    const filter = ordersData.filter((el) => el.table !== tableId)
    setOrdersData(filter)
  }
  console.log(detailOrderData)
  return (
    <section className='p-2 my-1'>
      <h1 className='text-3xl p-1 my-2'>Cashier</h1>
      <Table table={table} event={setTable}/>
      <div className='p-1 my-2'>
        {detailOrderData.length ?
          <>
           {detailOrderData.map((el,index) => {
           return <div key={index} className='bg-slate-500 p-2 rounded text-lg my-2'>
             <h3>Menu: {el.menu.name}</h3>
             <h3>Price Per Item: {el.menu.price}</h3>
             <h3>Quantity: {el.total}</h3>
           </div>
          })}
          <button
           className='bg-red-500 w-60 p-2 my-2 rounded text-lg'
           onClick={() => deleteOrder(table)}
          >Clear</button>
          </>
        : 
       <div className='bg-slate-500 p-4 rounded text-2xl my-2 w-full text-center'>
         <h3 className='m-auto'>No Orders On Table {table}</h3>
       </div>
        }
      </div>
    </section>
  )
}