import express, { request, response } from 'express'
import cors from 'cors'
import { PORT, mongoDB } from './config.js'
import mongoose from 'mongoose'
import BookRoute from '/routes/BookRoute.js'


const app = express()
app.use(express.json())

app.use('/books', BookRoute)

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