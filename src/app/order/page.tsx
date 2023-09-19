'use client'
import { OrderInterface } from "../utils/interface/order.interface"
import { MenuInterface } from "../utils/interface/menu.interface"
import { addData, loadData } from "../utils/storage/storage"
import { useState,useEffect } from "react"
import OrderMenu from "../componnent/orderComponnent/orderMenu"
import Table from "../componnent/table/table"
export default function Page () {
  const [ordersData,setOrdersData] = useState(():OrderInterface[] => loadData('order'))
  const [table,setTable] = useState<number>(0)
  const [total,setTotal] = useState<number>(0)
  const [menu,setMenu] = useState<MenuInterface>({
    id:0,
    name:'',
    price:0
  })
  useEffect(() => {
    addData('order',ordersData)
    return () => {
      setTable(0)
      setTotal(0)
      setMenu({
        id:0,
        name:'',
        price:0 
      })
    }
  },[ordersData])
  const handleTotalChange = (e:any) => {
    setTotal(e.target.value)
  }
  const addOrder = () => {
    setOrdersData([
      ...ordersData,
      {
        id:ordersData.length + 1,
        menu,
        total,
        table
      }
    ])
  }
  return (
    <section className='p-2 my-1 text-lg'>
      <h1 className='text-3xl p-1 my-2'>Order</h1>
      <Table table={table} event={setTable}/>
      <OrderMenu menuId={menu.id} event={setMenu}/>
      <div className='p-2 my-1 flex justify-evenly w-80'>
        <h3 className='p-1'>Total: </h3>
        <input 
         type='number'
         placeholder='enter total'
         name='total' 
         onChange={handleTotalChange}
         value={total}
         className='p-1 bg-slate-300 mr-1 rounded text-black focus:border-white'
        />
      </div>
      <div className='p-2 my-1'>
        <button onClick={addOrder} className='disabled:cursor-not-allowed 
         disabled:bg-green-300 
         active:cursor-pointer 
         bg-green-500 my-3 rounded p-3 w-60'
         disabled={total > 0 && table && menu ? false : true} 
        >
        add order</button>
      </div>
    </section>
  )
}