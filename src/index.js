import mongoose from 'mongoose';
import { DB_Name } from './constants.js';
import express from 'express';
const App=express();
/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
        App.on("error",(Error) =>{
            console.log("Error",Error);
             throw error;
        });
        App.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROR:",error)
        throw error
    }
})();*/