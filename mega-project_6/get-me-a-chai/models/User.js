import mongoose from "mongoose";
const { Schema, model } = mongoose

const UserSchema  = new Schema({
    email: { type: String, required:true},
    name: { type: String},
    username: { type: String, required:true},
    profilepic: { type: String},
    coverpic: { type: String},
    RId:{type:String},
    Rsecret:{type:String},
     createdAt: { type: Data, default:Data.now},
     updatedAt: { type: Data, default:Data.now}
});


export default mongoose.models.User || model("User", UserSchema);;