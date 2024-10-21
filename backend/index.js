import express from 'express'
import cors from 'cors'
import { PORT, mongoDB } from './config.js'
import mongoose from 'mongoose'
import router from './routes/BookRoute.js'
import { EventEmitter } from 'events';

EventEmitter.defaultMaxListeners = 15;  // Set max listeners to a higher number



const app = express()
app.use(express.json())

app.use(cors())
app.use('/books', router)

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