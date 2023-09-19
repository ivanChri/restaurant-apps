'use client'
import { MenuInterface } from "@/app/utils/interface/menu.interface"
import { loadData } from "@/app/utils/storage/storage"
import { useState,useEffect } from "react"
export default function OrderMenu (props:any) {
  const [menuData,setMenuData] = useState<MenuInterface[]>([])
  useEffect(() => {
    setMenuData(loadData('menu'))
  },[])
  return (
    <div className='container p-1 my-2'>
      <h2 className='p-2 my-1 text-xl'>Menu</h2>
      <div className='p-2 my-2 flex justify-around text-lg flex-wrap'>
      {menuData.length ? menuData.map((el:MenuInterface,index:number) => {
       return <button
          key={index}
          className={props.menuId === el.id ? `bg-sky-500 p-3 rounded w-96` : `bg-sky-700 p-3 rounded w-96`}
          onClick={() => props.event(el)}>
          {el.name}
       </button>
     }) : 
     <div className='bg-slate-500 p-4 rounded text-2xl my-2 w-full text-center'>
       <h3 className='m-auto'>No Menu</h3>
     </div>
     }
      </div>
    </div>
  )
}