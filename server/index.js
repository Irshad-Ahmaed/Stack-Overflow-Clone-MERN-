import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js';

const app = express();
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

const PORT = process.env.PORT || 5005

app.get('/',(req,res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)

const Connection_URL = "mongodb+srv://Irshad:Irshad7865@stack-overflow-clone.xtgnlnb.mongodb.net/?retryWrites=true&w=majority&appName=stack-overflow-clone"

mongoose.connect(Connection_URL)
    .then(()=> app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}`)}))
    .catch((err)=> console.log(err.message))