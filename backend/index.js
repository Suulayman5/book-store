import express from 'express'
import cors from 'cors'
import { PORT, mongoDB } from './config.js'
import mongoose from 'mongoose'


const app = express()

mongoose.connect(mongoDB)
 .then(()=>{
    console.log('connected to database');
    app.listen(PORT, ()=>{
        console.log(`port connected on ${PORT}`);
    })
 })
 .catch((error)=>{
    console.log(error);
    
 })