import express, { request, response } from 'express'
import cors from 'cors'
import { PORT, mongoDB } from './config.js'
import mongoose from 'mongoose'


const app = express()
app.use(express.json())

app.post('/books', async (req,res)=>{
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message:  'All feilds requires'
            })
        }    
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await book.create(newBook)

        return res.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
        
    }
})

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