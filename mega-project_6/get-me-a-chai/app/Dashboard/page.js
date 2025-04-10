"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import { fetchuser, updateprofile } from '@/action/useraction'

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({})

  useEffect(() => {
    if (!session) {
      router.push("/login")
      return;
    }
    getData();
  }, [router, session])

  const getData = async () => {
    try {
      const user = await fetchuser(session.user.name);
      setForm(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    
    try {
      await updateprofile(e, session.user.name);
      alert("Profile updated");
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }

  return (
    <div className='text-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] min-h-[84.7vh]'>
      <div className="text-xl font-bold flex gap-5 mb-1 justify-center items-center">
        Welcome to your Dashboard
        <img src="chai-tea.svg" width={35} alt="Tea Icon" />
      </div>
      <form className='w-1/2 h-[75vh] m-auto border-2 border-gray-600 rounded-md' action={handleSubmit}>
        <div className='text-[12px] font-semibold m-3 grid gap-1'>
          Name:
          <input type="text" value={form.name || ""} name='name' onChange={handleChange} className='w-1/2 rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]' placeholder='Enter Name' />
        </div>
        <div className='text-[12px] font-semibold m-3 grid gap-1'>
          Email:
          <input type="text" value={form.email || ""} name='email' onChange={handleChange} className='w-1/2 rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]' placeholder='Enter Email' />
        </div>
        <div className='text-[12px] font-semibold m-3 grid gap-1'>
          Username:
          <input type="text" value={form.username || ""} name='username' onChange={handleChange} className='w-1/2 rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]' placeholder='Enter Username' />
        </div>
        <div className='text-[12px] font-semibold m-3 grid gap-1'>
          Profile Picture:
          <input type="text" value={form.profilepic || ""} name='profilepic' onChange={handleChange} className='w-1/2 rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]' placeholder='Enter Profile URL' />
        </div>
        <div className='text-[12px] font-semibold m-3 grid gap-1'>
          Cover Picture:
          <input type="text" value={form.coverpic || ""} name='coverpic' onChange={handleChange} className='w-1/2 rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]' placeholder='Enter Cover URL' />
        </div>
        <div className='text-[12px] font-semibold m-3 grid gap-1'>
          Razorpay ID:
          <input type="text" value={form.RId || ""} name='RId' onChange={handleChange} className='w-1/2 rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]' placeholder='Enter ID' />
        </div>
        <div className='text-[12px] font-semibold m-3 grid gap-1'>
          Razorpay Secret:
          <input type="text" value={form.Rsecret || ""} name='Rsecret' onChange={handleChange} className='w-1/2 rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]' placeholder='Enter Secret' />
        </div>
        <button type="submit" className="text-white bg-gradient-to-br w-[80%] mx-[70px] my-3 from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-1 text-center">
          Save
        </button>
      </form>
    </div>
  )
}

export default Page;
