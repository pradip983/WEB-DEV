"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { fetchpayment, initiat } from '@/action/useraction'
import { fetchuser } from '@/action/useraction'
import { useEffect } from 'react'


const PaymentPage = ({ username }) => {
useEffect(() => {
  Getdata();
}, [])


  const [paymentForm, setPaymentForm] = useState({
    name: '',
    message: '',
    amount: ''
  });
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setpayments] = useState([])


  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  }

  const Getdata = async () => {
    let u = await fetchuser(username)
    
    setcurrentUser(u)
    let dbpayment = await fetchpayment(username)
    
    setpayments(dbpayment)
  }


  const pay = async (amount) => {
    try {
      let response = await initiat(amount, username, paymentForm);
      let orderId = response.id;

      const options = {
        "key_id": currentUser.RId,
        "amount": amount * 100, // Amount in paise
        "currency": "INR",
        "name": "Get me a Chai",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId,
        "callback_url": "http://localhost:3000/api/Razorpay",
        "prefill": {
          "name": paymentForm.name || "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };

      if (window.Razorpay) {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Razorpay library is not loaded.");
      }
    } catch (error) {
      console.error("Payment initiation failed: ", error);
    }
  }

  return (
    <>

      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='text-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] min-h-[84.7vh]'>
        <div className='relative w-full h-[30vh] bg-slate-400'>
          <img src={currentUser.coverpic} className='object-fill w-full h-[30vh]' alt="" />
          <div className='h-24 w-24 rounded-full bg-slate-600 absolute bottom-[0] left-[720px]'>
            <img src={currentUser.profilepic} className='object-fill h-24 w-24 rounded-full border-2 border-gray-700' alt="" />
          </div>
        </div>
        <div className='font-bold text-center w-full'>@{username}</div>
        <div className='font-thin text-[13px] text-gray-300 text-center w-full'>let`s help {username} for get a Chai</div>
        <div className='font-thin text-[13px] text-gray-300 text-center w-full'>{payments.length} payment.  ₹{payments.reduce((a,b) => a+b.amount, 0)/100}raised</div>
        <div className='flex gap-5 m-auto w-full justify-center items-center p-5'>
          <div className='w-1/3 h-[35vh] max-h-[35vh] overflow-y-hidden bg-slate-900 rounded-md'>
            <div className='text-[13px] p-3'>Supporters</div>
            {payments.length === 0 && <div className='text-[11px] flex gap-2 mx-5  '> No payments yet</div>}
            {payments.map((p, i) => {
              return <div key={i} className='flex gap-2 mx-5 my-3 items-center'>
              <div><img src="profile.png" width={20} alt="" /></div>
              <div className='text-[11px]'>{p.name} donated <span className='font-bold'>₹{p.amount/100}</span> with message "{p.message}"</div>
            </div>
            })}
          </div>
          <div className='w-1/3 h-[35vh] bg-slate-900 rounded-md'>
            <div className='text-[13px] p-3'>Make a payment</div>
            <div className='grid gap-3 mx-2 my-2'>
              <div>
                <input
                  type="text"
                  className='w-full rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]'
                  onChange={handleChange}
                  value={paymentForm.name}
                  name='name'
                  placeholder='Enter Name'
                />
              </div>
              <div>
                <input
                  type="text"
                  className='w-full rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]'
                  onChange={handleChange}
                  value={paymentForm.message}
                  name='message'
                  placeholder='Enter Message'
                />
              </div>
              <div>
                <input
                  type="number"
                  className='w-full rounded-md px-3 bg-transparent text-[12px] border-2 border-gray-600 py-[1px]'
                  onChange={handleChange}
                  value={paymentForm.amount}
                  name='amount'
                  placeholder='Enter Payment'
                />
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-1 text-center disabled:bg-slate-700 disabled:from-purple-900"  disabled={paymentForm.name?.length<3 || paymentForm.message?.length<4 || paymentForm.amount?.length<1}
                onClick={() => pay(parseFloat(paymentForm.amount*100))} // Default to 1000 if amount is invalid
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage

