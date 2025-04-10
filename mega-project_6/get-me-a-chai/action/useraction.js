"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/db/connectDb"



export const initiat = async (amount, to_username,paymentform) =>{
    await connectDB()

    let user = await User.findOne({username:to_username})
    const secreat = user.Rsecret
 
    var instance = new Razorpay({ key_id:user.RId, key_secret: secreat })
   
    
    let option = {
        amount:Number.parseInt(amount),
        currency:"INR"
    }
   
    let x = await instance.orders.create(option)
   
    await Payment.create({oid:x.id, amount:amount, to_user:to_username, name:paymentform.name, message:paymentform.message})
    
    return x; 
}

export const fetchuser = async (username) =>{
         await connectDB();
         let u = await User.findOne({username:username})
         let user = u.toObject({flattenObjectIds:true})
        
         return user
     }

   

    export const fetchpayment = async (username) =>{
        await connectDB();
        let p = await Payment.find({to_user:username, done:true}).sort({amount:-1}).lean()
       
        return p
    }

    export const updateprofile = async (data, oldusername) =>{
        await connectDB();
        let ndata = Object.fromEntries(data);

        if(oldusername !== ndata.username){
            let u = await User.findOne({username:ndata.oldusername})
            if(u){
                return {error:"username already exists"
                }
            }
        }
        await User.updateOne({email:ndata.email},ndata)
    }






