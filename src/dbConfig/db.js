
import mongoose from "mongoose"
import { DB_NAME } from "../constants/constant.js";


const dbConnect=async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Mongodb Successfully Connected at Host:${connectionInstance.connection.host}`);
    } catch (error) {
     console.log(`Error in Connecting Mongodb:${error}`);
    }
}

export default dbConnect;