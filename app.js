import dotenv from 'dotenv'
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from 'body-parser'
import express from 'express'
import homeRoutes from './src/routes/homeRoutes'
import alunoRoutes from './src/routes/alunoRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import './src/database/index'

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use('/', homeRoutes)
app.use('/alunos', alunoRoutes)
app.use('/users', userRoutes)
app.use('/tokens', tokenRoutes)

export default app
