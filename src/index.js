import dotenv from "dotenv"
import connectDB from './db/index.js';
import {app} from './app.js'
//! Best Approach
// db -> index

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO DB connection failed", err);
})


dotenv.config({
    path: './env'
})



//! 1st approach
/*
import express from express;
import mongoose from "mongoose"
import { DB_NAME } from './constants';
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error)
    }
})()
*/