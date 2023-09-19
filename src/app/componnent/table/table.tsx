'use client'
export default function Table (props:any) {
   return (
    <>
    <h2 className='p-2 my-1 text-xl'>Table</h2>
    <div className='container flex justify-between p-1 my-2 text-lg'>
    {[1,2,3].map((el,index:number) => {
       return <button
          key={index}
          className={props.table === index + 1 ? `bg-sky-500 p-3 rounded w-96` : `bg-sky-700 p-3 rounded w-96`}
          onClick={() => props.event(el)}>
          {el}
       </button>
     })}
   </div>
   </>
   )
}