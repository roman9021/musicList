import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { AuthRouter } from './router/AuthRouter.js';

dotenv.config();

const PORT  = process.env.PORT || 8080;
const app = express();

app.use(cors())
app.use(express.json())
app.use('/Auth', AuthRouter)

app.listen(PORT,()=>{
    try{
        console.log(`server started is ${PORT}`)
    }
    catch(e){
        console.log(e)
    }
})