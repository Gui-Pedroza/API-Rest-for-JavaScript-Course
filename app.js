import dotenv from 'dotenv'
import express from 'express'
import homeRoutes from './src/routes/homeRoutes'

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', homeRoutes)

export default app
