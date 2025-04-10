import mongoose from "mongoose";
const { Schema, model } = mongoose

const PaymentSchema  = new Schema({
    name: { type: String, required:true},
    to_user: { type: String, required:true},
    oid: { type: String, required:true},
    message: { type: String},
    amount: { type: Number, required:true},
    // createdAt: { type: data, default:data.now},
    // updatedAt: { type: data, default:data.now},
    done:{type: Boolean, defaul:false},
});


export default mongoose.models.Payment || model("Payment", PaymentSchema);;