import React from 'react'


const footer = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4 absolute w-full bottom-0'>
    <div className="text-center">Copyright @ Facebook | All right reserved</div>
      <div className="flex gap-2 text-sm">
        <a href="/"><li className='text-xs'>home</li></a>
        <a href="/about"><li className='text-xs'>about</li></a>
        <a href="/contect"><li className='text-xs'>contect</li></a>
      </div>
</nav>

  )
}

export default footer
