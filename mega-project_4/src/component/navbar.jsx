import React from 'react'

const navbar = () => {
  return (
   <nav className='flex justify-between bg-slate-700 text-white p-[15px] '>
    <div className="logo">
        <span className="font-bold text-xl flex items-center gap-2"><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/task-manager-5320178-4452647.png?f=webp&w=256" alt="" width={35}/>Task-Manager</span>
    </div>
    <ul className='flex gap-7'>
        <li className='cursor-pointer hover:underline'>home</li>
        <li className='cursor-pointer hover:underline'>Tasks</li>
        <li className='cursor-pointer hover:underline'>contact</li>
        <li className='cursor-pointer hover:underline'>about</li>
    </ul>
   </nav>
  )
}

export default navbar
