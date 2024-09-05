import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js'

const app = express();
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
// app.use(cors())
app.use(cors(
    {
        origin: ["https://stack-overflow-clone-web.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

const PORT = process.env.PORT || 5005

app.get('/',(req,res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const Connection_URL = "mongodb+srv://Irshad:Irshad7865@stack-overflow-clone.xtgnlnb.mongodb.net/?retryWrites=true&w=majority&appName=stack-overflow-clone"
// const Connection_URL = "mongodb://api_mongo:27017/User"

mongoose.connect(Connection_URL)
    .then(()=> app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}`)}))
    .catch((err)=> console.log(err.message))