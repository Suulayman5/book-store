import express from 'express'
import cors from 'cors'
import { PORT } from './config.js'


const app = express()


app.listen(PORT, ()=>{
    console.log('port connected');
    
})