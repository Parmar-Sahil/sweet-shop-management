import express from "express"
import cors from 'cors'
import 'dotenv/config'
import sweetRoutes from './routes/sweetRoutes.js';

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

app.use('/sweets', sweetRoutes);



app.listen(PORT, ()=>{
    console.log('app is running port ', PORT)
})




