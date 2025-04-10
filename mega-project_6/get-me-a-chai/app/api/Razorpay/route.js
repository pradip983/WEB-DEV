   import { NextResponse } from "next/server";
   import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
   import Payment from "@/models/Payment";
   import User from "@/models/User";
   import connectDB from "@/db/connectDb";


   export const POST = async (req) =>{
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    let p = await Payment.findOne({oid:body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success:false, message:"Order Id not found"})
    }

  let user = await User.findOne({username:p.to_user})
  const secreat = user.Rsecret


    let xx = validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,secreat)
    if(xx){
        const upadatedPayment = await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:"true"},{new:true})
        return NextResponse.redirect(`http://localhost:3000/${upadatedPayment.to_user}`)
    }
    else{
        return NextResponse.json({success:false, message:"payment verification failed"})
    }
   }

