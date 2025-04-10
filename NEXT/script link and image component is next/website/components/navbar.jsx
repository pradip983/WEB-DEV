import React from 'react'
import Link from 'next/link'

const bar = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4'>
        <div className="logo font-bold">Facebook</div>
          <div className="flex gap-6">
            <Link href="/"><li>home</li></Link>
            <Link href="/about"><li>about</li></Link>
            <Link href="/contect"><li>contect</li></Link>
          </div>
    </nav>
  )
}

export default bar
