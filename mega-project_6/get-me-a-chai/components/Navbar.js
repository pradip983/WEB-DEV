"use client"
import React from 'react'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (


    <div className='w-full flex justify-between h-[50px] text-white  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] items-center p-4'>
      <Link href={"/"}>
      <div className='text-lg flex justify-center items-center gap-4'>Get ME A Chai <img src="chai-tea.svg" width={30} alt="" /></div></Link>
      <div className='flex gap-2 justify-center items-center'>
        {/* <ul className='flex gap-4'> 
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>project</li>
            </ul> */}

      

        {session && <><button onClick={()=>{setshowdropdown(!showdropdown)}} onBlur={()=>{setTimeout(() => {
          setshowdropdown(false)
        }, 300);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" w-[158px] m-[0.5rem] text-white bg-blue-700  font-medium rounded-lg text-sm pl-10 py-2.5  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative" type="button">Welcome<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>


          <div id="dropdown" className={`z-10 right-[184px] ${showdropdown?"":"hidden"}  absolute top-12   bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 `} >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

              <li>
                <Link href={"/Dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>

              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
              </li>

              <li>
                <Link href="" onClick={()=>{signOut()}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
              <li>
                <Link href={"/"}  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">home</Link>
              </li>
            </ul>
          </div></>}


        {session && <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 w-[130px] text-center m-2" onClick={() => { signOut() }}>logout</button>}
        <Link href={"/login"}>
          {!session && <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 w-[130px] text-center m-2">log-in</button>}
        </Link>
      </div>

    </div>


  )
}

export default Navbar




