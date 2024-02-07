import dotenv from 'dotenv'
import express from 'express'
import homeRoutes from './src/routes/homeRoutes'
import alunoRoutes from './src/routes/alunoRoutes'
import './src/database/index'

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', homeRoutes)
app.use('/aluno', alunoRoutes)

export default app
