"use server"

import mongoose from "mongoose";
let isConnected = false
export const connectToDB = async() =>{
    mongoose.set('strictQuery',true)
    if(!process.env.MONGODB_URI) return console.log('MONGODBURI is missing')
    if(isConnected) return console.log('=> Using existing Mongo DB Uri')
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected=true
        console.log('MongoDB connected')
    }catch(error){
        console.log(error)
    }
}