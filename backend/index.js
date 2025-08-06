import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './db.js'
import router from './routes/router.js'


dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/api', router);


connectDB()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
