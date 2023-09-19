import Link from "next/link"
export default function Navbar () {
  return (
    <nav className='flex justify-around items-center p-4 bg-slate-800 mb-5'>
      <Link href='/' className='text-white text-lg p-2 hover:text-green-300'>Menu</Link>
      <Link href='/order' className='text-white text-lg hover:text-green-300 p-2'>Order</Link>
      <Link href='/kitchen' className='text-white text-lg hover:text-green-300 p-2'>Kitchen</Link>
      <Link href='/cashier' className='text-white text-lg hover:text-green-300 p-2'>Cashier</Link>
    </nav>
  )
}