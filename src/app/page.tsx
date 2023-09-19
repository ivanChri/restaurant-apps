'use client'
import { useState,useEffect,useReducer } from "react"
import { MenuInterface } from "./utils/interface/menu.interface"
import { loadData,addData } from "./utils/storage/storage"
import MenuInput from "./componnent/menuComponnent/menuInput"
export default function Page () {
  const [menuData,setMenuData] = useState(():MenuInterface[] => loadData('menu'))
  useEffect(() => {
    addData('menu',menuData)
  },[menuData])
  const addMenu = (data:MenuInterface) => {
    setMenuData([
      ...menuData,
      {
        id:menuData.length + 1,
        name:data.name.trim(),
        price:data.price
      }
    ])
  }
  const deleteMenu = (id:number) => {
   const filter = menuData.filter((el) => el.id !== id)
   setMenuData(filter)
  }
  return (
    <section className='p-2 my-1'>
      <h1 className='text-3xl p-1 my-2'>Menu</h1>
      <MenuInput addData={addMenu}/>
      <div className='p-1 my-2'>
      {menuData.length ? menuData.map((el,index:number) => {
        return <div className='bg-slate-500 p-2 rounded text-lg my-2' key={index}>
            <h5 className='my-1 p-1'>Name: {el.name}</h5>
            <h5 className='my-1 p-1'>Price: {el.price}</h5>
            <button className='bg-red-500 p-2 rounded' onClick={() => deleteMenu(el.id)}>delete</button>
          </div>
      }) : 
       <div className='bg-slate-500 p-4 rounded text-2xl my-2  text-center'>
         <h3 className='m-auto'>No Menu</h3>
       </div>
      }
    </div>
    </section>
  )
}
