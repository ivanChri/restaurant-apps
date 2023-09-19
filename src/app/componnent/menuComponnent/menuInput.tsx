'use client'
import { MenuInterface } from "@/app/utils/interface/menu.interface"
import { useState } from "react"
export default function MenuInput (props:any) {
  const [data,setData] = useState<MenuInterface>({
    id:0,
    name:'',
    price:0
  })
  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }
  const add = () => {
    props.addData(data)
    setData({
       id:0,
       name:'',
       price:0
    })
  }
  return (
    <div className='p-2 my-1 text-lg'>
      <form>
        <input 
         type='text'
         placeholder='enter new menu here'
         name='name'
         onChange={handleChange}
         value={data.name}
         className='p-1 bg-slate-300 mr-1 rounded text-black focus:border-white'
        />
        <input 
         type='number'
         placeholder='enter menu price'
         name='price'
         onChange={handleChange} 
         value={data.price}
         className='p-1 bg-slate-300 mr-1 rounded text-black focus:border-white'
        />
      </form>
      <button 
       onClick={add}
       className='disabled:cursor-not-allowed disabled:bg-green-300 
        active:cursor-pointer bg-green-500
        mt-3 rounded p-2'
       disabled={data.name && data.price > 0 ? false : true}
       >add New Menu</button>
    </div>
  )
}