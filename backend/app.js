import express from 'express'
const app = express()
import db from './config/db.js'
import expertosRoutes from './routes/expertosRoutes.js'
import pymesRoutes from './routes/pymesRoutes.js'
import cors from "cors"

const port = process.env.PORT || 3000

app.use(express.json());  
app.use(cors());
app.use('/api', expertosRoutes);
app.use('/api', pymesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
