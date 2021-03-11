import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoute from './routes/userRoute.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API IS RUNNING')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoutes)
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT)
