import express from 'express'
import mongoose, { Mongoose } from 'mongoose'
import cors from 'cors'
import adminRouter from  './routes/admin'
import userRouter from  './routes/user'


const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.use('/', express.static('client'))
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!

const options=
mongoose.connect('mongodb://localhost:27017/courses');

app.listen(8080, () => console.log('Server running on port 8080'));
