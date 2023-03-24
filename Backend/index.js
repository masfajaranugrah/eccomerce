import express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from "cookie-parser";

import bodyParser from 'body-parser'; //post body handler

import tourRoute from './routes/tours.js'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOption = {
    origin:true,
    Credential:true
}

// database connected 
mongoose.set("strictQuery", false)
const connect  = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser : true,
            useUnifiedTopology: true
        })

        console.log('mongodb databse connect')
    } catch (error) {
        console.log('mongodb databse crashe')
    }
}

// for testing 
app.get('/', (req, res) => {
    res.send("api is working")
})

// middleware
app.use(express.json())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors(corsOption))
app.use(cookieParser())
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)             
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)


app.listen(port, () => {
    connect()
    console.log(`server listening on port http://localhost:${port}`)
})