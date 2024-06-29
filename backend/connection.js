import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const mongodbURL = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(mongodbURL).then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log("error occured while connecting to database: ", err);
});

export default mongoose;